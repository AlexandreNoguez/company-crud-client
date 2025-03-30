import { useQuery } from '@tanstack/react-query';
import {
  getCompanies,
  getCompanyById,
} from '../../services/company/companyService';
import { useCompanyStore } from '../../stores/company.store';

export const useFetchCompanies = () => {
  const setCompanies = useCompanyStore((state) => state.setCompanies);

  return useQuery({
    queryKey: ['companies'],
    queryFn: async () => {
      const data = await getCompanies();
      setCompanies(data);
      return data;
    },
  });
};

export const useFetchCompanyById = (id?: string | number) => {
  return useQuery({
    queryKey: ['company', id],
    queryFn: () => getCompanyById(id!),
    enabled: !!id,
  });
};
