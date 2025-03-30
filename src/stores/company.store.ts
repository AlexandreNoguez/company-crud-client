import { create } from 'zustand';
import { Company } from '../@types/CompanyTypes';

type CompanyStore = {
  companies: Company[];
  setCompanies: (data: Company[]) => void;
  clearCompanies: () => void;
};

export const useCompanyStore = create<CompanyStore>((set) => ({
  companies: [],
  setCompanies: (data) => set({ companies: data }),
  clearCompanies: () => set({ companies: [] }),
}));
