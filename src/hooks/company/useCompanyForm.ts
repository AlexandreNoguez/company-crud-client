import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { CompanyFormData, companySchema } from '../../schemas/companySchema';

import { findAddressByCep } from '../../services/viacepService';
import { useCreateCompany } from '../../hooks/company/useCreateCompany';
import { FormFieldsTypes } from '../../@types/FormFieldsTypes';

export function useCompanyForm() {
  const {
    handleSubmit,
    formState: { errors },
    setValue,
    setFocus,
    watch,
    control,
  } = useForm<CompanyFormData>({
    resolver: zodResolver(companySchema),
  });

  const cep = watch('cep');
  const { mutate } = useCreateCompany();

  useEffect(() => {
    const fetchCep = async () => {
      const data = await findAddressByCep(cep);
      if (!data) return;

      setValue('logradouro', data.logradouro || '');
      setValue('bairro', data.bairro || '');
      setValue('municipio', data.localidade || '');
      setValue('estado', data.uf || '');
      setFocus('numero');
    };

    if (cep) fetchCep();
  }, [cep, setValue, setFocus]);

  const onSubmit = (data: CompanyFormData) => {
    mutate(data);
  };

  const formFields: FormFieldsTypes[] = [
    { label: 'Nome', name: 'name' },
    { label: 'CNPJ', name: 'cnpj', mask: '99.999.999/9999-99' },
    { label: 'Nome Fantasia', name: 'tradeName' },
    { label: 'CEP', name: 'cep', mask: '99999-999' },
    { label: 'Logradouro', name: 'logradouro' },
    { label: 'Número', name: 'numero' },
    { label: 'Complemento', name: 'complemento' },
    { label: 'Bairro', name: 'bairro' },
    { label: 'Município', name: 'municipio' },
    { label: 'Estado', name: 'estado' },
  ];

  return {
    handleSubmit,
    errors,
    control,
    onSubmit,
    formFields,
  };
}
