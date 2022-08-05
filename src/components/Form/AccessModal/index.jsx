import { Container, Title } from "./styles";
import { useState } from "react";
import logo from "../../../assets/images/logo.png";

export function AccessModal({ children }) {
  return (
    <Container>
      <img src={logo} alt="" />
      <Title>Your notes in the cloud</Title>
      {children}
    </Container>
  );
}
