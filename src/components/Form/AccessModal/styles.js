import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 3rem 2rem;
  border-radius: 0.5rem;
  border: 1px solid #eee;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
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
