import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useLoadingStore } from '../../stores/loading.store';
import { ROUTE_EMPRESAS } from '../../constants/headerRoutes';
import { createCompany } from '../../services/company/companyService';
import { CompanyFormData } from '../../schemas/companySchema';
import { handleAxiosError } from '../../utils/handleAxiosError';

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
      toast.success(
        'Empresa criada com sucesso! Você será redirecionado para a página de empresas.',
      );
      queryClient.invalidateQueries({ queryKey: ['companies'] });
      navigate(ROUTE_EMPRESAS);
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
