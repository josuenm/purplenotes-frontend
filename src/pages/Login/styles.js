import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 575.98px) {
    padding-top: 3rem;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const OtherOption = styled.p`
  a {
    color: var(--purple-100);

    @media screen and (max-width: 991.98px) {
      &:active {
        text-decoration: underline;
      }
    }
    @media screen and (min-width: 991.99px) {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
