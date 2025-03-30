import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Add } from '@mui/icons-material';

import CustomGrid from './CustomGrid';
import CustomButton from './CustomButton';
import CustomNavLink from './CustomNavLink';
import CustomTextField from './CustomTextField';

import {
  getCompanies,
  getCompanyById,
} from '../services/company/companyService';
import { useCompanyStore } from '../stores/company.store';
import { handleAxiosError } from '../utils/handleAxiosError';
import { ROUTE_COMPANY_CREATE } from '../constants/headerRoutes';
import {
  COMPANY_NOT_FOUND,
  SEARCH_EMPTY_WARN,
} from '../constants/toastMessages';

export default function SearchCompanyById() {
  const [inputValue, setInputValue] = useState('');
  const setCompanies = useCompanyStore((s) => s.setCompanies);
  const clearCompanies = useCompanyStore((s) => s.clearCompanies);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      return toast.warn(SEARCH_EMPTY_WARN);
    }

    try {
      const company = await getCompanyById(inputValue);
      setCompanies([company]);
    } catch (error: unknown) {
      handleAxiosError(error, COMPANY_NOT_FOUND);
      clearCompanies();
    }
  };

  const handleReset = async () => {
    setInputValue('');
    try {
      const allCompanies = await getCompanies();
      setCompanies(allCompanies);
    } catch (error) {
      handleAxiosError(error, 'Erro ao restaurar empresas');
    }
  };

  return (
    <CustomGrid component={'form'} onSubmit={handleSearch}>
      <CustomTextField
        sx={{ maxWidth: 320 }}
        label="Buscar empresa por ID"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="number"
      />
      <CustomButton type="submit" sx={{ ml: 2 }}>
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
