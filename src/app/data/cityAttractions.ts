export interface Attraction {
  id: string;
  name: string;
  city: string;
  crowdLevel: 'low' | 'medium' | 'high' | 'critical';
  waitTime: number;
  distance: number;
  tags: string[];
}

export const cityAttractions: Record<string, Attraction[]> = {
  tirane: [
    { id: 'tir1', name: 'Skanderbeg Square', city: 'tirane', crowdLevel: 'high', waitTime: 15, distance: 0, tags: ['history', 'culture', 'photography'] },
    { id: 'tir2', name: 'Et\'hem Bey Mosque', city: 'tirane', crowdLevel: 'medium', waitTime: 10, distance: 0.2, tags: ['history', 'culture'] },
    { id: 'tir3', name: 'National History Museum', city: 'tirane', crowdLevel: 'medium', waitTime: 20, distance: 0.1, tags: ['history', 'culture'] },
    { id: 'tir4', name: 'Blloku District', city: 'tirane', crowdLevel: 'high', waitTime: 5, distance: 1.5, tags: ['food', 'shopping', 'relaxation'] },
    { id: 'tir5', name: 'Dajti Mountain', city: 'tirane', crowdLevel: 'low', waitTime: 30, distance: 12, tags: ['nature', 'adventure', 'photography'] },
    { id: 'tir6', name: 'Bunk\'Art', city: 'tirane', crowdLevel: 'medium', waitTime: 25, distance: 3, tags: ['history', 'culture'] },
    { id: 'tir7', name: 'Grand Park', city: 'tirane', crowdLevel: 'low', waitTime: 0, distance: 2, tags: ['nature', 'relaxation'] },
    { id: 'tir8', name: 'Pyramid of Tirana', city: 'tirane', crowdLevel: 'medium', waitTime: 5, distance: 0.8, tags: ['history', 'photography'] },
  ],
  shkoder: [
    { id: 'shk1', name: 'Rozafa Castle', city: 'shkoder', crowdLevel: 'medium', waitTime: 20, distance: 5, tags: ['history', 'photography', 'nature'] },
    { id: 'shk2', name: 'Marubi National Museum of Photography', city: 'shkoder', crowdLevel: 'low', waitTime: 15, distance: 0.5, tags: ['culture', 'photography'] },
    { id: 'shk3', name: 'Lake Shkodra', city: 'shkoder', crowdLevel: 'low', waitTime: 10, distance: 8, tags: ['nature', 'relaxation', 'photography'] },
    { id: 'shk4', name: 'Pedestrian Street', city: 'shkoder', crowdLevel: 'medium', waitTime: 0, distance: 0, tags: ['shopping', 'food', 'culture'] },
    { id: 'shk5', name: 'Lead Mosque', city: 'shkoder', crowdLevel: 'low', waitTime: 5, distance: 0.3, tags: ['history', 'culture'] },
    { id: 'shk6', name: 'Mesi Bridge', city: 'shkoder', crowdLevel: 'low', waitTime: 10, distance: 15, tags: ['history', 'photography', 'nature'] },
  ],
  berat: [
    { id: 'ber1', name: 'Berat Castle', city: 'berat', crowdLevel: 'medium', waitTime: 25, distance: 2, tags: ['history', 'culture', 'photography'] },
    { id: 'ber2', name: 'Mangalem Quarter', city: 'berat', crowdLevel: 'medium', waitTime: 10, distance: 0.5, tags: ['history', 'culture', 'photography'] },
    { id: 'ber3', name: 'Gorica Quarter', city: 'berat', crowdLevel: 'low', waitTime: 10, distance: 0.8, tags: ['history', 'culture', 'photography'] },
    { id: 'ber4', name: 'Ethnographic Museum', city: 'berat', crowdLevel: 'low', waitTime: 15, distance: 0.3, tags: ['culture', 'history'] },
    { id: 'ber5', name: 'King\'s Mosque', city: 'berat', crowdLevel: 'low', waitTime: 5, distance: 0.2, tags: ['history', 'culture'] },
    { id: 'ber6', name: 'Onufri Museum', city: 'berat', crowdLevel: 'medium', waitTime: 20, distance: 2, tags: ['culture', 'history'] },
  ],
  gjirokaster: [
    { id: 'gji1', name: 'Gjirokaster Castle', city: 'gjirokaster', crowdLevel: 'medium', waitTime: 30, distance: 1.5, tags: ['history', 'culture', 'photography'] },
    { id: 'gji2', name: 'Old Bazaar', city: 'gjirokaster', crowdLevel: 'medium', waitTime: 10, distance: 0.5, tags: ['shopping', 'culture', 'history'] },
    { id: 'gji3', name: 'Skenduli House', city: 'gjirokaster', crowdLevel: 'low', waitTime: 20, distance: 0.8, tags: ['history', 'culture'] },
    { id: 'gji4', name: 'Cold War Tunnel', city: 'gjirokaster', crowdLevel: 'low', waitTime: 25, distance: 1.5, tags: ['history', 'adventure'] },
    { id: 'gji5', name: 'Ethnographic Museum', city: 'gjirokaster', crowdLevel: 'low', waitTime: 15, distance: 0.3, tags: ['culture', 'history'] },
    { id: 'gji6', name: 'Blue Eye Spring', city: 'gjirokaster', crowdLevel: 'high', waitTime: 20, distance: 35, tags: ['nature', 'photography', 'adventure'] },
  ],
  sarande: [
    { id: 'sar1', name: 'Lekuresi Castle', city: 'sarande', crowdLevel: 'medium', waitTime: 15, distance: 5, tags: ['history', 'photography', 'nature'] },
    { id: 'sar2', name: 'Butrint National Park', city: 'sarande', crowdLevel: 'high', waitTime: 30, distance: 18, tags: ['history', 'nature', 'culture'] },
    { id: 'sar3', name: 'Mirror Beach', city: 'sarande', crowdLevel: 'high', waitTime: 10, distance: 7, tags: ['nature', 'relaxation', 'photography'] },
    { id: 'sar4', name: 'Ksamil Beach', city: 'sarande', crowdLevel: 'critical', waitTime: 20, distance: 15, tags: ['nature', 'relaxation'] },
    { id: 'sar5', name: 'Synagogue Archaeological Site', city: 'sarande', crowdLevel: 'low', waitTime: 10, distance: 0.5, tags: ['history', 'culture'] },
    { id: 'sar6', name: 'Saranda Promenade', city: 'sarande', crowdLevel: 'high', waitTime: 0, distance: 0, tags: ['relaxation', 'food', 'shopping'] },
  ],
  vlore: [
    { id: 'vlo1', name: 'Independence Monument', city: 'vlore', crowdLevel: 'medium', waitTime: 10, distance: 0, tags: ['history', 'photography'] },
    { id: 'vlo2', name: 'Vlora Beach', city: 'vlore', crowdLevel: 'high', waitTime: 15, distance: 2, tags: ['nature', 'relaxation'] },
    { id: 'vlo3', name: 'Kaninë Castle', city: 'vlore', crowdLevel: 'low', waitTime: 20, distance: 8, tags: ['history', 'photography', 'adventure'] },
    { id: 'vlo4', name: 'Llogara Pass', city: 'vlore', crowdLevel: 'medium', waitTime: 25, distance: 40, tags: ['nature', 'adventure', 'photography'] },
    { id: 'vlo5', name: 'Muradie Mosque', city: 'vlore', crowdLevel: 'low', waitTime: 5, distance: 0.5, tags: ['history', 'culture'] },
    { id: 'vlo6', name: 'Cold War Submarine Base', city: 'vlore', crowdLevel: 'low', waitTime: 30, distance: 10, tags: ['history', 'adventure'] },
  ],
  durres: [
    { id: 'dur1', name: 'Roman Amphitheatre', city: 'durres', crowdLevel: 'medium', waitTime: 20, distance: 0.5, tags: ['history', 'culture'] },
    { id: 'dur2', name: 'Venetian Tower', city: 'durres', crowdLevel: 'low', waitTime: 10, distance: 0.8, tags: ['history', 'photography'] },
    { id: 'dur3', name: 'Durres Beach', city: 'durres', crowdLevel: 'high', waitTime: 10, distance: 1, tags: ['nature', 'relaxation'] },
    { id: 'dur4', name: 'Archaeological Museum', city: 'durres', crowdLevel: 'low', waitTime: 15, distance: 0.3, tags: ['history', 'culture'] },
    { id: 'dur5', name: 'Royal Villa', city: 'durres', crowdLevel: 'low', waitTime: 15, distance: 2, tags: ['history', 'nature'] },
    { id: 'dur6', name: 'Durres Promenade', city: 'durres', crowdLevel: 'medium', waitTime: 0, distance: 0, tags: ['relaxation', 'food', 'shopping'] },
  ],
  korce: [
    { id: 'kor1', name: 'National Museum of Medieval Art', city: 'korce', crowdLevel: 'low', waitTime: 20, distance: 0.5, tags: ['culture', 'history'] },
    { id: 'kor2', name: 'Old Bazaar', city: 'korce', crowdLevel: 'medium', waitTime: 10, distance: 0.3, tags: ['shopping', 'culture', 'food'] },
    { id: 'kor3', name: 'Resurrection Cathedral', city: 'korce', crowdLevel: 'low', waitTime: 10, distance: 0.8, tags: ['history', 'culture', 'photography'] },
    { id: 'kor4', name: 'Education Museum', city: 'korce', crowdLevel: 'low', waitTime: 15, distance: 0.4, tags: ['culture', 'history'] },
    { id: 'kor5', name: 'Drilon National Park', city: 'korce', crowdLevel: 'medium', waitTime: 20, distance: 25, tags: ['nature', 'relaxation', 'photography'] },
    { id: 'kor6', name: 'Korce Brewery', city: 'korce', crowdLevel: 'low', waitTime: 25, distance: 1.5, tags: ['culture', 'food'] },
  ],
};

export function calculateMatchScore(attraction: Attraction, interests: string[]): number {
  let score = 0;

  interests.forEach(interest => {
    if (attraction.tags.includes(interest)) {
      score += 20;
    }
  });

  switch (attraction.crowdLevel) {
    case 'low':
      score += 15;
      break;
    case 'medium':
      score += 10;
      break;
    case 'high':
      score += 5;
      break;
    case 'critical':
      score += 0;
      break;
  }

  if (attraction.waitTime < 15) score += 10;
  else if (attraction.waitTime < 30) score += 5;

  if (attraction.distance < 5) score += 10;
  else if (attraction.distance < 15) score += 5;

  return Math.min(100, score);
}

export function getRecommendedAttractions(
  city: string,
  interests: string[],
  duration: number
): Attraction[] {
  const attractions = cityAttractions[city] || [];

  const scored = attractions.map(attraction => ({
    attraction,
    score: calculateMatchScore(attraction, interests),
  }));

  scored.sort((a, b) => b.score - a.score);

  const maxAttractions = Math.min(Math.floor(duration / 1.5), attractions.length);

  return scored.slice(0, maxAttractions).map(item => item.attraction);
}
