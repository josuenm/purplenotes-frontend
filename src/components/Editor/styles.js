import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;

  &.active::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
  }

  .editor {
    position: relative;
    width: 100%;
    height: calc(100vh - 7rem);
    margin: 0 auto;
    margin-top: 4.1rem;

    @media (max-width: 575.98px) {
      margin-top: 3.5rem;
      height: calc(100vh - 7.6rem);
    }
  }
`;
