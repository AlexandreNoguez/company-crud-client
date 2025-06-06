import {
  Controller,
  Control,
  FieldError,
  FieldValues,
  Path,
} from 'react-hook-form';
import { mask as applyMask } from 'remask';

import CustomTextField from './CustomTextField';

interface MaskedTextFieldProps<T extends FieldValues> {
  name: keyof T;
  label: string;
  control: Control<T>;
  mask: string | string[];
  errorMessage?: FieldError | string;
}

export default function MaskedTextField<T extends FieldValues>({
  name,
  label,
  control,
  mask,
  errorMessage,
}: MaskedTextFieldProps<T>) {
  return (
    <Controller
      name={name as Path<T>}
      control={control}
      render={({ field }) => (
        <CustomTextField
          label={label}
          value={field.value || ''}
          onChange={(e) => {
            const rawValue = e.target.value.replace(/\D/g, '');
            field.onChange(applyMask(rawValue, mask));
          }}
          errorMessage={errorMessage}
        />
      )}
    />
  );
}
