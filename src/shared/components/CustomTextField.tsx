import { TextField, TextFieldProps } from '@mui/material';
import { FieldError } from 'react-hook-form';

type CustomTextFieldProps = TextFieldProps & {
  errorMessage?: FieldError | string;
};

export default function CustomTextField({
  errorMessage,
  size = 'small',
  margin = 'normal',
  ...props
}: CustomTextFieldProps) {
  return (
    <TextField
      size={size}
      fullWidth
      margin={margin}
      error={!!errorMessage}
      InputLabelProps={{
        shrink: true,
      }}
      helperText={
        typeof errorMessage === 'string' ? errorMessage : errorMessage?.message
      }
      {...props}
    />
  );
}
