import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: var(--purple-100);
  height: 100vh;

  @media (max-width: 575.98px) {
    height: auto;
  }
  @media (min-width: 575.99px) and (max-width: 991.98px) {
    height: 100vh;
  }

  .home__body {
    display: flex;
    justify-content: center;
    padding: 0 5rem;
    padding-top: 7rem;

    @media (max-width: 991.98px) {
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      margin-top: 3rem;
      padding: 2rem 1rem;
    }

    .home__body__title {
      display: flex;
      flex-direction: column;

      color: #fff;

      h2 {
        font-size: 2.5rem;
        margin: 0;
      }

      p {
        font-size: 1.2rem;
      }

      .home__body__titleButton {
        margin-top: 2rem;

        a {
          padding: 1rem;
          font-size: 1.2rem;
          font-weight: 600;
          border-radius: 0.25rem;
          border: 1px solid #fff;

          transition: all 0.2s;
          &:hover {
            background: #fff;
            color: var(--purple-100);
          }
        }
      }
    }

    .home__body__presentation {
      @media (max-width: 991.98px) {
        margin-top: 4rem;
      }

      img {
        transform: translateY(4.2rem);
        width: 100%;

        @media (max-width: 991.98px) {
          transform: translateX(-1rem);
          width: 100%;
        }
      }
    }
  }
`;
