import styled from "styled-components";
import { COLORS } from "@/styles/colors";

interface PSProps {
  number: number;
  title: string;
  percent: number;
}

const PercentState = ({ number, title, percent }: PSProps) => {
  return (
    <PointComponent>
      <NumberBox>{number}</NumberBox>
      <InfoBox>
        <InfoTitle>{title}</InfoTitle>
        <PercentBox>
          <PercentBar>{percent}</PercentBar>
        </PercentBox>
      </InfoBox>
    </PointComponent>
  );
};

const PointComponent = styled.div`
  display: flex;
  margin: 1rem;
`;

const NumberBox = styled.div`
  background-color: ${COLORS.primary};
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoBox = styled.div`
  margin-left: 1rem;
`;

const InfoTitle = styled.div``;

const PercentBox = styled.div`
  margin-top: 0.5rem;
`;
const PercentBar = styled.div`
  background-color: ${COLORS.ligthGray};
  width: 15rem;
  height: 1rem;
`;

export default PercentState;
