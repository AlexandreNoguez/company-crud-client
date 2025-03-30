import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { softRemoveCompany } from '../../services/company/companyService';

export function useSoftRemoveCompany() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: softRemoveCompany,
    onSuccess: () => {
      toast.success('Empresa removida com sucesso!');
      queryClient.invalidateQueries({ queryKey: ['companies'] });
    },
    onError: () => {
      toast.error('Erro ao remover empresa');
    },
  });
}
