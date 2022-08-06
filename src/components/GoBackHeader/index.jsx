import { BackButton, Container } from "./styles";
import { SafeZone } from "../../components/SafeZone";
import { Link } from "react-router-dom";

export const GoBackHeader = ({ to }) => {
  return (
    <Container>
      <SafeZone>
        <Link to={to}>
          <BackButton>Back</BackButton>
        </Link>
      </SafeZone>
    </Container>
  );
};
