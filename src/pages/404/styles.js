import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  min-height: 100vh;

  .Container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: inherit;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
`;

export const Message = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ddd;
  margin: 2rem 0;
`;

export const ReturnButton = styled.button`
  width: 100%;
  border: 0;
  background-color: var(--purple-100);
  color: #fff;
  padding: 1rem 1.5rem;
  border-radius: 0.25rem;
  font-weight: 700;
  font-size: 1rem;

  transition: ease 0.4s opacity;
  &:hover {
    opacity: 0.7;
  }
`;
