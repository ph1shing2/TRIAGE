import { useState } from 'react';
import { Clock, MapPin, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react';
import { Language, useTranslation } from '../utils/translations';
import { RouteStop } from '../data/cityRoutes';
import { TriageLevel } from './TriageResult';

interface RouteViewProps {
  language: Language;
  triageLevel: TriageLevel;
  route: RouteStop[];
  onBack: () => void;
  onViewDashboard: () => void;
}

export function RouteView({ language, triageLevel, route, onBack, onViewDashboard }: RouteViewProps) {
  const { t } = useTranslation(language);
  const [completedStops, setCompletedStops] = useState<Set<number>>(new Set());

  const handleToggleComplete = (index: number) => {
    setCompletedStops(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const progressPercentage = (completedStops.size / route.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              {t.route.title}
            </h2>
            <p className="text-lg text-gray-600">
              {t.route.subtitle}
            </p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold text-gray-900">
                {t.route.progress}
              </span>
              <span className="text-lg font-semibold text-blue-600">
                {completedStops.size} / {route.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {triageLevel === 'red' && (
            <div className="mb-8 bg-red-50 border-2 border-red-500 rounded-xl p-4 flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div className="text-red-800">
                <p className="font-semibold">
                  {t.route.staffAlert}
                </p>
                <p className="text-sm mt-1">
                  {t.result.triageExplanation.red}
                </p>
              </div>
            </div>
          )}

          <div className="space-y-6">
            {route.map((stop, index) => {
              const isCompleted = completedStops.has(index);
              const isLast = index === route.length - 1;

              return (
                <div key={index} className="relative">
                  {!isLast && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-300"></div>
                  )}

                  <div
                    className={`relative bg-gradient-to-br ${
                      isCompleted ? 'from-green-50 to-green-100' : 'from-white to-gray-50'
                    } rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-2 ${
                      isCompleted ? 'border-green-500' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 ${
                          isCompleted
                            ? 'bg-green-600 text-white'
                            : 'bg-blue-600 text-white'
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle className="w-6 h-6" />
                        ) : (
                          index + 1
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {stop.attractionName}
                            </h3>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{stop.startTime}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>
                                  {stop.duration} {t.common.minutes}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {stop.tips && (
                          <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-4 mb-4">
                            <div className="flex items-start gap-2">
                              <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="font-semibold text-blue-900 text-sm">
                                  {t.route.tips}
                                </p>
                                <p className="text-blue-800 text-sm mt-1">
                                  {stop.tips}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        {stop.staffAlert && triageLevel !== 'green' && (
                          <div className="bg-red-50 border-l-4 border-red-500 rounded p-4 mb-4">
                            <div className="flex items-start gap-2">
                              <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="font-semibold text-red-900 text-sm">
                                  {t.route.staffAlert}
                                </p>
                                <p className="text-red-800 text-sm mt-1">
                                  {stop.staffAlert}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        <button
                          onClick={() => handleToggleComplete(index)}
                          className={`px-4 py-2 rounded-lg font-medium transition-all ${
                            isCompleted
                              ? 'bg-green-600 text-white hover:bg-green-700'
                              : 'bg-blue-600 text-white hover:bg-blue-700'
                          }`}
                        >
                          {isCompleted ? (
                            <span className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4" />
                              {t.route.markComplete}
                            </span>
                          ) : (
                            t.route.markComplete
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-4 mt-8">
            <button
              onClick={onBack}
              className="flex-1 px-6 py-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-xl transition-all"
            >
              {t.route.backButton}
            </button>
            <button
              onClick={onViewDashboard}
              className="flex-1 px-6 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              {t.route.dashboardButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
