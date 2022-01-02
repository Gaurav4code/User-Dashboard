import styled from "styled-components";
import bell from "../RightSidebar/bell.svg";
import pic from "../RightSidebar/Profile3.png";
import chevron from "../RightSidebar/chevron-right.svg";
import book from "../RightSidebar/book.svg";
export const Profile = () => {
  return (
    <ProfileContainer>
      <Wrapper>
        <ProfileImg src={pic} />

        <ProfileData>
          <Designation>Cardiologist</Designation>
          <Name>Yaksh</Name>
        </ProfileData>
      </Wrapper>
      <img src={chevron} />
    </ProfileContainer>
  );
};
export const Case = () => {
  return (
    <ManuscriptContainer>
      <Wrapper>
        <Icon src={book} />

        <ProfileData>
          <Problem> Heart Attacks</Problem>
          <Name>Yaksh</Name>
        </ProfileData>
      </Wrapper>
      <img src={chevron} />
    </ManuscriptContainer>
  );
};
export const RightSidebar = () => {
  return (
    <Container>
      <Bell src={bell} />
      <Trending>
        <Heading>Trending Posts</Heading>
        <Latest>
          <Profile />
          <Profile />
          <Profile />
        </Latest>
      </Trending>
      <Manuscript>
        <Heading>Manuscripts</Heading>
        <LatestCase>
          <Case />
          <Case />
        </LatestCase>
      </Manuscript>
    </Container>
  );
};

const Container = styled.div`
  height: 700px;
  width: 322px;
  left: 830px;
  top: 0px;
  border-radius: 0px;
`;
const Icon = styled.img`
  height: 30px;
  margin-right: 10px;
  margin-top: 4px;
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
const Trending = styled.div`
  margin-top: 38px;
  margin-left: 33px;
`;
const Heading = styled(Text)``;
const Latest = styled.div`
  margin-top: 30px;
`;
const Manuscript = styled.div`
  margin-top: 38px;
  margin-left: 33px;
`;

const Bell = styled.img`
  margin-top: 30px;
  margin-left: 230px;
`;
const ProfileContainer = styled.div`
  display: flex;

  margin-top: 30px;
  justify-content: space-between;

  height: 42px;
  width: 243.22579956054688px;
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

  display: flex;
`;
const Wrapper = styled.div`
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
const ManuscriptContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
const LatestCase = styled.div`
  margin-top: 100px;
`;
const Problem = styled(TextProfile)`
  font-family: DM Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: black;
`;
