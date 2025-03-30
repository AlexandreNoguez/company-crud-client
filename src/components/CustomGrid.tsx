// src/components/CustomGrid.tsx
import { Grid, GridProps } from '@mui/material';

export default function CustomGrid({
  children,
  sx,
  justifyContent = 'center',
  alignItems = 'center',
  flexWrap = 'wrap',
  ...props
}: GridProps) {
  return (
    <Grid
      container
      spacing={2}
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexWrap={flexWrap}
      sx={sx}
      {...props}
    >
      {children}
    </Grid>
  );
}
