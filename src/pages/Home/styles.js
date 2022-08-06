import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  .Container {
    padding-top: 8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    @media (max-width: 991.98px) {
      flex-direction: column;
      gap: 4rem;
      justify-content: flex-start;
      padding: 2rem 1rem;
    }
  }
`;

export const Header = styled.header`
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #eee;

  .Container {
    min-height: 0;
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 991.98px) {
      flex-direction: row;
      padding: 1rem;
    }
  }
`;

export const Logo = styled.img`
  height: 35px;
`;

export const LoginButton = styled.button`
  background-color: transparent;
  border: 1px solid var(--purple-100);
  color: var(--purple-100);
  padding: 0.5rem 2rem;
  font-size: 1.1rem;
  border-radius: 0.25rem;

  transition: ease 0.4s background-color, color;
  &:hover {
    background-color: var(--purple-100);
    color: #fff;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #000;
`;

export const ButtonContainer = styled.div`
  margin-top: 2rem;

  a {
    padding: 0.8rem 1rem;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 0.25rem;
    border: 1px solid var(--purple-100);
    color: var(--purple-100);

    transition: all 0.2s;
    &:hover {
      background: var(--purple-100);
      color: #fff;
    }
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
`;

export const Description = styled.h2`
  font-weight: 400;
  font-size: 1.2rem;
`;

export const PresentationContainer = styled.div`
  min-height: 100%;
  display: flex;
  align-items: center;
`;

export const PresentationImage = styled.img`
  max-width: 2000px;
  width: 100%;
`;
