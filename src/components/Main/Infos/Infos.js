import styled from "styled-components";
import { BlueCard, RedCard, GreenCard } from "./Info";

const Container = styled.div`
  margin-left: 2.5rem;
  margin-top: -60px;
`;

const Text = styled.h1`
  font-family: DM Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
`;
const Info = styled(Text)`
  width: 35px;
  margin-right: 40px;
  border-bottom: 5px solid #5163c8;
`;
const Profile = styled(Text)`
  width: 35px;
`;
const Explore = styled(Text)`
  margin-left: 50px;
`;
const Cards = styled.div`
  border: solid red 2px;
  display: flex;
`;
const Options = styled.div`
  display: flex;
`;
export const Infos = () => {
  return (
    <Container>
      <Options>
        <Info>Info</Info>

        <Profile>Profile</Profile>
        <Explore>Explore</Explore>
      </Options>
      <Cards>
        <BlueCard />
        <GreenCard />
        <RedCard />
      </Cards>
    </Container>
  );
};
