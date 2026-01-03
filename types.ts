export type UserRole = 'racer' | 'organizer' | 'sponsor' | 'viewer' | 'admin';

export enum DriverCategory {
  ROOKIE = 'Rookie',
  AMATEUR = 'Amateur',
  PRO = 'Pro',
  LEGEND = 'Legend'
}

export interface Racer {
  id: string;
  name: string;
  handle: string;
  city: string;
  team?: string;
  category: DriverCategory;
  ratings: {
    skill: number; // Elo-like 1000-3000
    pace: number; // 0-100
    consistency: number; // 0-100
    sportsmanship: number; // 0-100
  };
  stats: {
    starts: number;
    wins: number;
    podiums: number;
    dnf: number;
  };
  avatarUrl: string;
}

export enum CarClass {
  STOCK_17_5 = 'Stock 17.5T',
  MODIFIED = 'Modified',
  FWD = 'FWD Touring',
  F1 = 'Formula 1',
  BUGGY_2WD = '2WD Buggy',
  BUGGY_4WD = '4WD Buggy'
}

export interface CarPart {
  type: 'Motor' | 'ESC' | 'Battery' | 'Chassis' | 'Tires';
  brand: string;
  model: string;
  spec?: string;
  verified: boolean;
}

export interface Car {
  id: string;
  ownerId: string;
  nickname: string;
  class: CarClass;
  chassis: string;
  weight: number; // grams
  parts: CarPart[];
  verified: boolean;
  lastScrutineering: string; // ISO Date
  imageUrl: string;
}

export interface RaceEntry {
  racerId: string;
  carId: string;
  position: number;
  bestLap: number; // seconds
  totalTime: string;
  laps: number;
  points: number;
  gap?: string;
}

export interface RaceEvent {
  id: string;
  name: string;
  date: string;
  location: string;
  trackCondition: 'High Grip' | 'Medium' | 'Dusty' | 'Wet' | 'Clay' | 'Carpet';
  verified: boolean;
  status: 'Upcoming' | 'Live' | 'Completed';
  class: CarClass;
  ticketPrice?: number;
  description?: string;
  entries: RaceEntry[];
}