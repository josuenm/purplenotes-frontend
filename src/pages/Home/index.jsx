import {
  Container,
  Description,
  InfoContainer,
  PresentationContainer,
  PresentationImage,
  Title,
  ButtonContainer,
  Header,
  LoginButton,
  Logo,
} from "./styles";
import { Head } from "../../components/Head";
import { Link } from "react-router-dom";
import { SafeZone } from "../../components/SafeZone";
import LogoImage from "../../assets/images/logo.png";
import Prestation from "../../assets/images/presentation.png";

export function Home() {
  return (
    <Container>
      <Head title="Home | JavaScript Notes" description="" />

      <Header>
        <SafeZone>
          <Logo src={LogoImage} alt="Logo" />
          <Link to="/login">
            <LoginButton>Login</LoginButton>
          </Link>
        </SafeZone>
      </Header>

      <SafeZone>
        <InfoContainer>
          <Title>
            Create notes easily and access them whenever you want in the cloud
          </Title>

          <Description>
            Now you have a place to keep your notes! With our service you can
            save your notes for free and access them whenever and wherever you
            want! Your notes will always be available and safely stored
          </Description>

          <ButtonContainer>
            <Link to="/register">REGISTER FOR FREE NOW</Link>
          </ButtonContainer>
        </InfoContainer>

        <PresentationContainer>
          <PresentationImage
            src={Prestation}
            alt="Apresentação da plataforma"
          />
        </PresentationContainer>
      </SafeZone>
    </Container>
  );
}
