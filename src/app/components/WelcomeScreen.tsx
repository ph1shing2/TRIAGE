import { Compass, Users, Activity } from 'lucide-react';
import { Language, useTranslation } from '../utils/translations';

interface WelcomeScreenProps {
  language: Language;
  onStartJourney: () => void;
  onViewDashboard: () => void;
}

export function WelcomeScreen({ language, onStartJourney, onViewDashboard }: WelcomeScreenProps) {
  const { t } = useTranslation(language);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            {t.welcome.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.welcome.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Activity className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              {t.welcome.features.smart.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t.welcome.features.smart.description}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <Compass className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              {t.welcome.features.personalized.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t.welcome.features.personalized.description}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              {t.welcome.features.realtime.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t.welcome.features.realtime.description}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onStartJourney}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            {t.welcome.startButton}
          </button>
          <button
            onClick={onViewDashboard}
            className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all border-2 border-gray-200"
          >
            {t.welcome.dashboardButton}
          </button>
        </div>
      </div>
    </div>
  );
}
