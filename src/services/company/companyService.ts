import api from '../../libs/axios';
import { CompanyFormData } from '../../schemas/companySchema';
import { omitFields } from '../../utils/omitFields';
import { formatAddress } from '../../utils/formatStrings';

/**
 * @function createCompany
 * @description Formats and sends a POST request to create a company.
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

  const { data } = await api.post('/companies', payload);
  return data;
};

/**
 * @function getCompanies
 * @description Fetches all companies from the API.
 */
export const getCompanies = async () => {
  const { data } = await api.get('/companies');
  return data;
};
