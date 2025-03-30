import { Button, ButtonProps } from '@mui/material';

export default function CustomButton(props: ButtonProps) {
  return (
    <Button
      variant="contained"
      size="medium"
      sx={{ borderRadius: 2, textTransform: 'none', ...props.sx }}
      {...props}
    />
  );
}
