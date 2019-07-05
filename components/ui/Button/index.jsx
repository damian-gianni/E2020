import { Button } from "./button.styled";

export default ({
  variant = "primary",
  children,
  disabled = false,
  customStyle = "",
  href = "#"
}) => (
  <Button
    variant={variant}
    disabled={disabled}
    customStyle={customStyle}
    href={href}
  >
    {children}
  </Button>
);
