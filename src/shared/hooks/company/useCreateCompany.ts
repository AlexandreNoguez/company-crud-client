import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useLoadingStore } from '../../../app/company/state/stores/loading.store';
import { ROUTE_COMPANY } from '../../constants/headerRoutes';
import { createCompany } from '../../../infra/services/company/companyService';
import { CompanyFormData } from '../../schemas/companySchema';
import { handleAxiosError } from '../../helpers/handleAxiosError';
import { COMPANY_CREATED_SUCCESS } from '../../constants/toastMessages';

export const useCreateCompany = () => {
  const queryClient = useQueryClient();
  const setLoading = useLoadingStore((state) => state.setLoading);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: CompanyFormData) => {
      setLoading(true);
      return createCompany(data);
    },
    onSuccess: () => {
      toast.success(COMPANY_CREATED_SUCCESS);
      queryClient.invalidateQueries({ queryKey: ['companies'] });
      navigate(ROUTE_COMPANY);
    },
    onError: (error) => {
      setLoading(false);
      handleAxiosError(
        error,
        'Erro ao criar empresa. Verifique os dados e tente novamente.',
      );
    },
    onSettled: () => {
      setLoading(false);
    },
  });
};
