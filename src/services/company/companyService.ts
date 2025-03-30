import { toast } from 'react-toastify';

import api from '../../libs/axios';
import { CompanyFormData } from '../../schemas/companySchema';
import { omitFields } from '../../utils/omitFields';
import { handleAxiosError } from '../../utils/handleAxiosError';
import { useLoadingStore } from '../../stores/loading.store';
import { formatAddress } from '../../utils/formatStrings';
import { ROUTE_EMPRESAS } from '../../constants/headerRoutes';

/**
 * @function createCompany
 * @param {CompanyFormData} formData - The form data from the company form
 * @returns Response from the API
 * @description This function is responsible for creating a new company in the system.
 * It receives the form data, formats the address, removes address-related fields,
 * and sends a POST request to the API.
 * The address is formatted as "logradouro, numero - complemento, bairro, municipio - estado, CEP: cep".
 */
export const createCompany = async (formData: CompanyFormData) => {
  const address = formatAddress(formData);

  const payload = {
    ...omitFields(formData, [
      'logradouro',
      'numero',
      'complemento',
      'bairro',
      'municipio',
      'estado',
      'cep',
    ]),
    address,
  };

  const setLoading = useLoadingStore.getState().setLoading;

  try {
    setLoading(true);

    const { data } = await api.post('/companies', payload);
    toast.success(
      'Empresa criada com sucesso! Você será redirecionado para a página de empresas.',
    );
    // Redirect to the companies page after 4 seconds
    // allows the user to see the success message
    // before being redirected
    setTimeout(() => {
      window.location.href = ROUTE_EMPRESAS;
    }, 4000);

    return data;
  } catch (error) {
    handleAxiosError(
      error,
      'Erro ao criar empresa. Verifique os dados e tente novamente.',
    );
  } finally {
    setLoading(false);
  }
};
