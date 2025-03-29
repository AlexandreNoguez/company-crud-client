import { Typography, TypographyProps } from "@mui/material";
import { LinkProps } from "react-router-dom";

type MergedProps = Omit<TypographyProps, "color" | "onAbort"> &
  Omit<LinkProps, "color" | "to"> & {
    to?: LinkProps["to"];
  };

interface CustomTypographyProps extends MergedProps {
  color?: TypographyProps["color"] | LinkProps["color"];
  to?: LinkProps["to"];
}

export default function CustomTypography(props: CustomTypographyProps) {
  return <Typography {...props} />;
}
