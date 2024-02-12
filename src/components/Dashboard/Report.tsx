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
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      data: USER_DATA.주제,
    },
    {
      type: "line" as const,
      label: "문법",
      borderColor: "rgb(99, 255, 146)",
      borderWidth: 2,
      data: USER_DATA.문법,
    },
    {
      type: "line" as const,
      label: "어휘",
      borderColor: "rgb(135, 99, 255)",
      borderWidth: 2,
      data: USER_DATA.어휘,
    },
  ],
};

const Report = () => {
  return (
    <>
      <ReportTitle>최근 5일 항해 일지</ReportTitle>
      <ReportContainer>
        <Chart type="line" data={data} />
      </ReportContainer>
    </>
  );
};

export default Report;

const ReportContainer = styled.div`
  color: black;
  width: 420px;
  height: 120px;
  border: solid #a6ddfc;
  border-radius: 15px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ReportTitle = styled.div`
  color: black;
  text-align: center;
`;
