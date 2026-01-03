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
    avatarUrl: 'https://picsum.photos/200/200?random=1'
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
    avatarUrl: 'https://picsum.photos/200/200?random=2'
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
    avatarUrl: 'https://picsum.photos/200/200?random=3'
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
    imageUrl: 'https://picsum.photos/400/250?random=10',
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
    imageUrl: 'https://picsum.photos/400/250?random=11',
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
      { racerId: 'racer_002', carId: 'unknown', position: 3, bestLap: 13.10, totalTime: '5:12.45', laps: 23, gap: '+1 Lap', points: 15 }
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
  }
];
