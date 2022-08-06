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

    &:hover {
      text-decoration: underline;
    }
  }
`;
