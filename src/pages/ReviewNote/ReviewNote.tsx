import styled from "styled-components";
import ReviewList, * as RLstyled from "@/components/List/ReviewList";
import { COLORS } from "@/styles/colors";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const ReviewNote = () => {
	const today = new Date();
	const [selectDate, setSelectDate] = useState<Date>(today);
	return (
		<Container>
			<TitleBox>복습 노트</TitleBox>
			<DateBox>
				<StyledDatePicker
					dateFormat="yyyy.MM.dd"
					selected={selectDate}
					closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
					onChange={(date: Date) => setSelectDate(date)}
				/>
			</DateBox>
			<ListBox>
				<ListTitle>
					<RLstyled.NumberBox>번호</RLstyled.NumberBox>
					<RLstyled.TitleBox style={{ justifyContent: "center" }}>
						제목
					</RLstyled.TitleBox>
					<RLstyled.ScoreBox>점수</RLstyled.ScoreBox>
					<RLstyled.ArrowBox />
				</ListTitle>
				<ReviewList number={1} title="sdf" score={12} />
				<ReviewList number={1} title="sdf" score={12} />
				<ReviewList number={1} title="sdf" score={12} />
			</ListBox>
		</Container>
	);
};

const Container = styled.div`
	padding: 5rem;
`;

const TitleBox = styled.div``;

const DateBox = styled.div`
	margin-top: 1rem;
`;

const ListBox = styled.div`
	margin-top: 1rem;
	border: 1px solid ${COLORS.primary};
	border-radius: 0.8rem;
	padding: 1rem;
`;

const ListTitle = styled.div`
	display: flex;
	height: 5rem;
	align-items: center;
	border-bottom: 1px solid ${COLORS.primary};
`;

const StyledDatePicker = styled(DatePicker)`
	border: none;
	font-weight: 400;
	padding: 20px;
	background-color: transparent;
	color: ${COLORS.middleGray};
`;

export default ReviewNote;
