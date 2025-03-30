import { addHours } from 'date-fns';

export const toBrasiliaTime = (date: string | Date) =>
  addHours(new Date(date), -3);
