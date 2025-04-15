import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { FormFieldsTypes } from '../../../@types/FormFieldsTypes';
import { CompanyFormData, companySchema } from '../../schemas/companySchema';

import { findAddressByCep } from '../../../infra/services/viacepService';
import {
  createCompany,
  getCompanyById,
  updateCompany,
} from '../../../infra/services/company/companyService';

import { parseAddress } from '../../helpers/formatStrings';
import { useLoadingStore } from '../../../app/company/state/stores/loading.store';
import { useNavigate } from 'react-router-dom';
import { ROUTE_COMPANY } from '../../constants/headerRoutes';
import { handleAxiosError } from '../../helpers/handleAxiosError';
import {
  COMPANY_CREATED_SUCCESS,
  COMPANY_EDIT_ERROR,
  COMPANY_EDIT_SUCCESS,
} from '../../constants/toastMessages';

export function useCompanyForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const setLoading = useLoadingStore((state) => state.setLoading);

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

  useEffect(() => {
    const fetchCompany = async () => {
      if (!id) return;

      setLoading(true);
      try {
        const company = await getCompanyById(id);
        if (!company) return;

        setValue('name', company.name);
        setValue('taxId', company.taxId);
        setValue('tradeName', company.tradeName);

        const addressFields = parseAddress(company.address);
        setValue('cep', addressFields.cep || '');
        setValue('logradouro', addressFields.logradouro || '');
        setValue('numero', addressFields.numero || '');
        setValue('complemento', addressFields.complemento || '');
        setValue('bairro', addressFields.bairro || '');
        setValue('municipio', addressFields.municipio || '');
        setValue('estado', addressFields.estado || '');
      } catch (error: unknown) {
        toast.error(COMPANY_EDIT_ERROR);
        handleAxiosError(
          error,
          'Um erro inesperado aconteceu, tente novamente mais tarde',
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCompany();
  }, [id, setValue, setLoading]);

  const onSubmit = async (data: CompanyFormData) => {
    setLoading(true);
    try {
      if (id) {
        await updateCompany(id, data);
        toast.success(COMPANY_EDIT_SUCCESS);
      } else {
        await createCompany(data);
        toast.success(COMPANY_CREATED_SUCCESS);
      }
      navigate(ROUTE_COMPANY);
    } catch (error) {
      handleAxiosError(
        error,
        `Erro ao ${id ? 'atualizar' : 'cadastrar'}  empresa.`,
      );
    } finally {
      setLoading(false);
    }
  };

  const formFields: FormFieldsTypes[] = [
    { label: 'Nome', name: 'name' },
    { label: 'CNPJ', name: 'taxId', mask: '99.999.999/9999-99' },
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
    isEditing: Boolean(id),
  };
}
