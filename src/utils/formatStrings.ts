import { CompanyFormData } from '../schemas/companySchema';

export const formatAddress = (data: CompanyFormData) => {
  return `${data.logradouro}, ${data.numero}${
    data.complemento ? ' - ' + data.complemento : ''
  }, ${data.bairro}, ${data.municipio} - ${data.estado}, CEP: ${data.cep}`;
};
