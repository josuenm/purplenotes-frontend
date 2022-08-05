import { Container } from "./styles";

export const SafeZone = ({ children }) => {
  return <Container className="Container">{children}</Container>;
};
