import axios from 'axios';
import { toast } from 'react-toastify';
import { CEP_NOT_FOUND } from '../../shared/constants/toastMessages';

interface IAddressResponse {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}

export async function findAddressByCep(
  cep: string,
): Promise<IAddressResponse | null> {
  try {
    const cleanedCep = cep.replace(/\D/g, '');
    if (cleanedCep.length !== 8) return null;

    const { data } = await axios.get<IAddressResponse>(
      `${import.meta.env.VITE_VIACEP_URL}/${cleanedCep}/json/`,
    );

    if (data.erro) {
      toast.warn(CEP_NOT_FOUND);
    }

    return data;
  } catch (error) {
    console.error('Erro ao buscar endereço pelo CEP:', error);
    return null;
  }
}
