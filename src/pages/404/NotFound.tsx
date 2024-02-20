import styled from "styled-components";

const NotFound = () => {
  return <CenterBox>잘못된 요청입니다.</CenterBox>;
};

const CenterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

export default NotFound;
