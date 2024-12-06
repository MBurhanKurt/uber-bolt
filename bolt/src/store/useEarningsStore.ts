import { create } from 'zustand';
import { Earning } from '../types';

interface EarningsState {
  earnings: Earning[];
  addEarning: (earning: Earning) => void;
  getWeeklyEarnings: () => Earning[];
  getTotalEarnings: () => number;
  getTotalHours: () => number;
  getAverageHourlyRate: () => number;
}

export const useEarningsStore = create<EarningsState>((set, get) => ({
  earnings: [],
  addEarning: (earning) => set((state) => ({ earnings: [...state.earnings, earning] })),
  getWeeklyEarnings: () => {
    const now = new Date();
    const weekStart = new Date(now.setDate(now.getDate() - now.getDay()));
    return get().earnings.filter((earning) => new Date(earning.date) >= weekStart);
  },
  getTotalEarnings: () => get().earnings.reduce((sum, earning) => sum + earning.earnings + earning.tips, 0),
  getTotalHours: () => get().earnings.reduce((sum, earning) => sum + earning.hours, 0),
  getAverageHourlyRate: () => {
    const totalEarnings = get().getTotalEarnings();
    const totalHours = get().getTotalHours();
    return totalHours > 0 ? totalEarnings / totalHours : 0;
  },
}));