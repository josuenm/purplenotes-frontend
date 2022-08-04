import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);

  z-index: 1000;
  opacity: 1;
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border-top: 5px solid var(--purple-100);

  animation: spinner 0.2s infinite linear;
  @keyframes spinner {
    to {
      transform: rotate(390deg);
    }
  }
`;
