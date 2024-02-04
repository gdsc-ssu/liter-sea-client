import styled from "styled-components";

interface ICProps {
  placeholder: string;
}

const InputComponent = ({ placeholder }: ICProps) => {
  return <Input placeholder={placeholder} />;
};

const Input = styled.input`
  width: 100%;
`;

export default InputComponent;
