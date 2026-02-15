import { AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';
import { Language, useTranslation } from '../utils/translations';
import { Attraction, calculateMatchScore } from '../data/cityAttractions';

export type TriageLevel = 'green' | 'yellow' | 'red';

interface TriageResultProps {
  language: Language;
  triageLevel: TriageLevel;
  recommendations: Attraction[];
  interests: string[];
  onViewRoute: () => void;
  onStartOver: () => void;
}

export function TriageResult({
  language,
  triageLevel,
  recommendations,
  interests,
  onViewRoute,
  onStartOver,
}: TriageResultProps) {
  const { t } = useTranslation(language);

  const triageConfig = {
    green: {
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      borderColor: 'border-green-500',
    },
    yellow: {
      icon: AlertTriangle,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
      borderColor: 'border-yellow-500',
    },
    red: {
      icon: AlertCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      borderColor: 'border-red-500',
    },
  };

  const config = triageConfig[triageLevel];
  const Icon = config.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            {t.result.title}
          </h2>

          <div className={`border-4 ${config.borderColor} ${config.bgColor} rounded-xl p-6 mb-8`}>
            <div className="flex items-center gap-4">
              <Icon className={`w-16 h-16 ${config.color}`} />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {t.result.yourLevel}
                </h3>
                <p className="text-lg text-gray-700">
                  {t.result.triageExplanation[triageLevel]}
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {t.result.recommendations}
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {recommendations.map((attraction) => {
              const matchScore = calculateMatchScore(attraction, interests);

              return (
                <div
                  key={attraction.id}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-semibold text-gray-900">
                      {attraction.name}
                    </h4>
                    <div className="flex items-center gap-2">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">
                          {matchScore}%
                        </div>
                        <div className="text-xs text-gray-500">
                          {t.result.matchScore}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {attraction.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">{t.common.loading.replace('...', '')}</div>
                      <div className={`font-semibold ${
                        attraction.crowdLevel === 'low' ? 'text-green-600' :
                        attraction.crowdLevel === 'medium' ? 'text-yellow-600' :
                        attraction.crowdLevel === 'high' ? 'text-orange-600' :
                        'text-red-600'
                      }`}>
                        {attraction.crowdLevel === 'low' ? t.dashboard.low :
                         attraction.crowdLevel === 'medium' ? t.dashboard.medium :
                         attraction.crowdLevel === 'high' ? t.dashboard.high :
                         t.dashboard.critical}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500">{t.dashboard.avgWaitTime.split(' ')[0]}</div>
                      <div className="font-semibold text-gray-900">
                        {attraction.waitTime} {t.common.minutes}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500">{t.dashboard.location}</div>
                      <div className="font-semibold text-gray-900">
                        {attraction.distance} km
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-4 mt-8">
            <button
              onClick={onStartOver}
              className="flex-1 px-6 py-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-xl transition-all"
            >
              {t.result.startOverButton}
            </button>
            <button
              onClick={onViewRoute}
              className="flex-1 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              {t.result.viewRouteButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
