import { useQuery } from '@tanstack/react-query';
import {
  getCompanies,
  getCompanyById,
} from '../../../infra/repositories/company/companyService';
import { useCompanyStore } from '../../../application/company/state/stores/company.store';

export const useFetchCompanies = (page = 1, limit = 10, searchTerm = '') => {
  const setCompanies = useCompanyStore((state) => state.setCompanies);
  const setPagination = useCompanyStore((state) => state.setPagination);

  return useQuery({
    queryKey: ['companies', page, limit],
    queryFn: async () => {
      const response = await getCompanies(page, limit, searchTerm);

      setCompanies(response.data);
      setPagination(response.page, response.lastPage, response.total);
      return response;
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
