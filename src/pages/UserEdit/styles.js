import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5rem;
  height: calc(100vh + 5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 575.98px) {
    margin-top: 3rem;
  }

  .userEdit__organizedSet {
    width: 35%;
    display: flex;
    flex-direction: column;

    @media (max-width: 575.98px) {
      width: 90%;
    }

    @media (min-width: 575.99px) and (max-width: 991.98px) {
      width: 50%;
    }

    .userEdit__title {
      color: var(--text-gray);
    }
  }

  .userEdit__deleteButton {
    width: 35%;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 575.98px) {
      width: 90%;
    }

    @media (min-width: 575.99px) and (max-width: 991.98px) {
      width: 50%;
    }

    button {
      margin-top: 1rem;
      padding: 0.5rem;
      border-radius: 0.25rem;
      border: none;
      color: #fff;
      background: #ff4d4d;
      cursor: pointer;

      &:hover {
        background: #c92525;
      }
    }
  }
`;

export const SimpleBox = styled.div`
  position: relative;
  padding: 1rem;
  background: #fff;
  box-shadow: 0 0 8px 1px #aaa;
  border-radius: 0.25rem;
  overflow: hidden;

  .userEdit__input {
    display: flex;
    flex-direction: column;

    & + .userEdit__input {
      margin-top: 1rem;
    }

    label {
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--text-gray);
    }

    input {
      border-radius: 0.25rem;
      padding: 0.5rem;
      border: 1px solid #aaa;
    }
  }

  .userEdit__submit {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;

    button {
      padding: 0.5rem;
      border: 1px solid var(--purple-100);
      border-radius: 0.25rem;
      font-weight: 600;
      background: none;
      text-transform: uppercase;
      color: var(--purple-100);
      cursor: pointer;

      &:hover {
        background: var(--purple-100);
        color: #fff;
      }

      &.disabled {
        pointer-events: none;
        border: 1px solid var(--disabled);
        color: var(--disabled);

        &:hover {
          background: none;
          color: var(--disabled);
        }
      }
    }
  }

  .userEdit__success {
    width: 100%;
    margin-top: 1rem;
    padding: 0.5rem 0;
    text-align: center;
    border-radius: 0.25rem;
    background: #92ff77;
    color: #0f4d00;
  }

  .userEdit__error {
    width: 100%;
    margin-top: 1rem;
    padding: 0.5rem 0;
    text-align: center;
    border-radius: 0.25rem;
    background: #ff7777;
    color: #4d0000;
  }

  [data-active='true'] {
    animation: showInfo 1s alternate forwards;

    @keyframes showInfo {
      from {
        position: absolute;
        transform: translateY(5rem);
        opacity: 0;
      }
      to {
        position: relative;
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  [data-active='false'] {
    animation: hideInfo 1s alternate forwards;
    @keyframes hideInfo {
      from {
        position: relative;
        opacity: 1;
        transform: translateY(0);
      }
      to {
        position: absolute;
        opacity: 0;
        transform: translateY(5rem);
      }
    }
  }
`;
