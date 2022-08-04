import { Container } from "./styles";
import logo from "../../../assets/images/logo.png";
import { useState } from "react";

export function AccessModal({ children }) {
  return (
    <Container>
      <img src={logo} alt="" />
      <p className="AccessModal__title">Your notes in the cloud</p>
      {children}
    </Container>
  );
}

export function Input({ htmlFor, type, register }) {
  return <></>;
}

export function Submit({ value, isDisabled }) {
  return <></>;
}
