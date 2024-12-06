export interface Earning {
  id: string;
  date: Date;
  platform: 'Uber' | 'Bolt';
  earnings: number;
  hours: number;
  tips: number;
  expenses: number;
  city: string;
}

export interface City {
  id: string;
  name: string;
}

export interface Platform {
  id: 'uber' | 'bolt';
  name: string;
  logo: string;
}