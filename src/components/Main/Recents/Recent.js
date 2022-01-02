import styled from "styled-components";

import pic from "../Recents/Profile2.png";
import chevron from "../Recents/chevron-right.svg";
import clock from "../Recents/Clock.svg";
export const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileImg src={pic} />

      <ProfileData>
        <Designation>Cardiologist</Designation>
        <Name>Yaksh</Name>
      </ProfileData>
    </ProfileContainer>
  );
};

export const Recent = () => {
  return (
    <Container>
      <Heading>Recent Treatments</Heading>
      <RecentMeet>
        <Profile />
        <Time>
          <img src={clock} />
          <Hours> 2 hrs</Hours>
        </Time>

        <img src={chevron} />
      </RecentMeet>
      <RecentMeet>
        <Profile />

        <Time>
          <img src={clock} />
          <Hours> 2 hrs</Hours>
        </Time>

        <img src={chevron} />
      </RecentMeet>
      <RecentMeet>
        <Profile />

        <Time>
          <img src={clock} />
          <Hours> 2 hrs</Hours>
        </Time>

        <img src={chevron} />
      </RecentMeet>
    </Container>
  );
};
const Container = styled.div`
  height: 42px;
  width: 504.2257995605469px;
  left: 287px;
  top: 418px;
  margin-left: 50px;
  border-radius: 0px;
`;
const Text = styled.h1`
  height: 26px;

  font-family: DM Sans;
  font-weight: 500;
  text-align: left;
`;
const Heading = styled(Text)`
  color: red;
  font-size: 20px;
  font-style: normal;

  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
`;
const RecentMeet = styled.div`
  height: 42px;
  width: 504.2257995605469px;
  left: 287px;
  margin-top: 35px;
  border-radius: 0px;
  display: flex;

  justify-content: space-between;
  border: solid red 1px;
`;
const Time = styled(Text)`
  font-family: DM Sans;
  font-size: 15px;
  font-style: normal;
  display: flex;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  img {
    h
    width: 15px;
 
    border-radius: 0px;
  }
`;
const Icon = styled.img``;
const Hours = styled.h5`
  margin-top: 0px;
  color: #c4c4c4;
  margin-left: 4px;
`;
const ProfileContainer = styled.div`
  display: flex;
  display: grid;
  width: 134px;
  grid-template-columns: repeat(2, 1fr);
  border: solid red 1px;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 13px;
`;

const ProfileData = styled.div`
  display: flex;
  flex-direction: column;

  color: white;
  border: solid 1px yellow;
  display: flex;
`;
const TextProfile = styled.div`
  color: black;
`;
const Name = styled(TextProfile)`
  font-family: DM Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #c4c4c4;
`;

const Designation = styled(TextProfile)`
  font-family: DM Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
`;
