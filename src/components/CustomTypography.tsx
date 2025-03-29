import { Typography, TypographyProps } from '@mui/material';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

type TextPreset = 'title' | 'subtitle' | 'paragraph';

interface CustomTypographyProps extends TypographyProps {
  preset?: TextPreset;
  bold?: boolean;
  to?: LinkProps['to'];
}

const presetStyles: Record<TextPreset, TypographyProps> = {
  title: {
    variant: 'h4',
    gutterBottom: true,
  },
  subtitle: {
    variant: 'h6',
    gutterBottom: true,
  },
  paragraph: {
    variant: 'body1',
    gutterBottom: false,
  },
};

export default function CustomTypography({
  preset = 'paragraph',
  bold = false,
  to,
  children,
  sx,
  ...props
}: CustomTypographyProps) {
  const presetProps = presetStyles[preset];

  return (
    <Typography
      component={to ? RouterLink : 'p'}
      to={to}
      {...presetProps}
      sx={{ fontWeight: bold ? 'bold' : undefined, ...sx }}
      {...props}
    >
      {children}
    </Typography>
  );
}
