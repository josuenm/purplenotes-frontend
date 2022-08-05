import styled from "styled-components";

export const Container = styled.nav`
  flex-direction: column;
  align-items: center;

  min-height: 100vh;
  background: var(--purple-100);
  color: #fff;
  overflow: hidden;
  padding-top: 4.5rem;

  animation: sidebarClose 0.3s forwards;

  @keyframes sidebarClose {
    from {
      width: 300px;
    }
    to {
      width: 0;
      display: none;
    }
  }

  @media (max-width: 575.98px) {
    position: absolute;
    top: 3.5rem;
    left: 0;
    z-index: 99;
    padding-top: 0;
    height: calc(100vh - 3.5rem);
  }

  @media (min-width: 575.99px) and (max-width: 991.98px) {
    height: 100vh;
  }

  @media (max-width: 575.98px) {
    animation: sidebarClose 0.3s forwards;

    @keyframes sidebarClose {
      from {
        width: 200px;
      }
      to {
        width: 0;
        display: none;
      }
    }
  }

  @media (min-width: 575.99px) and (max-width: 991.98px) {
    margin-right: 0;
    animation: sidebarClose 0.3s forwards;

    @keyframes sidebarClose {
      from {
        width: 300px;
      }
      to {
        width: 0;
        display: none;
      }
    }
  }

  &.active {
    display: flex;

    animation: sidebarOpen 0.3s forwards;

    @keyframes sidebarOpen {
      from {
        width: 0;
      }
      to {
        width: 300px;
      }
    }

    @media (max-width: 575.98px) {
      animation: sidebarOpen 0.3s forwards;

      @keyframes sidebarOpen {
        from {
          width: 0;
        }
        to {
          width: 100%;
        }
      }
    }

    @media (min-width: 575.99px) and (max-width: 991.98px) {
      margin-right: 0;
      animation: sidebarOpen 0.3s forwards;

      @keyframes sidebarOpen {
        from {
          width: 0;
        }
        to {
          width: 300px;
        }
      }
    }
  }

  ul {
    width: 100%;
    height: object-fit;
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 1rem;
    overflow: hidden;

    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--purple-80);
      border-radius: 3rem;
    }

    li {
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      padding: 1rem;
      overflow: hidden;
      cursor: pointer;

      transition: all 0.3s;
      &:hover {
        background: var(--purple-90);
      }

      .sidebar__noteTitle {
        font-weight: bold;
      }

      .sidebar__noteInfo {
        width: 100%;
        display: flex;
        gap: 7rem;
        justify-content: space-between;

        .sidebar__noteDate {
          padding: 0.4rem 0.5rem 0 0.5rem;
          border-radius: 0.25rem;
          background: var(--purple-80);

          @media (max-width: 991.98px) {
            padding: 0.2rem 0.5rem 0 0.5rem;
          }
        }

        .sidebar__deleteIcon {
          color: #fff;
          border-radius: 50%;
          padding: 0.2rem;
          width: 30px;
          height: 30px;

          transition: all 0.2s;
          &:hover {
            background: var(--purple-80);
          }
        }
      }
    }
  }
`;

export const SidebarHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;

  input[type="text"] {
    width: 75%;
    padding: 0.5rem 1rem;
    border-radius: 3rem;
    border: none;

    @media (max-width: 991.98px) {
      width: calc(100% - 3rem);
      padding: 0.5rem 1rem;
    }
  }

  .sidebar__info {
    width: max-content;
    display: flex;
    gap: 3rem;
    margin: 0 0.5rem;
    align-items: center;

    .sidebar__numberOfNotes {
      font-size: 1.2rem;
      font-weight: bold;
    }

    button {
      background: var(--purple-80);
      color: #fff;

      font-weight: bold;
      padding: 0.5rem 1rem;
      cursor: pointer;

      border: none;
      border-radius: 0.25rem;

      transition: all 0.2s;
      &:hover {
        background: var(--purple-90);
      }
    }
  }
`;
