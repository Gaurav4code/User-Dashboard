import styled from "styled-components";
import vector from "../Sidebar/Vector.png";
const Container = styled.div`
  width: 140px;
  height: 64px;
  margin-left: 46px;
  margin-top: 81px;
  border: solid red 2px;
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  align-items: center;
  display: flex;
  justify-content: center;
`;
const Icon = styled.img`
  height: 25px;
  width: 25px;
  padding-top: 10px;
  margin-right: 10px;
`;
const Text = styled.h1`
  font-family: DM Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
`;
const Box = styled.div`
  display: flex;
`;
export const Newpost = () => {
  return (
    <Container>
      <Box>
        <Icon img src={vector} />

        <Text>
          Create <br />
          new post
        </Text>
      </Box>
    </Container>
  );
};
