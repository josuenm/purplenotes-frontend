import styled from "styled-components";

export const Container = styled.input`
  background: none;
  color: var(--purple-100);
  border: 1px solid var(--purple-100);
  padding: 0.7rem 0;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;

  transition: ease 0.2s background, color;
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
