import { ICompanyRepository } from '@/domain/company/ICompanyRepository';
import { Company } from '@/domain/company/Company';
import { CompanyFormData } from '@/shared/schemas/companySchema';
import { CompanyPaginationResponse } from '@/shared/@types/CompanyTypes';
import { omitFields } from '@/shared/helpers/omitFields';
import { formatAddress } from '@/shared/helpers/formatStrings';
import api from '@/infra/http/axios';

export class CompanyApiRepository implements ICompanyRepository {
  async create(formData: CompanyFormData): Promise<void> {
    const address = formatAddress(formData);
    const payload = {
      ...omitFields(formData, [
        'logradouro',
        'numero',
        'complemento',
        'bairro',
        'municipio',
        'estado',
        'cep',
      ]),
      address,
    };
    await api.post('/companies', payload);
  }

  async list(
    page: number,
    limit: number,
    searchTerm?: string,
  ): Promise<CompanyPaginationResponse> {
    const { data } = await api.get('/companies', {
      params: { page, limit, searchTerm },
    });
    return {
      ...data,
      data: data.data.map((c: any) => Company.fromApi(c)),
    };
  }

  async getById(id: string | number): Promise<Company> {
    const { data } = await api.get(`/companies/${id}`);
    return Company.fromApi(data);
  }

  async update(id: string | number, formData: CompanyFormData): Promise<void> {
    const address = formatAddress(formData);
    const payload = {
      ...omitFields(formData, [
        'logradouro',
        'numero',
        'complemento',
        'bairro',
        'municipio',
        'estado',
        'cep',
      ]),
      address,
    };
    await api.patch(`/companies/${id}`, payload);
  }

  async softRemove(id: number): Promise<void> {
    await api.delete(`/companies/soft/${id}`);
  }
}
