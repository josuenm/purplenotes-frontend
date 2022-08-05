import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: var(--purple-100);
  min-height: 100vh;

  .Container {
    min-height: 100vh;

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

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #fff;
`;

export const ButtonContainer = styled.div`
  margin-top: 2rem;

  a {
    padding: 0.8rem 1rem;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 0.25rem;
    border: 1px solid #fff;

    transition: all 0.2s;
    &:hover {
      background: #fff;
      color: var(--purple-100);
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
