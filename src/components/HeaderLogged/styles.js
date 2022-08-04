import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background: var(--purple-100);

  @media (max-width: 991.98px) {
    padding: 0.5rem 1rem;
  }

  .header__logo {
    width: 10rem;
    height: 2.7rem;

    @media (max-width: 991.98px) {
      width: 8rem;
      height: 2rem;
      transform: translateX(-5%);
    }
  }

  .header__user {
    background: none;
    border: 1.5px solid #fff;
    border-radius: 0.25rem;
    padding: 0.1rem 0.5rem 0.5rem 1rem;
    cursor: pointer;

    font-size: 1.2rem;
    color: #fff;

    @media (max-width: 991.98px) {
      display: none;
    }

    &:hover {
      background: #fff;
      border-color: #eee;
      color: #000;
    }

    @media (max-width: 991.98px) {
      font-size: 1rem;
      padding: 0 0.3rem 0.4rem 0.6rem;
    }

    .header__userDropDown {
      transform: translateY(25%);
    }
  }

  .header__dropDownContainer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.1);

    .header__dropDownContent {
      position: absolute;
      top: 3.5rem;
      right: 4.7rem;
      background: #fff;
      border-radius: 0.25rem;

      display: flex;
      flex-direction: column;
      animation: dropDownAnime 0.5s forwards;

      @keyframes dropDownAnime {
        from {
          transform: translateY(-30%);
        }
        to {
          transform: translateY(0);
        }
      }

      @media (max-width: 991.98px) {
        top: 3.8rem;
        right: 0.5rem;
      }

      .header__dropDownContent__option {
        & + button {
          border-top: 1px solid #eee;
        }

        padding: 0.5rem 1.5rem;
        background: none;
        border: none;

        font-size: 1rem;
        text-align: start;
        color: var(--purple-100);
        cursor: pointer;

        @media (max-width: 991.98px) {
          font-size: 1.2rem;
        }
      }
    }
  }
`;

export const MobileMenu = styled.div`
  position: relative;
  display: none;
  width: 35px;
  height: 25px;

  @media (max-width: 991.98px) {
    display: block;
  }

  .stick {
    position: absolute;
    width: 100%;
    height: 5px;
    border-radius: 3rem;
    background: #fff;
    transition: all 0.2s;
  }
  .first-stick {
    top: 0;
  }
  .second-stick {
    top: 50%;
    transform: translateY(-50%);
  }
  .third-stick {
    bottom: 0;
  }

  &[data-active='true'] .first-stick {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }
  &[data-active='true'] .second-stick {
    display: none;
  }
  &[data-active='true'] .third-stick {
    bottom: 50%;
    transform: translateY(50%) rotate(-45deg);
  }
`;

export const SidebarButton = styled.button`
  position: relative;
  transition: 0.3s;

  width: 50px;
  height: 50px;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  cursor: pointer;

  background: var(--purple-100);
  border: none;

  @media (max-width: 991.98px) {
    width: 40px;
    height: 40px;
    transform: translateX(0.5rem);
  }

  .stick {
    position: absolute;
    right: 1rem;
    width: 30px;
    height: 4px;
    border-radius: 1rem;
    background: #fff;

    transition: all 0.4s;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: -0.5rem;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #fff;
    }
  }

  .firstStick {
    top: 25%;
  }

  .secondStick {
    top: 50%;
    transform: translateY(-50%);
  }

  .thirdStick {
    bottom: 25%;
  }

  &.active {
    .stick {
      top: 45%;
      transform: translateY(-50%);

      &:before {
        display: none;
      }
    }

    .firstStick {
      transform: rotate(45deg);
    }

    .thirdStick {
      transform: rotate(-45deg);
    }
    .secondStick {
      display: none;
    }
  }
`;
