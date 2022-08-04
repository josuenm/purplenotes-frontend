import { Container } from "./styles";

export function Input({ htmlFor, type, register, placeholder = "" }) {
  return (
    <Container
      type={type}
      id={htmlFor}
      {...register}
      placeholder={placeholder}
    />
  );
}
