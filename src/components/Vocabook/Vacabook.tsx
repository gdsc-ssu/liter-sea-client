import styled from "styled-components";

interface VacabookProps {
  title: string;
  id: string;
  onClickVocabook: () => void;
}

const Vocabook = ({ title, id, onClickVocabook }: VacabookProps) => {
  return (
    <>
      <Container onClick={onClickVocabook} id={id}>
        <BookTitle>{title}</BookTitle>
      </Container>
    </>
  );
};

const Container = styled.div`
  background-color: #e1f6ff;
  width: 400px;
  height: 64px;
  margin-bottom: 36px;
  border-radius: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const BookTitle = styled.div`
  color: #000000;
  padding-left: 30px;
`;
export default Vocabook;
