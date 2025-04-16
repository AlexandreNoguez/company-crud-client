import { ICompanyRepository } from '@/domain/company/ICompanyRepository';
import { Company } from '@/domain/company/Company';

export class UseCreateCompany {
  constructor(private repo: ICompanyRepository) {}

  async execute(data: { name: string; cnpj: string }) {
    const company = new Company(data.name, data.cnpj);
    if (!company.isValidCNPJ()) throw new Error('CNPJ inválido');
    await this.repo.create(company);
  }
}
