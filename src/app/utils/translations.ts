export type Language = 'sq' | 'en' | 'it' | 'de' | 'fr' | 'es';

export interface Translations {
  welcome: {
    title: string;
    subtitle: string;
    startButton: string;
    dashboardButton: string;
    features: {
      smart: { title: string; description: string };
      personalized: { title: string; description: string };
      realtime: { title: string; description: string };
    };
  };
  intake: {
    title: string;
    subtitle: string;
    city: string;
    groupSize: string;
    duration: string;
    hours: string;
    interests: string;
    specialNeeds: string;
    timeConstraints: string;
    submitButton: string;
    backButton: string;
    cities: {
      tirane: string;
      shkoder: string;
      berat: string;
      gjirokaster: string;
      sarande: string;
      vlore: string;
      durres: string;
      korce: string;
    };
    interestOptions: {
      history: string;
      culture: string;
      nature: string;
      food: string;
      adventure: string;
      relaxation: string;
      photography: string;
      shopping: string;
    };
    specialNeedsOptions: {
      accessibility: string;
      childFriendly: string;
      petFriendly: string;
      dietary: string;
    };
    timeConstraintsOptions: {
      morning: string;
      afternoon: string;
      evening: string;
      flexible: string;
    };
  };
  result: {
    title: string;
    yourLevel: string;
    recommendations: string;
    viewRouteButton: string;
    startOverButton: string;
    triageExplanation: {
      green: string;
      yellow: string;
      red: string;
    };
    matchScore: string;
  };
  route: {
    title: string;
    subtitle: string;
    timeline: string;
    progress: string;
    markComplete: string;
    backButton: string;
    dashboardButton: string;
    stop: string;
    duration: string;
    tips: string;
    staffAlert: string;
  };
  dashboard: {
    title: string;
    subtitle: string;
    overview: string;
    totalVisitors: string;
    activeVisitors: string;
    avgWaitTime: string;
    systemEfficiency: string;
    visitorDistribution: string;
    crowdLevels: string;
    triageDistribution: string;
    activeAlerts: string;
    backButton: string;
    refreshButton: string;
    low: string;
    medium: string;
    high: string;
    critical: string;
    green: string;
    yellow: string;
    red: string;
    priority: string;
    location: string;
    time: string;
    noAlerts: string;
  };
  common: {
    loading: string;
    error: string;
    close: string;
    save: string;
    cancel: string;
    minutes: string;
  };
}

