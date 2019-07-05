import { Button } from "./button.styled";

export default props => {
  return <Button {...props}>{props.children}</Button>;
};
