import { z } from 'zod';

export const companySchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  cnpj: z.string().min(18, 'CNPJ inválido'),
  tradeName: z.string().min(1, 'Nome Fantasia é obrigatório'),

  logradouro: z.string().min(1, 'Logradouro é obrigatório'),
  numero: z.string().min(1, 'Número é obrigatório'),
  complemento: z.string().optional(),
  bairro: z.string().min(1, 'Bairro é obrigatória'),
  cep: z.string().min(9, 'CEP é obrigatório'),
  municipio: z.string().min(1, 'Município é obrigatório'),
  estado: z.string().min(2, 'Estado é obrigatório'),

  criadoEm: z.date().optional(),
  alteradoEm: z.date().optional(),
});

export type CompanyFormData = z.infer<typeof companySchema>;
