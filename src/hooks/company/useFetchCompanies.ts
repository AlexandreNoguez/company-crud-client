import { useQuery } from '@tanstack/react-query';
import api from '../../libs/axios';

export const useFetchCompanies = () => {
  return useQuery({
    queryKey: ['companies'],
    queryFn: async () => {
      const response = await api.get('/companies');
      return response.data;
    },
  });
};
