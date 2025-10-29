export interface Market {
  id: string;
  title: string;
  category: string;
  yesPrice: number;
  noPrice: number;
  volume: number;
  change: number;
  trending?: boolean;
}

export const mockMarkets: Market[] = [
  {
    id: '1',
    title: 'Will Bitcoin reach $100,000 by end of 2025?',
    category: 'Crypto',
    yesPrice: 68,
    noPrice: 32,
    volume: 2850000,
    change: 12.5,
    trending: true,
  },
  {
    id: '2',
    title: 'Will the Fed cut interest rates in Q1 2025?',
    category: 'Economics',
    yesPrice: 45,
    noPrice: 55,
    volume: 1920000,
    change: -3.2,
    trending: true,
  },
  {
    id: '3',
    title: 'Will OpenAI release GPT-5 in 2025?',
    category: 'Technology',
    yesPrice: 72,
    noPrice: 28,
    volume: 3100000,
    change: 8.7,
    trending: true,
  },
  {
    id: '4',
    title: 'Will inflation fall below 2% by June 2025?',
    category: 'Economics',
    yesPrice: 38,
    noPrice: 62,
    volume: 1450000,
    change: -5.3,
  },
  {
    id: '5',
    title: 'Will Tesla stock hit $300 by end of 2025?',
    category: 'Finance',
    yesPrice: 52,
    noPrice: 48,
    volume: 2280000,
    change: 2.1,
  },
  {
    id: '6',
    title: 'Will there be a recession in 2025?',
    category: 'Economics',
    yesPrice: 34,
    noPrice: 66,
    volume: 1780000,
    change: -1.8,
  },
  {
    id: '7',
    title: 'Will Apple launch AR glasses in 2025?',
    category: 'Technology',
    yesPrice: 29,
    noPrice: 71,
    volume: 950000,
    change: 4.2,
  },
  {
    id: '8',
    title: 'Will the S&P 500 exceed 6000 by year end?',
    category: 'Finance',
    yesPrice: 63,
    noPrice: 37,
    volume: 3450000,
    change: 15.6,
  },
  {
    id: '9',
    title: 'Will unemployment rate stay below 4% in 2025?',
    category: 'Economics',
    yesPrice: 71,
    noPrice: 29,
    volume: 1120000,
    change: -2.4,
  },
  {
    id: '10',
    title: 'Will Nvidia stock reach $1000 by end of 2025?',
    category: 'Finance',
    yesPrice: 58,
    noPrice: 42,
    volume: 2670000,
    change: 7.9,
  },
  {
    id: '11',
    title: 'Will there be a major AI breakthrough in 2025?',
    category: 'Technology',
    yesPrice: 82,
    noPrice: 18,
    volume: 1890000,
    change: 11.3,
  },
  {
    id: '12',
    title: 'Will gas prices exceed $5/gallon nationally?',
    category: 'Economics',
    yesPrice: 23,
    noPrice: 77,
    volume: 780000,
    change: -6.7,
  },
];

export const categories = [
  'All Markets',
  'Economics',
  'Finance',
  'Technology',
  'Crypto',
  'Politics',
  'Climate',
  'Sports',
];

export const marketStats = {
  totalVolume: 24500000,
  activeMarkets: 1247,
  totalUsers: 89234,
  marketsToday: 142,
};