export const translations: Record<Language, Translations> = {
  sq: {
    welcome: {
      title: 'Mirë se vini në TRIAGE',
      subtitle: 'Motori i Udhëzimit për Ruajtjen dhe Ndarjen Inteligjente të Turizmit',
      startButton: 'Filloni Planifikimin e Udhëtimit',
      dashboardButton: 'Paneli i Monitorimit të Stafit',
      features: {
        smart: {
          title: 'Klasifikimi i Zgjuar',
          description: 'Përparësia automatike e vizitorëve me nevoja të veçanta ose kufizime kohore',
        },
        personalized: {
          title: 'Rrugët e Personalizuara',
          description: 'Itinerarë të optimizuar bazuar në interesat, madhësinë e grupit dhe kohëzgjatjen',
        },
        realtime: {
          title: 'Monitorimi në Kohë Reale',
          description: 'Dashboard i stafit për gjurmimin e nivelit të turmës dhe menaxhimin e fluks',
        },
      },
    },
    intake: {
      title: 'Planifikoni Vizitën Tuaj',
      subtitle: 'Tregoni informacion për të marrë rekomandime të personalizuara',
      city: 'Zgjidhni Qytetin',
      groupSize: 'Madhësia e Grupit',
      duration: 'Kohëzgjatja e Vizitës',
      hours: 'orë',
      interests: 'Interesat Tuaja',
      specialNeeds: 'Nevoja të Veçanta',
      timeConstraints: 'Preferencat e Kohës',
      submitButton: 'Merrni Rekomandimet',
      backButton: 'Mbrapsht',
      cities: {
        tirane: 'Tiranë',
        shkoder: 'Shkodër',
        berat: 'Berat',
        gjirokaster: 'Gjirokastër',
        sarande: 'Sarandë',
        vlore: 'Vlorë',
        durres: 'Durrës',
        korce: 'Korcë',
      },
      interestOptions: {
        history: 'Histori',
        culture: 'Kulturë',
        nature: 'Natyrë',
        food: 'Ushqim',
        adventure: 'Aventurë',
        relaxation: 'Relaksim',
        photography: 'Fotografi',
        shopping: 'Blerje',
      },
      specialNeedsOptions: {
        accessibility: 'Qasje për Persona me Aftësi të Kufizuara',
        childFriendly: 'Miqësor për Fëmijë',
        petFriendly: 'Miqësor për Kafshë Shtëpiake',
        dietary: 'Kërkesa Dietike',
      },
      timeConstraintsOptions: {
        morning: 'Mëngjes (8:00 - 12:00)',
        afternoon: 'Pasdite (12:00 - 17:00)',
        evening: 'Mbrëmje (17:00 - 21:00)',
        flexible: 'Fleksibël',
      },
    },
    result: {
      title: 'Rezultatet e Klasifikimit Tuaj',
      yourLevel: 'Niveli Juaj i Prioritetit',
      recommendations: 'Atraksionet e Rekomanduara',
      viewRouteButton: 'Shikoni Rrugën e Detajuar',
      startOverButton: 'Filloni Përsëri',
      triageExplanation: {
        green: 'Standart - Vizitë fleksibël pa kërkesa urgjente',
        yellow: 'Prioritet - Disa nevoja të veçanta ose kufizime kohore',
        red: 'Prioritet i Lartë - Nevoja urgjente ose kufizime të rëndësishme',
      },
      matchScore: 'Përputhje',
    },
    route: {
      title: 'Itinerari Juaj i Personalizuar',
      subtitle: 'Optimizuar për preferencat dhe kohën tuaj',
      timeline: 'Afati Kohor',
      progress: 'Progresi',
      markComplete: 'Shëno si të Plotësuar',
      backButton: 'Mbrapsht',
      dashboardButton: 'Shiko Dashboard',
      stop: 'Ndalesë',
      duration: 'Kohëzgjatja',
      tips: 'Këshilla',
      staffAlert: 'Njoftim për Stafin',
    },
    dashboard: {
      title: 'Dashboard i Monitorimit të Stafit',
      subtitle: 'Monitorimi dhe menaxhimi i fluks të vizitorëve në kohë reale',
      overview: 'Përmbledhje e Sistemit',
      totalVisitors: 'Vizitorë të Përgjithshëm Sot',
      activeVisitors: 'Vizitorë Aktivë',
      avgWaitTime: 'Koha Mesatare e Pritjes',
      systemEfficiency: 'Efikasiteti i Sistemit',
      visitorDistribution: 'Shpërndarja e Vizitorëve sipas Qytetit',
      crowdLevels: 'Nivelet e Turmës sipas Vendndodhjes',
      triageDistribution: 'Shpërndarja e Klasifikimit',
      activeAlerts: 'Njoftime Aktive',
      backButton: 'Kthehu te Ekrani Kryesor',
      refreshButton: 'Rifresko të Dhënat',
      low: 'E ulët',
      medium: 'Mesatare',
      high: 'E lartë',
      critical: 'Kritike',
      green: 'E Gjelbër',
      yellow: 'E Verdhë',
      red: 'E Kuqe',
      priority: 'Prioritet',
      location: 'Vendndodhja',
      time: 'Koha',
      noAlerts: 'Nuk ka njoftime aktive',
    },
    common: {
      loading: 'Duke u ngarkuar...',
      error: 'Ndodhi një gabim',
      close: 'Mbyll',
      save: 'Ruaj',
      cancel: 'Anulo',
      minutes: 'minuta',
    },
  },
  en: {
    welcome: {
      title: 'Welcome to TRIAGE',
      subtitle: 'Tourism Routing & Intelligent Allocation Guidance Engine',
      startButton: 'Start Your Journey',
      dashboardButton: 'Staff Monitoring Dashboard',
      features: {
        smart: {
          title: 'Smart Classification',
          description: 'Automatic prioritization of visitors with special needs or time constraints',
        },
        personalized: {
          title: 'Personalized Routes',
          description: 'Optimized itineraries based on interests, group size, and duration',
        },
        realtime: {
          title: 'Real-time Monitoring',
          description: 'Staff dashboard for tracking crowd levels and managing flow',
        },
      },
    },
    intake: {
      title: 'Plan Your Visit',
      subtitle: 'Tell us about yourself to get personalized recommendations',
      city: 'Select City',
      groupSize: 'Group Size',
      duration: 'Visit Duration',
      hours: 'hours',
      interests: 'Your Interests',
      specialNeeds: 'Special Needs',
      timeConstraints: 'Time Preferences',
      submitButton: 'Get Recommendations',
      backButton: 'Back',
      cities: {
        tirane: 'Tirana',
        shkoder: 'Shkodër',
        berat: 'Berat',
        gjirokaster: 'Gjirokastër',
        sarande: 'Sarandë',
        vlore: 'Vlorë',
        durres: 'Durrës',
        korce: 'Korcë',
      },
      interestOptions: {
        history: 'History',
        culture: 'Culture',
        nature: 'Nature',
        food: 'Food',
        adventure: 'Adventure',
        relaxation: 'Relaxation',
        photography: 'Photography',
        shopping: 'Shopping',
      },
      specialNeedsOptions: {
        accessibility: 'Accessibility',
        childFriendly: 'Child Friendly',
        petFriendly: 'Pet Friendly',
        dietary: 'Dietary Requirements',
      },
      timeConstraintsOptions: {
        morning: 'Morning (8:00 - 12:00)',
        afternoon: 'Afternoon (12:00 - 17:00)',
        evening: 'Evening (17:00 - 21:00)',
        flexible: 'Flexible',
      },
    },
    result: {
      title: 'Your Triage Results',
      yourLevel: 'Your Priority Level',
      recommendations: 'Recommended Attractions',
      viewRouteButton: 'View Detailed Route',
      startOverButton: 'Start Over',
      triageExplanation: {
        green: 'Standard - Flexible visit with no urgent requirements',
        yellow: 'Priority - Some special needs or time constraints',
        red: 'High Priority - Urgent needs or significant constraints',
      },
      matchScore: 'Match',
    },
    route: {
      title: 'Your Personalized Itinerary',
      subtitle: 'Optimized for your preferences and schedule',
      timeline: 'Timeline',
      progress: 'Progress',
      markComplete: 'Mark as Complete',
      backButton: 'Back',
      dashboardButton: 'View Dashboard',
      stop: 'Stop',
      duration: 'Duration',
      tips: 'Tips',
      staffAlert: 'Staff Alert',
    },
    dashboard: {
      title: 'Staff Monitoring Dashboard',
      subtitle: 'Real-time visitor flow monitoring and management',
      overview: 'System Overview',
      totalVisitors: 'Total Visitors Today',
      activeVisitors: 'Active Visitors',
      avgWaitTime: 'Average Wait Time',
      systemEfficiency: 'System Efficiency',
      visitorDistribution: 'Visitor Distribution by City',
      crowdLevels: 'Crowd Levels by Location',
      triageDistribution: 'Triage Distribution',
      activeAlerts: 'Active Alerts',
      backButton: 'Back to Main',
      refreshButton: 'Refresh Data',
      low: 'Low',
      medium: 'Medium',
      high: 'High',
      critical: 'Critical',
      green: 'Green',
      yellow: 'Yellow',
      red: 'Red',
      priority: 'Priority',
      location: 'Location',
      time: 'Time',
      noAlerts: 'No active alerts',
    },
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      close: 'Close',
      save: 'Save',
      cancel: 'Cancel',
      minutes: 'minutes',
    },
  },
  it: {
    welcome: {
      title: 'Benvenuti a TRIAGE',
      subtitle: 'Motore di Guida per il Routing Turistico e l\'Allocazione Intelligente',
      startButton: 'Inizia il Tuo Viaggio',
      dashboardButton: 'Dashboard di Monitoraggio del Personale',
      features: {
        smart: {
          title: 'Classificazione Intelligente',
          description: 'Prioritizzazione automatica dei visitatori con esigenze speciali o vincoli di tempo',
        },
        personalized: {
          title: 'Percorsi Personalizzati',
          description: 'Itinerari ottimizzati in base agli interessi, dimensione del gruppo e durata',
        },
        realtime: {
          title: 'Monitoraggio in Tempo Reale',
          description: 'Dashboard del personale per tracciare i livelli di affluenza e gestire il flusso',
        },
      },
    },
    intake: {
      title: 'Pianifica la Tua Visita',
      subtitle: 'Raccontaci di te per ricevere raccomandazioni personalizzate',
      city: 'Seleziona Città',
      groupSize: 'Dimensione del Gruppo',
      duration: 'Durata della Visita',
      hours: 'ore',
      interests: 'I Tuoi Interessi',
      specialNeeds: 'Esigenze Speciali',
      timeConstraints: 'Preferenze Orarie',
      submitButton: 'Ottieni Raccomandazioni',
      backButton: 'Indietro',
      cities: {
        tirane: 'Tirana',
        shkoder: 'Scutari',
        berat: 'Berat',
        gjirokaster: 'Argirocastro',
        sarande: 'Saranda',
        vlore: 'Valona',
        durres: 'Durazzo',
        korce: 'Coriza',
      },
      interestOptions: {
        history: 'Storia',
        culture: 'Cultura',
        nature: 'Natura',
        food: 'Cibo',
        adventure: 'Avventura',
        relaxation: 'Relax',
        photography: 'Fotografia',
        shopping: 'Shopping',
      },
      specialNeedsOptions: {
        accessibility: 'Accessibilità',
        childFriendly: 'Adatto ai Bambini',
        petFriendly: 'Adatto agli Animali',
        dietary: 'Requisiti Dietetici',
      },
      timeConstraintsOptions: {
        morning: 'Mattina (8:00 - 12:00)',
        afternoon: 'Pomeriggio (12:00 - 17:00)',
        evening: 'Sera (17:00 - 21:00)',
        flexible: 'Flessibile',
      },
    },
    result: {
      title: 'I Tuoi Risultati di Triage',
      yourLevel: 'Il Tuo Livello di Priorità',
      recommendations: 'Attrazioni Raccomandate',
      viewRouteButton: 'Visualizza Percorso Dettagliato',
      startOverButton: 'Ricomincia',
      triageExplanation: {
        green: 'Standard - Visita flessibile senza requisiti urgenti',
        yellow: 'Priorità - Alcune esigenze speciali o vincoli di tempo',
        red: 'Alta Priorità - Esigenze urgenti o vincoli significativi',
      },
      matchScore: 'Corrispondenza',
    },
    route: {
      title: 'Il Tuo Itinerario Personalizzato',
      subtitle: 'Ottimizzato per le tue preferenze e programma',
      timeline: 'Cronologia',
      progress: 'Progresso',
      markComplete: 'Segna come Completato',
      backButton: 'Indietro',
      dashboardButton: 'Visualizza Dashboard',
      stop: 'Tappa',
      duration: 'Durata',
      tips: 'Suggerimenti',
      staffAlert: 'Avviso Personale',
    },
    dashboard: {
      title: 'Dashboard di Monitoraggio del Personale',
      subtitle: 'Monitoraggio e gestione del flusso di visitatori in tempo reale',
      overview: 'Panoramica del Sistema',
      totalVisitors: 'Visitatori Totali Oggi',
      activeVisitors: 'Visitatori Attivi',
      avgWaitTime: 'Tempo di Attesa Medio',
      systemEfficiency: 'Efficienza del Sistema',
      visitorDistribution: 'Distribuzione dei Visitatori per Città',
      crowdLevels: 'Livelli di Affluenza per Località',
      triageDistribution: 'Distribuzione Triage',
      activeAlerts: 'Avvisi Attivi',
      backButton: 'Torna alla Principale',
      refreshButton: 'Aggiorna Dati',
      low: 'Basso',
      medium: 'Medio',
      high: 'Alto',
      critical: 'Critico',
      green: 'Verde',
      yellow: 'Giallo',
      red: 'Rosso',
      priority: 'Priorità',
      location: 'Posizione',
      time: 'Ora',
      noAlerts: 'Nessun avviso attivo',
    },
    common: {
      loading: 'Caricamento...',
      error: 'Si è verificato un errore',
      close: 'Chiudi',
      save: 'Salva',
      cancel: 'Annulla',
      minutes: 'minuti',
    },
  },
  de: {
    welcome: {
      title: 'Willkommen bei TRIAGE',
      subtitle: 'Tourismus-Routing & Intelligente Zuteilungsanleitung',
      startButton: 'Beginnen Sie Ihre Reise',
      dashboardButton: 'Mitarbeiter-Überwachungs-Dashboard',
      features: {
        smart: {
          title: 'Intelligente Klassifizierung',
          description: 'Automatische Priorisierung von Besuchern mit besonderen Bedürfnissen oder Zeitbeschränkungen',
        },
        personalized: {
          title: 'Personalisierte Routen',
          description: 'Optimierte Reiserouten basierend auf Interessen, Gruppengröße und Dauer',
        },
        realtime: {
          title: 'Echtzeit-Überwachung',
          description: 'Mitarbeiter-Dashboard zur Verfolgung von Besucherzahlen und Flussmanagement',
        },
      },
    },
    intake: {
      title: 'Planen Sie Ihren Besuch',
      subtitle: 'Erzählen Sie uns von sich, um personalisierte Empfehlungen zu erhalten',
      city: 'Stadt Auswählen',
      groupSize: 'Gruppengröße',
      duration: 'Besuchsdauer',
      hours: 'Stunden',
      interests: 'Ihre Interessen',
      specialNeeds: 'Besondere Bedürfnisse',
      timeConstraints: 'Zeitpräferenzen',
      submitButton: 'Empfehlungen Erhalten',
      backButton: 'Zurück',
      cities: {
        tirane: 'Tirana',
        shkoder: 'Shkodra',
        berat: 'Berat',
        gjirokaster: 'Gjirokastra',
        sarande: 'Saranda',
        vlore: 'Vlora',
        durres: 'Durrës',
        korce: 'Korça',
      },
      interestOptions: {
        history: 'Geschichte',
        culture: 'Kultur',
        nature: 'Natur',
        food: 'Essen',
        adventure: 'Abenteuer',
        relaxation: 'Entspannung',
        photography: 'Fotografie',
        shopping: 'Einkaufen',
      },
      specialNeedsOptions: {
        accessibility: 'Barrierefreiheit',
        childFriendly: 'Kinderfreundlich',
        petFriendly: 'Haustierfreundlich',
        dietary: 'Ernährungsanforderungen',
      },
      timeConstraintsOptions: {
        morning: 'Morgen (8:00 - 12:00)',
        afternoon: 'Nachmittag (12:00 - 17:00)',
        evening: 'Abend (17:00 - 21:00)',
        flexible: 'Flexibel',
      },
    },
    result: {
      title: 'Ihre Triage-Ergebnisse',
      yourLevel: 'Ihre Prioritätsstufe',
      recommendations: 'Empfohlene Sehenswürdigkeiten',
      viewRouteButton: 'Detaillierte Route Anzeigen',
      startOverButton: 'Neu Beginnen',
      triageExplanation: {
        green: 'Standard - Flexibler Besuch ohne dringende Anforderungen',
        yellow: 'Priorität - Einige besondere Bedürfnisse oder Zeitbeschränkungen',
        red: 'Hohe Priorität - Dringende Bedürfnisse oder erhebliche Einschränkungen',
      },
      matchScore: 'Übereinstimmung',
    },
    route: {
      title: 'Ihre Personalisierte Reiseroute',
      subtitle: 'Optimiert für Ihre Präferenzen und Ihren Zeitplan',
      timeline: 'Zeitplan',
      progress: 'Fortschritt',
      markComplete: 'Als Abgeschlossen Markieren',
      backButton: 'Zurück',
      dashboardButton: 'Dashboard Anzeigen',
      stop: 'Halt',
      duration: 'Dauer',
      tips: 'Tipps',
      staffAlert: 'Mitarbeiterwarnung',
    },
    dashboard: {
      title: 'Mitarbeiter-Überwachungs-Dashboard',
      subtitle: 'Echtzeit-Überwachung und Verwaltung des Besucherflusses',
      overview: 'Systemübersicht',
      totalVisitors: 'Gesamtbesucher Heute',
      activeVisitors: 'Aktive Besucher',
      avgWaitTime: 'Durchschnittliche Wartezeit',
      systemEfficiency: 'Systemeffizienz',
      visitorDistribution: 'Besucherverteilung nach Stadt',
      crowdLevels: 'Besucherzahlen nach Standort',
      triageDistribution: 'Triage-Verteilung',
      activeAlerts: 'Aktive Warnungen',
      backButton: 'Zurück zur Hauptseite',
      refreshButton: 'Daten Aktualisieren',
      low: 'Niedrig',
      medium: 'Mittel',
      high: 'Hoch',
      critical: 'Kritisch',
      green: 'Grün',
      yellow: 'Gelb',
      red: 'Rot',
      priority: 'Priorität',
      location: 'Standort',
      time: 'Zeit',
      noAlerts: 'Keine aktiven Warnungen',
    },
    common: {
      loading: 'Lädt...',
      error: 'Ein Fehler ist aufgetreten',
      close: 'Schließen',
      save: 'Speichern',
      cancel: 'Abbrechen',
      minutes: 'Minuten',
    },
  },
  fr: {
    welcome: {
      title: 'Bienvenue à TRIAGE',
      subtitle: 'Moteur de Guidage pour le Routage Touristique et l\'Allocation Intelligente',
      startButton: 'Commencez Votre Voyage',
      dashboardButton: 'Tableau de Bord de Surveillance du Personnel',
      features: {
        smart: {
          title: 'Classification Intelligente',
          description: 'Priorisation automatique des visiteurs avec des besoins spéciaux ou des contraintes de temps',
        },
        personalized: {
          title: 'Itinéraires Personnalisés',
          description: 'Itinéraires optimisés basés sur les intérêts, la taille du groupe et la durée',
        },
        realtime: {
          title: 'Surveillance en Temps Réel',
          description: 'Tableau de bord du personnel pour suivre les niveaux d\'affluence et gérer le flux',
        },
      },
    },
    intake: {
      title: 'Planifiez Votre Visite',
      subtitle: 'Parlez-nous de vous pour obtenir des recommandations personnalisées',
      city: 'Sélectionner la Ville',
      groupSize: 'Taille du Groupe',
      duration: 'Durée de la Visite',
      hours: 'heures',
      interests: 'Vos Intérêts',
      specialNeeds: 'Besoins Spéciaux',
      timeConstraints: 'Préférences Horaires',
      submitButton: 'Obtenir des Recommandations',
      backButton: 'Retour',
      cities: {
        tirane: 'Tirana',
        shkoder: 'Shkodër',
        berat: 'Berat',
        gjirokaster: 'Gjirokastër',
        sarande: 'Sarandë',
        vlore: 'Vlorë',
        durres: 'Durrës',
        korce: 'Korcë',
      },
      interestOptions: {
        history: 'Histoire',
        culture: 'Culture',
        nature: 'Nature',
        food: 'Nourriture',
        adventure: 'Aventure',
        relaxation: 'Détente',
        photography: 'Photographie',
        shopping: 'Shopping',
      },
      specialNeedsOptions: {
        accessibility: 'Accessibilité',
        childFriendly: 'Adapté aux Enfants',
        petFriendly: 'Adapté aux Animaux',
        dietary: 'Exigences Alimentaires',
      },
      timeConstraintsOptions: {
        morning: 'Matin (8:00 - 12:00)',
        afternoon: 'Après-midi (12:00 - 17:00)',
        evening: 'Soirée (17:00 - 21:00)',
        flexible: 'Flexible',
      },
    },
    result: {
      title: 'Vos Résultats de Triage',
      yourLevel: 'Votre Niveau de Priorité',
      recommendations: 'Attractions Recommandées',
      viewRouteButton: 'Voir l\'Itinéraire Détaillé',
      startOverButton: 'Recommencer',
      triageExplanation: {
        green: 'Standard - Visite flexible sans exigences urgentes',
        yellow: 'Priorité - Certains besoins spéciaux ou contraintes de temps',
        red: 'Haute Priorité - Besoins urgents ou contraintes importantes',
      },
      matchScore: 'Correspondance',
    },
    route: {
      title: 'Votre Itinéraire Personnalisé',
      subtitle: 'Optimisé pour vos préférences et votre emploi du temps',
      timeline: 'Chronologie',
      progress: 'Progrès',
      markComplete: 'Marquer comme Terminé',
      backButton: 'Retour',
      dashboardButton: 'Voir le Tableau de Bord',
      stop: 'Arrêt',
      duration: 'Durée',
      tips: 'Conseils',
      staffAlert: 'Alerte du Personnel',
    },
    dashboard: {
      title: 'Tableau de Bord de Surveillance du Personnel',
      subtitle: 'Surveillance et gestion du flux de visiteurs en temps réel',
      overview: 'Aperçu du Système',
      totalVisitors: 'Visiteurs Totaux Aujourd\'hui',
      activeVisitors: 'Visiteurs Actifs',
      avgWaitTime: 'Temps d\'Attente Moyen',
      systemEfficiency: 'Efficacité du Système',
      visitorDistribution: 'Distribution des Visiteurs par Ville',
      crowdLevels: 'Niveaux d\'Affluence par Emplacement',
      triageDistribution: 'Distribution du Triage',
      activeAlerts: 'Alertes Actives',
      backButton: 'Retour à la Principale',
      refreshButton: 'Actualiser les Données',
      low: 'Faible',
      medium: 'Moyen',
      high: 'Élevé',
      critical: 'Critique',
      green: 'Vert',
      yellow: 'Jaune',
      red: 'Rouge',
      priority: 'Priorité',
      location: 'Emplacement',
      time: 'Heure',
      noAlerts: 'Aucune alerte active',
    },
    common: {
      loading: 'Chargement...',
      error: 'Une erreur s\'est produite',
      close: 'Fermer',
      save: 'Enregistrer',
      cancel: 'Annuler',
      minutes: 'minutes',
    },
  },
  es: {
    welcome: {
      title: 'Bienvenido a TRIAGE',
      subtitle: 'Motor de Guía para Enrutamiento Turístico y Asignación Inteligente',
      startButton: 'Comience Su Viaje',
      dashboardButton: 'Panel de Monitoreo del Personal',
      features: {
        smart: {
          title: 'Clasificación Inteligente',
          description: 'Priorización automática de visitantes con necesidades especiales o limitaciones de tiempo',
        },
        personalized: {
          title: 'Rutas Personalizadas',
          description: 'Itinerarios optimizados basados en intereses, tamaño del grupo y duración',
        },
        realtime: {
          title: 'Monitoreo en Tiempo Real',
          description: 'Panel del personal para rastrear niveles de multitud y gestionar el flujo',
        },
      },
    },
    intake: {
      title: 'Planifique Su Visita',
      subtitle: 'Cuéntenos sobre usted para obtener recomendaciones personalizadas',
      city: 'Seleccionar Ciudad',
      groupSize: 'Tamaño del Grupo',
      duration: 'Duración de la Visita',
      hours: 'horas',
      interests: 'Sus Intereses',
      specialNeeds: 'Necesidades Especiales',
      timeConstraints: 'Preferencias de Tiempo',
      submitButton: 'Obtener Recomendaciones',
      backButton: 'Atrás',
      cities: {
        tirane: 'Tirana',
        shkoder: 'Shkodër',
        berat: 'Berat',
        gjirokaster: 'Gjirokastër',
        sarande: 'Sarandë',
        vlore: 'Vlorë',
        durres: 'Durrës',
        korce: 'Korcë',
      },
      interestOptions: {
        history: 'Historia',
        culture: 'Cultura',
        nature: 'Naturaleza',
        food: 'Comida',
        adventure: 'Aventura',
        relaxation: 'Relajación',
        photography: 'Fotografía',
        shopping: 'Compras',
      },
      specialNeedsOptions: {
        accessibility: 'Accesibilidad',
        childFriendly: 'Apto para Niños',
        petFriendly: 'Apto para Mascotas',
        dietary: 'Requisitos Dietéticos',
      },
      timeConstraintsOptions: {
        morning: 'Mañana (8:00 - 12:00)',
        afternoon: 'Tarde (12:00 - 17:00)',
        evening: 'Noche (17:00 - 21:00)',
        flexible: 'Flexible',
      },
    },
    result: {
      title: 'Sus Resultados de Triage',
      yourLevel: 'Su Nivel de Prioridad',
      recommendations: 'Atracciones Recomendadas',
      viewRouteButton: 'Ver Ruta Detallada',
      startOverButton: 'Empezar de Nuevo',
      triageExplanation: {
        green: 'Estándar - Visita flexible sin requisitos urgentes',
        yellow: 'Prioridad - Algunas necesidades especiales o limitaciones de tiempo',
        red: 'Alta Prioridad - Necesidades urgentes o limitaciones significativas',
      },
      matchScore: 'Coincidencia',
    },
    route: {
      title: 'Su Itinerario Personalizado',
      subtitle: 'Optimizado para sus preferencias y horario',
      timeline: 'Línea de Tiempo',
      progress: 'Progreso',
      markComplete: 'Marcar como Completado',
      backButton: 'Atrás',
      dashboardButton: 'Ver Panel',
      stop: 'Parada',
      duration: 'Duración',
      tips: 'Consejos',
      staffAlert: 'Alerta del Personal',
    },
    dashboard: {
      title: 'Panel de Monitoreo del Personal',
      subtitle: 'Monitoreo y gestión del flujo de visitantes en tiempo real',
      overview: 'Resumen del Sistema',
      totalVisitors: 'Visitantes Totales Hoy',
      activeVisitors: 'Visitantes Activos',
      avgWaitTime: 'Tiempo de Espera Promedio',
      systemEfficiency: 'Eficiencia del Sistema',
      visitorDistribution: 'Distribución de Visitantes por Ciudad',
      crowdLevels: 'Niveles de Multitud por Ubicación',
      triageDistribution: 'Distribución de Triage',
      activeAlerts: 'Alertas Activas',
      backButton: 'Volver a Principal',
      refreshButton: 'Actualizar Datos',
      low: 'Bajo',
      medium: 'Medio',
      high: 'Alto',
      critical: 'Crítico',
      green: 'Verde',
      yellow: 'Amarillo',
      red: 'Rojo',
      priority: 'Prioridad',
      location: 'Ubicación',
      time: 'Hora',
      noAlerts: 'No hay alertas activas',
    },
    common: {
      loading: 'Cargando...',
      error: 'Ocurrió un error',
      close: 'Cerrar',
      save: 'Guardar',
      cancel: 'Cancelar',
      minutes: 'minutos',
    },
  },
};

export function useTranslation(language: Language) {
  return {
    t: translations[language],
    language,
  };
}
