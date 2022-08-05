import styled from "styled-components";

export const Container = styled.div`
  .Container {
  }
`;

export const Presentation = styled.div`
  background-color: var(--purple-100);
  padding: 3rem 0;

  .Container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
  &:hover {
    opacity: 0.85;
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
  display: flex;
  gap: 20px;
`;

export const NoteCard = styled.div`
  border-radius: 0.25rem;
  padding: 1rem;
  width: 250px;
  border: 1px solid #000;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  transition: ease 0.4s border;
  &:hover {
    border: 1px solid var(--purple-100);
    color: var(--purple-100);
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
  &:hover {
    opacity: 0.7;
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
  &:hover {
    opacity: 0.7;
  }
`;
