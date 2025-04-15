import { CompanyFormData } from '../shared/schemas/companySchema';

export type FormFieldsTypes = {
  label: string;
  name: keyof CompanyFormData;
  mask?: string;
};
