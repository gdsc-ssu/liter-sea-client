import styled from "styled-components";
import { COLORS } from "@/styles/colors";
import FlexContainer from "../common/flex-container";

interface PSProps {
  number: number;
  title: string;
  percent?: number;
}

const PercentState = ({ number, title, percent }: PSProps) => {
  return (
    <FlexContainer
      style={{
        background: `${COLORS.white}`,
        border: `1px solid ${COLORS.lightGray}`,
      }}
      alignItems="center"
      padding={1.5}
    >
      <NumberBox>{number}</NumberBox>
      <FlexContainer direction="column" alignItems="stretch" fullWidth>
        <FlexContainer justifyContent="space-between">
          <div style={{ fontWeight: 600 }}>{title}</div>
          <span> {percent}</span>
        </FlexContainer>
        <PercentBox>
          {percent && (
            <PercentBar>
              <PercentBlueBar style={{ width: `${percent / 4.37}rem` }} />
            </PercentBar>
          )}
        </PercentBox>
      </FlexContainer>
    </FlexContainer>
  );
};

const NumberBox = styled(FlexContainer)`
  justify-content: center;
  align-self: center;

  width: 3rem;
  height: 2.6rem;
  border-radius: 100%;
  font-size: 1.4rem;
  font-weight: 600;

  background-color: ${COLORS.lightGray};
  color: ${COLORS.middleGray};
`;

const PercentBox = styled.div``;

const PercentBar = styled.div`
  background-color: ${COLORS.lightGray};

  height: 0.8rem;
  border-radius: 0.8rem;
`;

const PercentBlueBar = styled.div`
  background-color: ${COLORS.primary};
  height: 0.8rem;
  border-radius: 0.8rem;
`;

export default PercentState;
