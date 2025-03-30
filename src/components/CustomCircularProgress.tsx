import { CircularProgress, CircularProgressProps } from '@mui/material';

export default function CustomCircularProgress({
  size = 20,
  color = 'inherit',
  thickness = 4,
  sx,
  ...rest
}: CircularProgressProps) {
  return (
    <CircularProgress
      size={size}
      color={color}
      thickness={thickness}
      sx={sx}
      {...rest}
    />
  );
}
