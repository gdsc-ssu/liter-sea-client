import { COLORS } from "@/styles/colors";
import FlexContainer from "../common/flex-container";

interface ProblemProps {
  title: string;
  children: React.ReactNode;
  height?: string;
}

const Problem = ({ title, children, height = "70vh" }: ProblemProps) => {
  return (
    <FlexContainer
      padding={1.5}
      direction="column"
      alignItems="stretch"
      style={{
        backgroundColor: `${COLORS.boxBg}`,
        height: `${height}`,
      }}
    >
      <div style={{ fontWeight: 600 }}>{title}</div>
      <FlexContainer direction="column" gap={1}>
        {children}
      </FlexContainer>
    </FlexContainer>
  );
};

export default Problem;
