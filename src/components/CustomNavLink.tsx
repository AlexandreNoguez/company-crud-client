import { forwardRef } from 'react';
import { Button, ButtonProps } from '@mui/material';
import { NavLink, NavLinkProps } from 'react-router-dom';

type CustomNavLinkProps = ButtonProps & NavLinkProps;

const CustomNavLink = forwardRef<HTMLAnchorElement, CustomNavLinkProps>(
  ({ to, children, ...rest }, ref) => {
    return (
      <Button ref={ref} component={NavLink} to={to} {...rest}>
        {children}
      </Button>
    );
  },
);

export default CustomNavLink;
