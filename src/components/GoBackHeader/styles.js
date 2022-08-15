import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 0.5rem 0;
`;

export const BackButton = styled.button`
  background-color: transparent;
  border: 1px solid var(--purple-100);
  padding: 0.25rem 1.5rem;
  border-radius: 0.25rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--purple-100);

  transition: ease 0.2s background-color, color;
  @media screen and (max-width: 991.98px) {
    &:active {
      background: var(--purple-100);
      color: #fff;
    }
  }
  @media screen and (min-width: 991.99px) {
    &:hover {
      background: var(--purple-100);
      color: #fff;
    }
  }
`;
