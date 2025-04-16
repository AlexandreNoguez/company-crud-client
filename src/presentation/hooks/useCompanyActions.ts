import { UseCreateCompany } from '@/application/company/useCreateCompany';
import { CompanyApiRepository } from '@/infra/repositories/CompanyApiRepository';
import { CompanyFormData } from '@/shared/schemas/companySchema';

const repo = new CompanyApiRepository();

export const useCompanyActions = () => {
  const createCompany = async (data: CompanyFormData) => {
    const useCase = new UseCreateCompany(repo);
    await useCase.execute(data);
  };

  const updateCompany = async (id: string | number, data: CompanyFormData) => {
    const useCase = new UseCreateCompany(repo);
    await useCase.execute(data);
  };

  const listCompanies = async (
    page: number,
    limit: number,
    searchTerm?: string,
  ) => {
    const { data } = await repo.list(page, limit, searchTerm);
    return data;
  };

  const getCompanyById = async (id: string | number) => {
    const { data } = await repo.getById(id);
    return data;
  };
  const softRemoveCompany = async (id: number) => {
    await repo.softRemove(id);
  };
  return {
    createCompany,
    updateCompany,
    listCompanies,
    getCompanyById,
    softRemoveCompany,
  };
};
