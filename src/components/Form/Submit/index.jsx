import { Container } from "./styles";

export function Submit({ title, isDisabled }) {
  return <Container type="submit" value={title} data-disabled={isDisabled} />;
}
