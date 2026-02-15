export interface RouteStop {
  attractionId: string;
  attractionName: string;
  startTime: string;
  duration: number;
  tips: string;
  staffAlert?: string;
}

export interface CityRoute {
  city: string;
  stops: RouteStop[];
}

export const cityRoutes: Record<string, RouteStop[]> = {
  tirane: [
    {
      attractionId: 'tir1',
      attractionName: 'Skanderbeg Square',
      startTime: '09:00',
      duration: 45,
      tips: 'Start early to avoid crowds. Great photo opportunities with the monuments.',
    },
    {
      attractionId: 'tir2',
      attractionName: 'Et\'hem Bey Mosque',
      startTime: '10:00',
      duration: 30,
      tips: 'Remove shoes before entering. Modest dress required.',
    },
    {
      attractionId: 'tir3',
      attractionName: 'National History Museum',
      startTime: '10:45',
      duration: 90,
      tips: 'Allow plenty of time to explore all floors. English guides available.',
    },
    {
      attractionId: 'tir4',
      attractionName: 'Blloku District',
      startTime: '13:00',
      duration: 120,
      tips: 'Perfect for lunch and shopping. Try traditional Albanian cuisine.',
    },
    {
      attractionId: 'tir6',
      attractionName: 'Bunk\'Art',
      startTime: '15:30',
      duration: 90,
      tips: 'Underground bunker museum. Wear comfortable shoes.',
    },
  ],
  shkoder: [
    {
      attractionId: 'shk1',
      attractionName: 'Rozafa Castle',
      startTime: '09:00',
      duration: 120,
      tips: 'Steep climb but worth the views. Bring water and sun protection.',
    },
    {
      attractionId: 'shk2',
      attractionName: 'Marubi National Museum of Photography',
      startTime: '11:30',
      duration: 60,
      tips: 'Unique collection of historical Albanian photographs.',
    },
    {
      attractionId: 'shk4',
      attractionName: 'Pedestrian Street',
      startTime: '13:00',
      duration: 90,
      tips: 'Lunch and shopping. Local cafes serve excellent coffee.',
    },
    {
      attractionId: 'shk3',
      attractionName: 'Lake Shkodra',
      startTime: '15:00',
      duration: 90,
      tips: 'Boat tours available. Beautiful sunset views.',
    },
  ],
  berat: [
    {
      attractionId: 'ber1',
      attractionName: 'Berat Castle',
      startTime: '09:00',
      duration: 120,
      tips: 'Living castle with residents. Explore narrow streets and churches.',
    },
    {
      attractionId: 'ber6',
      attractionName: 'Onufri Museum',
      startTime: '11:30',
      duration: 60,
      tips: 'Inside the castle. Famous for religious icon collection.',
    },
    {
      attractionId: 'ber2',
      attractionName: 'Mangalem Quarter',
      startTime: '13:00',
      duration: 90,
      tips: 'Walk through the historic white houses. Lunch at riverside restaurant.',
    },
    {
      attractionId: 'ber3',
      attractionName: 'Gorica Quarter',
      startTime: '15:00',
      duration: 60,
      tips: 'Cross the bridge for panoramic views of the castle and Mangalem.',
    },
  ],
  gjirokaster: [
    {
      attractionId: 'gji1',
      attractionName: 'Gjirokaster Castle',
      startTime: '09:00',
      duration: 120,
      tips: 'Explore the castle and weapons museum. Clock tower offers best views.',
    },
    {
      attractionId: 'gji4',
      attractionName: 'Cold War Tunnel',
      startTime: '11:30',
      duration: 60,
      tips: 'Underground bunker beneath the castle. Guided tours recommended.',
    },
    {
      attractionId: 'gji2',
      attractionName: 'Old Bazaar',
      startTime: '13:00',
      duration: 90,
      tips: 'Traditional handicrafts and local products. Good lunch options.',
    },
    {
      attractionId: 'gji3',
      attractionName: 'Skenduli House',
      startTime: '15:00',
      duration: 60,
      tips: 'Ottoman-era mansion with original furnishings. Family-guided tour.',
    },
  ],
  sarande: [
    {
      attractionId: 'sar2',
      attractionName: 'Butrint National Park',
      startTime: '09:00',
      duration: 180,
      tips: 'UNESCO World Heritage site. Bring water, hat, and comfortable walking shoes.',
      staffAlert: 'Archaeological site with limited accessibility',
    },
    {
      attractionId: 'sar6',
      attractionName: 'Saranda Promenade',
      startTime: '13:00',
      duration: 90,
      tips: 'Lunch at seaside restaurants. Fresh seafood specialty.',
    },
    {
      attractionId: 'sar1',
      attractionName: 'Lekuresi Castle',
      startTime: '15:00',
      duration: 60,
      tips: 'Sunset views over Saranda bay. Restaurant on site.',
    },
    {
      attractionId: 'sar3',
      attractionName: 'Mirror Beach',
      startTime: '16:30',
      duration: 90,
      tips: 'Relax at beautiful beach. Clear turquoise water.',
    },
  ],
  vlore: [
    {
      attractionId: 'vlo1',
      attractionName: 'Independence Monument',
      startTime: '09:00',
      duration: 30,
      tips: 'Central location. Start point for city exploration.',
    },
    {
      attractionId: 'vlo5',
      attractionName: 'Muradie Mosque',
      startTime: '09:45',
      duration: 30,
      tips: 'Historic Ottoman mosque. Beautiful architecture.',
    },
    {
      attractionId: 'vlo3',
      attractionName: 'Kaninë Castle',
      startTime: '10:30',
      duration: 90,
      tips: 'Ancient fortress with panoramic views. Short drive from city.',
    },
    {
      attractionId: 'vlo2',
      attractionName: 'Vlora Beach',
      startTime: '13:00',
      duration: 150,
      tips: 'Beach lunch and relaxation. Water sports available.',
    },
  ],
  durres: [
    {
      attractionId: 'dur1',
      attractionName: 'Roman Amphitheatre',
      startTime: '09:00',
      duration: 75,
      tips: 'One of the largest Roman amphitheatres in the Balkans.',
    },
    {
      attractionId: 'dur4',
      attractionName: 'Archaeological Museum',
      startTime: '10:30',
      duration: 60,
      tips: 'Extensive collection of Roman artifacts from Durres.',
    },
    {
      attractionId: 'dur2',
      attractionName: 'Venetian Tower',
      startTime: '11:45',
      duration: 30,
      tips: 'Medieval fortification. Quick stop with good photo opportunities.',
    },
    {
      attractionId: 'dur6',
      attractionName: 'Durres Promenade',
      startTime: '12:30',
      duration: 120,
      tips: 'Seaside lunch and walk. Many restaurant options.',
    },
    {
      attractionId: 'dur3',
      attractionName: 'Durres Beach',
      startTime: '15:00',
      duration: 90,
      tips: 'Relax at the beach. Longest beach in Albania.',
    },
  ],
  korce: [
    {
      attractionId: 'kor1',
      attractionName: 'National Museum of Medieval Art',
      startTime: '09:00',
      duration: 90,
      tips: 'Exceptional collection of Orthodox icons and artifacts.',
    },
    {
      attractionId: 'kor3',
      attractionName: 'Resurrection Cathedral',
      startTime: '10:45',
      duration: 45,
      tips: 'Largest Orthodox church in Albania. Beautiful interior.',
    },
    {
      attractionId: 'kor2',
      attractionName: 'Old Bazaar',
      startTime: '12:00',
      duration: 120,
      tips: 'Historic market area. Lunch at traditional restaurant. Try lakror!',
    },
    {
      attractionId: 'kor6',
      attractionName: 'Korce Brewery',
      startTime: '14:30',
      duration: 90,
      tips: 'Tour Albania\'s most famous brewery. Tastings included.',
    },
  ],
};

export function generatePersonalizedRoute(
  city: string,
  attractions: string[],
  startTime: string = '09:00'
): RouteStop[] {
  const baseRoute = cityRoutes[city] || [];
  const attractionIds = attractions;

  const filteredStops = baseRoute.filter(stop =>
    attractionIds.includes(stop.attractionId)
  );

  let currentTime = startTime;
  const personalizedRoute = filteredStops.map(stop => {
    const updatedStop = { ...stop, startTime: currentTime };

    const [hours, minutes] = currentTime.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes + stop.duration;
    const newHours = Math.floor(totalMinutes / 60);
    const newMinutes = totalMinutes % 60;
    currentTime = `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}`;

    return updatedStop;
  });

  return personalizedRoute;
}
