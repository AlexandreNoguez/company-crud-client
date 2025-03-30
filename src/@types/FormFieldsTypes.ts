import { CompanyFormData } from '../schemas/companySchema';

export type FormFieldsTypes = {
  label: string;
  name: keyof CompanyFormData;
  mask?: string;
};
