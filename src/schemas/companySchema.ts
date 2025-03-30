import { z } from 'zod';

export const companySchema = z.object({
  name: z
    .string({ required_error: 'Nome é obrigatório' })
    .min(2, 'Nome precisa conter 2 caracteres'),
  cnpj: z
    .string({ required_error: 'CNPJ é obrigatório' })
    .min(18, 'CNPJ inválido'),
  tradeName: z
    .string({ required_error: 'Nome Fantasia é obrigatório' })
    .min(1, 'Fantasia precisa conter 2 caracteres'),

  logradouro: z
    .string({ required_error: 'Logradouro é obrigatório' })
    .min(1, 'Logradouro é obrigatório'),
  numero: z
    .string({ required_error: 'Número é obrigatório' })
    .min(1, 'Número é obrigatório'),
  complemento: z.string().optional(),
  bairro: z
    .string({ required_error: 'Bairro é obrigatória' })
    .min(1, 'Bairro é obrigatória'),
  cep: z.string({ required_error: 'CEP é obrigatório' }).min(9, 'CEP inválido'),
  municipio: z
    .string({ required_error: 'Município é obrigatório' })
    .min(1, 'Município é obrigatório'),
  estado: z
    .string({ required_error: 'Estado é obrigatório' })
    .min(2, 'Estado é obrigatório'),
});

export type CompanyFormData = z.infer<typeof companySchema>;

// ref solve problem https://stackoverflow.com/questions/76672351/error-messages-from-react-hook-form-with-zod
