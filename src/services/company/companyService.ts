import api from '../../libs/axios';
import { CompanyFormData } from '../../schemas/companySchema';
import { omitFields } from '../../utils/omitFields';
import { formatAddress } from '../../utils/formatStrings';
import { CompanyPaginationResponse } from '../../@types/CompanyTypes';

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
export const getCompanies = async (
  page = 1,
  limit = 10,
): Promise<CompanyPaginationResponse> => {
  const { data } = await api.get('/companies', {
    params: { page, limit },
  });

  return data;
};

export const getCompanyById = async (id: string | number) => {
  const { data } = await api.get(`/companies/${id}`);
  return data;
};

export const updateCompany = async (
  id: string | number,
  formData: CompanyFormData,
) => {
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

  const { data } = await api.patch(`/companies/${id}`, payload);
  return data;
};

export const softRemoveCompany = async (id: number) => {
  await api.delete(`/companies/soft/${id}`);
};
