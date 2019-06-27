import { FunctionComponent, useEffect } from "react";
import { BtnClose, Root, Container, Content } from "./modal.styled";

export const Modal = props => {
  useEffect(() => {
    document.body.addEventListener("touchmove", e => e.preventDefault(), false);
    return () => {
      document.body.addEventListener(
        "touchmove",
        e => e.preventDefault(),
        false
      );
    };
  }, []);

  const stopPropagation = e => {
    e.stopPropagation(e);
  };

  return (
    <Root
      open={props.open}
      onClick={stopPropagation}
      onTouchStart={stopPropagation}
    >
      <Content open={props.open} onTouchStart={stopPropagation}>
        {props.onClose && (
          <BtnClose className="close" onClick={props.onClose} />
        )}
        <Container>{props.children}</Container>
      </Content>
    </Root>
  );
};
