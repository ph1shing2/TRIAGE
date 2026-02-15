import { useState } from 'react';
import { SplashScreen } from './app/components/SplashScreen';
import { LanguageSelection } from './app/components/LanguageSelection';
import { WelcomeScreen } from './app/components/WelcomeScreen';
import { IntakeForm, VisitorData } from './app/components/IntakeForm';
import { TriageResult, TriageLevel } from './app/components/TriageResult';
import { RouteView } from './app/components/RouteView';
import { Dashboard } from './app/components/Dashboard';
import { Language } from './app/utils/translations';
import { Attraction, getRecommendedAttractions } from './app/data/cityAttractions';
import { RouteStop, generatePersonalizedRoute } from './app/data/cityRoutes';

type Screen = 'splash' | 'language' | 'welcome' | 'intake' | 'result' | 'route' | 'dashboard';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [language, setLanguage] = useState<Language>('en');
  const [visitorData, setVisitorData] = useState<VisitorData | null>(null);
  const [triageLevel, setTriageLevel] = useState<TriageLevel>('green');
  const [recommendations, setRecommendations] = useState<Attraction[]>([]);
  const [route, setRoute] = useState<RouteStop[]>([]);

  const calculateTriageLevel = (data: VisitorData): TriageLevel => {
    let score = 0;

    if (data.specialNeeds.length > 0) {
      score += 2;
    }

    if (data.timeConstraints === 'morning' || data.timeConstraints === 'afternoon') {
      score += 1;
    }

    if (data.duration <= 3) {
      score += 1;
    }

    if (data.specialNeeds.includes('accessibility')) {
      score += 2;
    }

    if (data.specialNeeds.includes('childFriendly') || data.specialNeeds.includes('dietary')) {
      score += 1;
    }

    if (score >= 4) return 'red';
    if (score >= 2) return 'yellow';
    return 'green';
  };

  const handleLanguageSelect = (selectedLanguage: string) => {
    setLanguage(selectedLanguage as Language);
    setCurrentScreen('welcome');
  };

  const handleStartJourney = () => {
    setCurrentScreen('intake');
  };

  const handleIntakeSubmit = (data: VisitorData) => {
    setVisitorData(data);

    const triage = calculateTriageLevel(data);
    setTriageLevel(triage);

    const attractionRecommendations = getRecommendedAttractions(
      data.city,
      data.interests,
      data.duration
    );
    setRecommendations(attractionRecommendations);

    const attractionIds = attractionRecommendations.map(a => a.id);
    const personalizedRoute = generatePersonalizedRoute(data.city, attractionIds);
    setRoute(personalizedRoute);

    setCurrentScreen('result');
  };

  const handleViewRoute = () => {
    setCurrentScreen('route');
  };

  const handleViewDashboard = () => {
    setCurrentScreen('dashboard');
  };

  const handleBackToWelcome = () => {
    setCurrentScreen('welcome');
  };

  const handleBackToResult = () => {
    setCurrentScreen('result');
  };

  const handleStartOver = () => {
    setVisitorData(null);
    setRecommendations([]);
    setRoute([]);
    setCurrentScreen('welcome');
  };

  return (
    <>
      {currentScreen === 'splash' && (
        <SplashScreen onComplete={() => setCurrentScreen('language')} />
      )}

      {currentScreen === 'language' && (
        <LanguageSelection onLanguageSelect={handleLanguageSelect} />
      )}

      {currentScreen === 'welcome' && (
        <WelcomeScreen
          language={language}
          onStartJourney={handleStartJourney}
          onViewDashboard={handleViewDashboard}
        />
      )}

      {currentScreen === 'intake' && (
        <IntakeForm
          language={language}
          onSubmit={handleIntakeSubmit}
          onBack={handleBackToWelcome}
        />
      )}

      {currentScreen === 'result' && visitorData && (
        <TriageResult
          language={language}
          triageLevel={triageLevel}
          recommendations={recommendations}
          interests={visitorData.interests}
          onViewRoute={handleViewRoute}
          onStartOver={handleStartOver}
        />
      )}

      {currentScreen === 'route' && (
        <RouteView
          language={language}
          triageLevel={triageLevel}
          route={route}
          onBack={handleBackToResult}
          onViewDashboard={handleViewDashboard}
        />
      )}

      {currentScreen === 'dashboard' && (
        <Dashboard language={language} onBack={handleBackToWelcome} />
      )}
    </>
  );
}

export default App;
