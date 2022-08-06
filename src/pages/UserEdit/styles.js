import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 3rem 0;
`;

export const Title = styled.h2``;

export const SimpleBox = styled.form`
  position: relative;
  padding: 1rem;
  background: #fff;
  box-shadow: 0 0 8px 1px #aaa;
  border-radius: 0.25rem;
  overflow: hidden;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 450px;

  @media (max-width: 575.98px) {
    width: 90%;
  }
`;

export const DeleteButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const DeleteButton = styled.button`
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  border: none;
  color: #fff;
  background-color: #ff4d4d;
  cursor: pointer;

  transition: ease 0.4s background-color;
  &:hover {
    background-color: #c92525;
  }
`;
