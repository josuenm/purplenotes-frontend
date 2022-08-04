import { Container } from "./styles";

export function Submit({ value, isDisabled }) {
  return <Container type="submit" value={value} data-disabled={isDisabled} />;
}
