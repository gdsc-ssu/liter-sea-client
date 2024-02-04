import styled from "styled-components";
import { COLORS } from "@/styles/colors";

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CenterTitle = styled.div`
  margin-top: 3rem;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const LeftBox = styled.div`
  width: 27rem;
  border: 1px solid ${COLORS.ligthGray};
  border-radius: 10px;
`;

export const RightBox = styled.div`
  margin-left: 5rem;
  width: 27rem;
`;

export const ComponentBox = styled.div``;

export const DescriptionBox = styled.div``;

export const DescTitle = styled.div`
  margin-top: 3rem;
`;

export const DescInfo = styled.div`
  background-color: ${COLORS.ligthGray};
  border-radius: 10px;
  padding: 1rem;
`;

export const ButtonBox = styled.div`
  margin-top: 7rem;
  width: 18rem;
`;
