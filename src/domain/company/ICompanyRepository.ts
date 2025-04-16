import { Company } from './Company';
import { CompanyFormData } from '@/shared/schemas/companySchema';
import { CompanyPaginationResponse } from '@/shared/@types/CompanyTypes';

export interface ICompanyRepository {
  create(data: CompanyFormData): Promise<void>;
  list(
    page: number,
    limit: number,
    searchTerm?: string,
  ): Promise<CompanyPaginationResponse>;
  getById(id: string | number): Promise<Company>;
  update(id: string | number, data: CompanyFormData): Promise<void>;
  softRemove(id: number): Promise<void>;
}
