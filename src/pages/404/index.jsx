import { Link } from "react-router-dom";
import { SafeZone } from "../../components/SafeZone";
import {
  Box,
  Container,
  HorizontalLine,
  Message,
  ReturnButton,
  Title,
} from "./styles";

export default function NotFound() {
  return (
    <Container>
      <SafeZone>
        <Box>
          <Title>Not found</Title>
          <Message>The page you are looking for was not found.</Message>

          <HorizontalLine />

          <Link to="/dashboard">
            <ReturnButton>Return</ReturnButton>
          </Link>
        </Box>
      </SafeZone>
    </Container>
  );
}
