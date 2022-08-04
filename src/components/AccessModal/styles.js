import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 24px;
  border-radius: 0.5rem;
  background: #fff;

  img {
    width: 12rem;
    margin: 0 auto;
    padding-top: 1rem;

    @media (max-width: 575.98px) {
      display: none;
    }
  }

  .error {
    color: red;
    margin: 0;
  }

  .AccessModal__title {
    color: gray;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    padding-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;

    a {
      font-size: inherit;
      font-weight: 600;
      color: var(--purple-100);

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const InputContainer = styled.div`
  position: relative;
  z-index: 5;
  border: 1px solid gray;
  width: 18rem;
  height: 45px;
  border-radius: 0.25rem;
  overflow: hidden;

  input {
    width: inherit;
    height: inherit;
    padding: 0.5rem 0 0 0;
    border: none;
    padding-left: 1rem;
    outline: none;
    font-size: 1rem;
  }

  input:focus + label,
  input:invalid + label,
  [data-focus='true'] + label {
    transform: translateY(0);
    font-size: 0.8rem;
    color: #000;
  }

  label {
    position: absolute;
    top: 0;
    left: 1rem;
    z-index: 1;

    font-size: 1rem;
    color: gray;
    pointer-events: none;
    transition: all 0.2s;
    transform: translateY(50%);
  }
`;

export const InputSubmit = styled.input`
  background: none;
  color: var(--purple-100);
  border: 1px solid var(--purple-100);
  padding: 0.7rem 0;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;

  &[data-disabled='true'] {
    cursor: default;
    background: var(--purple-100);
    color: #fff;
    pointer-events: none;
    opacity: 0.5;
  }

  transition: all 0.2s;
  &:hover {
    background: var(--purple-100);
    color: #fff;
  }
`;

export const RevealContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  z-index: 1;
  transform: translateY(-50%);

  padding-right: 0.5rem;
  line-height: 40px;
  background: #fff;
  cursor: pointer;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--purple-100);
  }
`;
