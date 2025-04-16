import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { CompanyFormData } from '../../schemas/companySchema';
import { handleAxiosError } from '../../helpers/handleAxiosError';
import { updateCompany } from '../../../infra/repositories/company/companyService';
import { useLoadingStore } from '../../../application/company/state/stores/loading.store';
import { ROUTE_COMPANY } from '../../constants/headerRoutes';
import { COMPANY_EDIT_SUCCESS } from '../../constants/toastMessages';

export const useUpdateCompany = (id: string | number) => {
  const queryClient = useQueryClient();
  const setLoading = useLoadingStore((state) => state.setLoading);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: CompanyFormData) => {
      setLoading(true);
      return updateCompany(id, data);
    },
    onSuccess: () => {
      toast.success(COMPANY_EDIT_SUCCESS);
      queryClient.invalidateQueries({ queryKey: ['companies'] });
      navigate(ROUTE_COMPANY);
    },
    onError: (error) => {
      setLoading(false);
      handleAxiosError(error, 'Erro ao atualizar empresa.');
    },
    onSettled: () => {
      setLoading(false);
    },
  });
};
