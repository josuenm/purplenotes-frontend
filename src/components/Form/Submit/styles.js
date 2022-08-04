import styled from "styled-components";

export const Container = styled.input`
  background: none;
  color: var(--purple-100);
  border: 1px solid var(--purple-100);
  padding: 0.7rem 0;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;

  transition: all 0.2s;
  &:hover {
    background: var(--purple-100);
    color: #fff;
  }
`;
