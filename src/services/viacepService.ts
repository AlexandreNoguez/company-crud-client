import axios from 'axios';
import { toast } from 'react-toastify';

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

    if (data.erro) return null;

    return data;
  } catch (error) {
    console.error('Erro ao buscar endereço pelo CEP:', error);
    toast.error('Erro ao buscar endereço. Verifique o CEP e tente novamente.');
    return null;
  }
}
