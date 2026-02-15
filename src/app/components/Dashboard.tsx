import { useState, useEffect } from 'react';
import { Users, Clock, TrendingUp, RefreshCw, AlertTriangle } from 'lucide-react';
import { Language, useTranslation } from '../utils/translations';

interface Alert {
  id: string;
  priority: 'red' | 'yellow';
  location: string;
  time: string;
  message: string;
}

interface DashboardProps {
  language: Language;
  onBack: () => void;
}

export function Dashboard({ language, onBack }: DashboardProps) {
  const { t } = useTranslation(language);

  const [stats, setStats] = useState({
    totalVisitors: 247,
    activeVisitors: 89,
    avgWaitTime: 18,
    systemEfficiency: 94,
  });

  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: '1',
      priority: 'red',
      location: 'Butrint National Park',
      time: '14:35',
      message: 'High priority visitor requires assistance',
    },
    {
      id: '2',
      priority: 'yellow',
      location: 'Berat Castle',
      time: '14:42',
      message: 'Moderate crowd level, monitor situation',
    },
    {
      id: '3',
      priority: 'red',
      location: 'Skanderbeg Square',
      time: '15:10',
      message: 'Accessibility support needed',
    },
  ]);

  const visitorDistribution = [
    { city: 'Tiranë', count: 52 },
    { city: 'Berat', count: 38 },
    { city: 'Sarandë', count: 45 },
    { city: 'Gjirokastër', count: 31 },
    { city: 'Shkodër', count: 28 },
    { city: 'Vlorë', count: 27 },
    { city: 'Durrës', count: 18 },
    { city: 'Korcë', count: 8 },
  ];

  const crowdLevels = [
    { location: 'Skanderbeg Square', level: 'high', percentage: 85 },
    { location: 'Butrint National Park', level: 'critical', percentage: 95 },
    { location: 'Berat Castle', level: 'medium', percentage: 60 },
    { location: 'Rozafa Castle', level: 'low', percentage: 35 },
    { location: 'Ksamil Beach', level: 'critical', percentage: 98 },
  ];

  const triageDistribution = [
    { level: 'green', count: 156, percentage: 63 },
    { level: 'yellow', count: 68, percentage: 28 },
    { level: 'red', count: 23, percentage: 9 },
  ];

  const handleRefresh = () => {
    setStats(prev => ({
      ...prev,
      activeVisitors: prev.activeVisitors + Math.floor(Math.random() * 10 - 5),
      avgWaitTime: prev.avgWaitTime + Math.floor(Math.random() * 6 - 3),
      systemEfficiency: Math.min(100, prev.systemEfficiency + Math.floor(Math.random() * 4 - 2)),
    }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleRefresh();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'low':
        return 'bg-green-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'high':
        return 'bg-orange-500';
      case 'critical':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                {t.dashboard.title}
              </h2>
              <p className="text-lg text-gray-600">
                {t.dashboard.subtitle}
              </p>
            </div>
            <button
              onClick={handleRefresh}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <RefreshCw className="w-5 h-5" />
              {t.dashboard.refreshButton}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {stats.totalVisitors}
            </div>
            <div className="text-sm text-gray-600">
              {t.dashboard.totalVisitors}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {stats.activeVisitors}
            </div>
            <div className="text-sm text-gray-600">
              {t.dashboard.activeVisitors}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {stats.avgWaitTime} {t.common.minutes.toLowerCase()}
            </div>
            <div className="text-sm text-gray-600">
              {t.dashboard.avgWaitTime}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {stats.systemEfficiency}%
            </div>
            <div className="text-sm text-gray-600">
              {t.dashboard.systemEfficiency}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              {t.dashboard.visitorDistribution}
            </h3>
            <div className="space-y-4">
              {visitorDistribution.map((item) => (
                <div key={item.city}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{item.city}</span>
                    <span className="font-semibold text-gray-900">{item.count}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${(item.count / 52) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              {t.dashboard.crowdLevels}
            </h3>
            <div className="space-y-4">
              {crowdLevels.map((item) => (
                <div key={item.location}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{item.location}</span>
                    <span className={`font-semibold ${
                      item.level === 'low' ? 'text-green-600' :
                      item.level === 'medium' ? 'text-yellow-600' :
                      item.level === 'high' ? 'text-orange-600' :
                      'text-red-600'
                    }`}>
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${getLevelColor(item.level)}`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              {t.dashboard.triageDistribution}
            </h3>
            <div className="space-y-4">
              {triageDistribution.map((item) => (
                <div key={item.level} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-4 h-4 rounded-full ${
                        item.level === 'green' ? 'bg-green-500' :
                        item.level === 'yellow' ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}
                    ></div>
                    <span className="font-medium text-gray-700">
                      {item.level === 'green' ? t.dashboard.green :
                       item.level === 'yellow' ? t.dashboard.yellow :
                       t.dashboard.red}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{item.count}</div>
                    <div className="text-sm text-gray-500">{item.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              {t.dashboard.activeAlerts}
            </h3>
            {alerts.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                {t.dashboard.noAlerts}
              </div>
            ) : (
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div
                    key={alert.id}
                    className={`border-l-4 ${
                      alert.priority === 'red' ? 'border-red-500 bg-red-50' : 'border-yellow-500 bg-yellow-50'
                    } rounded-r-lg p-4`}
                  >
                    <div className="flex items-start gap-3">
                      <AlertTriangle
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          alert.priority === 'red' ? 'text-red-600' : 'text-yellow-600'
                        }`}
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <span
                            className={`font-semibold ${
                              alert.priority === 'red' ? 'text-red-900' : 'text-yellow-900'
                            }`}
                          >
                            {alert.location}
                          </span>
                          <span
                            className={`text-sm ${
                              alert.priority === 'red' ? 'text-red-700' : 'text-yellow-700'
                            }`}
                          >
                            {alert.time}
                          </span>
                        </div>
                        <p
                          className={`text-sm ${
                            alert.priority === 'red' ? 'text-red-800' : 'text-yellow-800'
                          }`}
                        >
                          {alert.message}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={onBack}
            className="px-8 py-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-xl transition-all"
          >
            {t.dashboard.backButton}
          </button>
        </div>
      </div>
    </div>
  );
}
