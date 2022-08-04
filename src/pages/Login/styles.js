import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: var(--purple-100);
  height: 100vh;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 575.98px) {
    padding-top: 3rem;
    height: auto;
  }
  @media (min-width: 575.99px) and (max-width: 991.98px) {
    height: 100vh;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const OtherOption = styled.p``;
