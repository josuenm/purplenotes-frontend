import styled from "styled-components";

export const Container = styled.div`
  .Container {
  }
`;

export const Presentation = styled.div`
  background-color: var(--purple-100);
  padding: 1rem 0 3rem;

  .Container {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    text-align: center;
  }
`;

export const CreateNoteButton = styled.button`
  max-width: 300px;
  margin: 0 auto;
  border: 0;
  background-color: $fff;
  padding: 0.8rem 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 0.25rem;
  color: var(--purple-100);
  text-align: center;

  transition: ease 0.2s opacity;
  @media screen and (max-width: 991.98px) {
    &:active {
      opacity: 0.85;
    }
  }
  @media screen and (min-width: 991.99px) {
    &:hover {
      opacity: 0.85;
    }
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 3rem 0;
`;

export const ListTitle = styled.h3`
  font-size: 1.5rem;
`;

export const WarningContainer = styled.div`
  width: 100%;
  text-align: center;
`;
export const WarningText = styled.h4`
  font-weight: 500;
  font-size: 1.2rem;
`;

export const ListOfNotesContainer = styled.div`
  max-width: calc(3 * 250px + 2 * 40px);
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  @media screen and (max-width: 991px) {
    max-width: calc(2 * 250px + 1 * 40px);
  }

  @media screen and (max-width: 570px) {
    flex-direction: column;
    max-width: 100%;
  }
`;

export const NoteCard = styled.div`
  border-radius: 0.25rem;
  padding: 1rem;
  width: 250px;
  border: 1px solid #151515;
  color: #151515;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  transition: ease 0.4s border, color;
  @media screen and (max-width: 991.98px) {
    &:active {
      border: 1px solid var(--purple-100);
      color: var(--purple-100);
    }
  }
  @media screen and (min-width: 991.99px) {
    &:hover {
      border: 1px solid var(--purple-100);
      color: var(--purple-100);
    }
  }

  @media screen and (max-width: 570px) {
    width: 100%;
  }
`;

export const NoteCardInfo = styled.div``;

export const NoteCardTitle = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
`;

export const NoteCardDescription = styled.p`
  font-size: 1.1rem;
`;

export const NoteCardDate = styled.p`
  font-size: 0.9rem;
`;

export const ButtonSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1.2rem;
`;

export const DeleteButton = styled.button`
  width: 100%;
  border: 0;
  padding: 0.5rem;
  border-radius: 0.25rem;
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  background-color: #ff4d4d;

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
    padding: 0.8rem;
  }
`;
export const AccessButton = styled.button`
  width: 100%;
  border: 0;
  padding: 0.5rem;
  border-radius: 0.25rem;
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  background-color: var(--purple-100);

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
    padding: 0.8rem;
  }
`;
