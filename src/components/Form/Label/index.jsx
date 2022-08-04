import { Container } from "./styles";

const Label = ({ title, htmlFor = "" }) => {
  return <Container htmlFor={htmlFor}>{title}</Container>;
};

export { Label };
