import styled from "styled-components";
import pic from "../Profile/Profile.png";

export const Profile = () => {
  return (
    <Container>
      <ProfileImg src={pic} />

      <ProfileData>
        <Name>Yaksh</Name>
        <Designation>Cardiologist</Designation>
      </ProfileData>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  display: grid;
  width: 30%;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 148px;
  margin-left: 35px;
`;
const Text = styled.h1`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
  margin: 0;
`;
const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 20px;
`;

const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 8px;
  color: white;
`;
const Name = styled(Text)`
  vertical-align: top;
  border: solid red 1px;
  font-family: DM Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;

  text-align: left;
`;

const Designation = styled(Text)`
  vertical-align: top;
  font-family: DM Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  border: solid red 1px;
  letter-spacing: 0em;
  text-align: left;
`;
