import styled from "styled-components";
import {
	Chart as ChartJS,
	LinearScale,
	CategoryScale,
	BarElement,
	PointElement,
	LineElement,
	Legend,
	Tooltip,
	LineController,
	BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import FlexContainer from "../common/flex-container";
import { COLORS } from "@/styles/colors";

ChartJS.register(
	LinearScale,
	CategoryScale,
	BarElement,
	PointElement,
	LineElement,
	Legend,
	Tooltip,
	LineController,
	BarController
);

const USER_DATA = {
	주제: [9, 4, 8, 9, 10],
	문법: [2, 5, 5, 9, 5],
	어휘: [5, 5, 9, 9, 9],
};

const today = new Date();
const month = today.getMonth() + 1;
const day = today.getDate();
const yesterday = today.valueOf() - 24;

const data = {
	labels: ["D+4", "D+3", "D+2", "D+1", `${month}/${day}`],
	datasets: [
		{
			type: "line" as const,
			label: "주제",
			borderColor: "rgb(255, 194, 246)",
			borderWidth: 2,
			data: USER_DATA.주제,
		},
		{
			type: "line" as const,
			label: "문법",
			borderColor: "rgb(108, 211, 255)",
			borderWidth: 2,
			data: USER_DATA.문법,
		},
		{
			type: "line" as const,
			label: "어휘",
			borderColor: "rgb(79, 161, 255)",
			borderWidth: 2,
			data: USER_DATA.어휘,
		},
	],
};

const Report = () => {
	return (
		<ReportContainer direction="column" padding={1.5} fullWidth>
			<ReportTitle>최근 5일 항해 일지</ReportTitle>
			<Chart type="line" data={data} />
		</ReportContainer>
	);
};

export default Report;

const ReportContainer = styled(FlexContainer)`
	color: ${COLORS.black};
	border: solid ${COLORS.lightGray};
	border-radius: 0.8rem;
`;

const ReportTitle = styled.span`
	color: ${COLORS.black};
	text-align: center;
`;
