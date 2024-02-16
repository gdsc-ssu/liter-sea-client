import { COLORS } from "@/styles/colors";
import FlexContainer from "../common/flex-container";

interface ProblemProps {
	title: string;
	children: React.ReactNode;
}

const Problem = ({ title, children }: ProblemProps) => {
	return (
		<FlexContainer
			padding={1.5}
			direction="column"
			alignItems="stretch"
			style={{
				backgroundColor: `${COLORS.boxBg}`,
				height: "70vh",
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
