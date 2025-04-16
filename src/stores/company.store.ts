import { create } from 'zustand';
import { Company } from '../@types/CompanyTypes';

type CompanyStore = {
  companies: Company[];
  pagination: {
    page: number;
    lastPage: number;
    total: number;
  };
  setCompanies: (data: Company[]) => void;
  setPagination: (page: number, lastPage: number, total: number) => void;
  clearCompanies: () => void;
};

export const useCompanyStore = create<CompanyStore>((set) => ({
  companies: [],
  pagination: {
    page: 1,
    lastPage: 1,
    total: 0,
  },
  setCompanies: (data) => set({ companies: data }),
  setPagination: (page, lastPage, total) =>
    set((state) => ({
      pagination: {
        page,
        lastPage: lastPage ?? state.pagination.lastPage,
        total: total ?? state.pagination.total,
      },
    })),
  clearCompanies: () => set({ companies: [] }),
}));
