import { COLORS } from "@/styles/colors";
import { ChangeEvent } from "react";
import styled from "styled-components";

interface ICProps {
  placeholder: string;
  input: string;
  setInput: (string: string) => void;
}

const InputComponent = ({ placeholder, input, setInput }: ICProps) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <Input
      placeholder={placeholder}
      value={input}
      onChange={(e) => handleOnChange(e)}
    />
  );
};

const Input = styled.input`
  width: 100%;
  color: ${COLORS.black};
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.lightGray};
  border-radius: 0.8rem;
  padding: 1rem;
  font-size: 1.4rem;
  min-height: 8rem;
`;

export default InputComponent;
