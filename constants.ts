import { Racer, DriverCategory, Car, CarClass, RaceEvent } from './types';

export const CURRENT_USER_ID = 'racer_001';

export const RACERS: Racer[] = [
  {
    id: 'racer_001',
    name: 'Arjun Mehta',
    handle: '@apex_arjun',
    city: 'Bangalore',
    team: 'Tarmac Titans',
    category: DriverCategory.PRO,
    ratings: { skill: 2450, pace: 94, consistency: 88, sportsmanship: 98 },
    stats: { starts: 42, wins: 12, podiums: 28, dnf: 1 },
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'racer_002',
    name: 'Sarah Jenkins',
    handle: '@sj_racing',
    city: 'Mumbai',
    team: 'Velocity RC',
    category: DriverCategory.AMATEUR,
    ratings: { skill: 1850, pace: 82, consistency: 91, sportsmanship: 99 },
    stats: { starts: 15, wins: 2, podiums: 6, dnf: 0 },
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'racer_003',
    name: 'Vikram Singh',
    handle: '@drift_king',
    city: 'Delhi',
    team: 'Northside Bashers',
    category: DriverCategory.PRO,
    ratings: { skill: 2380, pace: 96, consistency: 75, sportsmanship: 85 },
    stats: { starts: 55, wins: 18, podiums: 25, dnf: 8 },
    avatarUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'racer_004',
    name: 'Kenji Sato',
    handle: '@kenji_rc',
    city: 'Chennai',
    team: 'Privateer',
    category: DriverCategory.LEGEND,
    ratings: { skill: 2800, pace: 99, consistency: 98, sportsmanship: 95 },
    stats: { starts: 120, wins: 45, podiums: 80, dnf: 2 },
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'racer_005',
    name: 'Elena Rodriguez',
    handle: '@elena_speed',
    city: 'Pune',
    team: 'Redline Racing',
    category: DriverCategory.ROOKIE,
    ratings: { skill: 1200, pace: 70, consistency: 65, sportsmanship: 100 },
    stats: { starts: 5, wins: 0, podiums: 1, dnf: 1 },
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
  }
];

export const CARS: Car[] = [
  {
    id: 'car_001',
    ownerId: 'racer_001',
    nickname: 'The Blue Bolt',
    class: CarClass.MODIFIED,
    chassis: 'Xray T4 2024',
    weight: 1325,
    verified: true,
    lastScrutineering: '2023-10-15',
    imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=400&auto=format&fit=crop',
    parts: [
      { type: 'Motor', brand: 'Hobbywing', model: 'V10 G4', spec: '4.5T', verified: true },
      { type: 'ESC', brand: 'Hobbywing', model: 'XR10 Pro', verified: true },
      { type: 'Battery', brand: 'Sunpadow', model: 'Platin', spec: '6000mAh', verified: true },
      { type: 'Tires', brand: 'Sweep', model: '32R', verified: true }
    ]
  },
  {
    id: 'car_002',
    ownerId: 'racer_001',
    nickname: 'Stock Practice',
    class: CarClass.STOCK_17_5,
    chassis: 'Yokomo BD12',
    weight: 1355,
    verified: false,
    lastScrutineering: '2023-09-01',
    imageUrl: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=400&auto=format&fit=crop',
    parts: [
      { type: 'Motor', brand: 'Muchmore', model: 'Fleta', spec: '17.5T', verified: false },
      { type: 'ESC', brand: 'Hobbywing', model: 'Stock Spec', verified: true }
    ]
  }
];

export const EVENTS: RaceEvent[] = [
  {
    id: 'evt_001',
    name: 'Urban RC GP Round 4',
    date: '2023-10-22',
    location: 'Bangalore RC Arena',
    trackCondition: 'High Grip',
    verified: true,
    status: 'Completed',
    class: CarClass.MODIFIED,
    entries: [
      { racerId: 'racer_001', carId: 'car_001', position: 1, bestLap: 12.45, totalTime: '5:04.22', laps: 24, points: 25 },
      { racerId: 'racer_003', carId: 'unknown', position: 2, bestLap: 12.38, totalTime: '5:06.10', laps: 24, gap: '+1.88s', points: 18 },
      { racerId: 'racer_002', carId: 'unknown', position: 3, bestLap: 13.10, totalTime: '5:12.45', laps: 23, gap: '+1 Lap', points: 15 },
      { racerId: 'racer_004', carId: 'unknown', position: 4, bestLap: 12.60, totalTime: '5:14.00', laps: 23, gap: '+1 Lap', points: 12 }
    ]
  },
  {
    id: 'evt_002',
    name: 'Monsoon Cup Qualifier',
    date: '2023-11-05',
    location: 'Mumbai Indoor Track',
    trackCondition: 'Medium',
    verified: true,
    status: 'Live',
    class: CarClass.STOCK_17_5,
    entries: []
  },
  {
    id: 'evt_003',
    name: 'Deccan Off-Road Challenge',
    date: '2024-02-15',
    location: 'Hyderabad Dirtplex',
    trackCondition: 'Clay',
    verified: true,
    status: 'Upcoming',
    class: CarClass.BUGGY_4WD,
    ticketPrice: 499,
    description: 'The biggest off-road event of the season. Watch 4WD buggies fly over the triple jumps!',
    entries: []
  },
  {
    id: 'evt_004',
    name: 'Night Drift Battle',
    date: '2024-02-28',
    location: 'Delhi Underground Hub',
    trackCondition: 'Carpet',
    verified: true,
    status: 'Upcoming',
    class: CarClass.MODIFIED,
    ticketPrice: 750,
    description: 'Neon lights, high speed drifting, and live DJ. The ultimate RC lifestyle event.',
    entries: []
  },
  {
    id: 'evt_005',
    name: 'Rookie Series Opener',
    date: '2024-03-10',
    location: 'Bangalore RC Arena',
    trackCondition: 'High Grip',
    verified: true,
    status: 'Upcoming',
    class: CarClass.STOCK_17_5,
    ticketPrice: 150,
    description: 'Support the next generation of racers. Free entry for kids under 12.',
    entries: []
  }
];