import React from "react";

import { Container, Content } from "./styles";

function Modal({ children, size }) {
  return (
    <Container>
      <Content size={size}>{children}</Content>
    </Container>
  );
}

Modal.defaultProps = {
  size: "default",
};

export default Modal;
