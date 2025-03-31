export type Company = {
  id: number;
  name: string;
  cnpj: string;
  tradeName: string;
  address: string;
  createdAt: string;
  updatedAt: string;
};

export type CompanyPaginationResponse = {
  data: Company[];
  page: number;
  lastPage: number;
  total: number;
};
