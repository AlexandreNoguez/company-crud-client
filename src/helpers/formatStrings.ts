import { CompanyFormData } from '../schemas/companySchema';

export const formatAddress = (data: CompanyFormData): string => {
  return `${data.logradouro}, ${data.numero}${
    data.complemento ? ' - ' + data.complemento : ''
  }, ${data.bairro}, ${data.municipio} - ${data.estado}, CEP: ${data.cep}`;
};
export function parseAddress(address: string) {
  const result = {
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    municipio: '',
    estado: '',
    cep: '',
  };

  if (!address) return result;

  const parts = address.split(',').map((part) => part.trim());

  // Extrai o CEP
  const cepMatch = parts[parts.length - 1]?.match(/CEP:\s*(\d{5}-\d{3})/);
  if (cepMatch) {
    result.cep = cepMatch[1];
    parts.pop();

    // Extrai município e estado
    const municipioEstado = parts.pop();
    if (municipioEstado?.includes(' - ')) {
      const [municipio, estado] = municipioEstado.split(' - ');
      result.municipio = municipio.trim();
      result.estado = estado.trim();
    }

    result.logradouro = parts[0] || '';

    // Trata número e complemento juntos
    if (parts[1]?.includes(' - ')) {
      const [numero, complemento] = parts[1].split(' - ');
      result.numero = numero.trim();
      result.complemento = complemento.trim();
    } else {
      result.numero = parts[1] || '';
    }

    // Bairro sempre no final restante
    result.bairro = parts[parts.length - 1] || '';
  }

  return result;
}
