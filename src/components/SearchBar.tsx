import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Add } from '@mui/icons-material';

import CustomGrid from './CustomGrid';
import CustomButton from './CustomButton';
import CustomNavLink from './CustomNavLink';
import CustomTextField from './CustomTextField';

import { getCompanies } from '../services/company/companyService';
import { useCompanyStore } from '../stores/company.store';
import { handleAxiosError } from '../helpers/handleAxiosError';
import { ROUTE_COMPANY_CREATE } from '../constants/headerRoutes';
import {
  COMPANY_NOT_FOUND,
  SEARCH_EMPTY_WARN,
} from '../constants/toastMessages';
import { useFetchCompanies } from '../hooks/company/useFetchCompanies';

export default function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  const setCompanies = useCompanyStore((state) => state.setCompanies);
  const clearCompanies = useCompanyStore((state) => state.clearCompanies);

  const { refetch, isFetching } = useFetchCompanies(1, 10, inputValue);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      return toast.warn(SEARCH_EMPTY_WARN);
    }

    try {
      await refetch();
    } catch (error: unknown) {
      handleAxiosError(error, COMPANY_NOT_FOUND);
      clearCompanies();
    }
  };

  const handleReset = async () => {
    setInputValue('');
    try {
      const allCompanies = await getCompanies(1, 7);

      setCompanies(allCompanies.data);
    } catch (error) {
      handleAxiosError(error, 'Erro ao restaurar empresas');
    }
  };

  return (
    <CustomGrid component={'form'} onSubmit={handleSearch}>
      <CustomTextField
        sx={{ maxWidth: 320 }}
        label="Buscar nome nome e fantasia"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <CustomButton type="submit" sx={{ ml: 2 }} disabled={isFetching}>
        Buscar
      </CustomButton>
      <CustomButton onClick={handleReset} color="secondary" sx={{ ml: 1 }}>
        Resetar
      </CustomButton>
      <CustomNavLink
        component={Link}
        to={ROUTE_COMPANY_CREATE}
        startIcon={<Add />}
        color="success"
        variant="contained"
      >
        Cadastrar Nova Empresa
      </CustomNavLink>
    </CustomGrid>
  );
}
