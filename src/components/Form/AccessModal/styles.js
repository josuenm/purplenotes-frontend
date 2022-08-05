import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 24px;
  border-radius: 0.5rem;
  background: #fff;

  width: 450px;

  @media (max-width: 575.98px) {
    width: 90%;
  }

  img {
    width: 12rem;
    margin: 0 auto;
    padding-top: 1rem;

    @media (max-width: 575.98px) {
      display: none;
    }
  }
`;

export const Title = styled.h2`
  color: gray;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  padding-bottom: 0.5rem;
`;
