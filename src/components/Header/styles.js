import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 5rem;
  background: #fff;

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

  .header__mobileMenuBackground {
    display: none;

    @media (max-width: 991.98px) {
      &[data-active='true'] {
        display: block;
        position: absolute;
        top: 3rem;
        left: 0;
        right: 0;
        width: 100%;
        height: 100vh;
        z-index: 99;
        background: rgba(0, 0, 0, 0.5);
      }
    }
  }

  .header__account {
    transition: all 0.2s;

    a {
      color: var(--purple-100);
      font-size: 1.2rem;

      & + a {
        margin-left: 2.5rem;
      }
    }

    .header__accountLogin {
      padding: 0.2rem 1rem 0.3rem 1rem;
      border-radius: 0.25rem;
      border: 1px solid var(--purple-100);

      transition: all 0.2s;
      &:hover {
        background: var(--purple-100);
        color: #fff;
      }
    }

    @media (max-width: 991.98px) {
      display: none;

      &[data-active='true'] {
        position: absolute;
        top: 3rem;
        left: 0;
        right: 0;
        width: 100%;
        height: 130px;
        z-index: 999;

        display: flex;
        flex-direction: column;
        background: #fff;

        a {
          padding: 1rem;
        }

        .header__accountLogin {
          margin-left: 0;
          border: none;

          &:hover {
            background: none;
            color: var(--purple-100);
          }
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

  .stick {
    position: absolute;
    width: 100%;
    height: 5px;
    border-radius: 3rem;
    background: var(--purple-100);
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

  @media (max-width: 991.98px) {
    display: block;
  }
`;
