import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const UserButton = styled.button`
  border: 1px solid #fff;
  color: #fff;
  background-color: transparent;
  padding: 0.5rem 2rem;
  border-radius: 0.25rem;
  font-weight: 700;
  font-size: 1.1rem;

  display: flex;
  align-items: center;

  transition: ease 0.4s opacity;

  @media screen and (max-width: 991.98px) {
    &:active {
      opacity: 0.7;
    }
  }
  @media screen and (min-width: 991.99px) {
    &:hover {
      opacity: 0.7;
    }
  }

  @media screen and (max-width: 570px) {
    padding: 0.5rem;
  }
`;

export const UserButtonContainer = styled.div`
  position: relative;
`;

export const DropDown = styled.img``;

export const Logo = styled.img`
  width: 150px;
  height: 35px;
`;

export const DropDownContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: -200%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
`;

export const DropDownItem = styled.a`
  & + & {
    border-top: 1px solid transparent;
  }

  &:first-of-type {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      transform: rotate(45deg) translateX(-50%);
      width: 15px;
      height: 15px;
      background-color: #fff;
      border-radius: 0.25rem;
    }
  }

  &:last-of-type {
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }

  background-color: #fff;
  border: 1px solid #fff;
  width: 100%;
  padding: 0.25rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--purple-100);

  cursor: pointer;

  transition: ease 0.4s opacity;
  @media screen and (max-width: 991.98px) {
    &:active {
      opacity: 0.8;
    }
  }
  @media screen and (min-width: 991.99px) {
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const DropDownBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100vw;
  height: 100vh;
`;
