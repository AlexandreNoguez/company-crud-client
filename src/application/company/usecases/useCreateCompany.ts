import { ICompanyRepository } from '@/domain/company/ICompanyRepository';
import { CompanyFormData } from '@/shared/schemas/companySchema';

export class UseCreateCompany {
  constructor(private repo: ICompanyRepository) {}

  async execute(data: CompanyFormData) {
    await this.repo.create(data);
  }
}
