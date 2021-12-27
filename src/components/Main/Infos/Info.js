import styled from "styled-components";
import img1 from "./Union1.png";
import img2 from "./Union2.png";
import img3 from "./Union3.png";
const ContainerBlue = styled.div`
  height: 15rem;
  width: 12rem;
  margin-right: 60px;
  margin-top: 13px;
  border-radius: 20px;
  background: rgba(73, 142, 247, 0.1);
`;
const ContainerRed = styled.div`
  height: 15rem;
  width: 12rem;
  margin-right: 60px;
  margin-top: 13px;
  border-radius: 20px;
  background: #fff6f6;
`;
const ContainerGreen = styled.div`
  height: 15rem;
  width: 12rem;
  margin-right: 60px;
  margin-top: 13px;
  border-radius: 20px;
  background: #eefdf3;
`;
const Icon = styled.img`
  padding: 50px 60px;
`;
const Text = styled.h1`
  font-family: DM Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
`;
const SubText = styled.h3`
  font-family: DM Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: #8e8e8e;
`;
export const BlueCard = (props) => {
  return (
    <ContainerBlue>
      <Icon src={img1} />
      <Text>Reports</Text>
      <SubText>5 Pending</SubText>
    </ContainerBlue>
  );
};

export const GreenCard = (props) => {
  return (
    <ContainerGreen>
      <Icon src={img2} />
      <Text>My Posts</Text>
      <SubText>8 new likes</SubText>
    </ContainerGreen>
  );
};

export const RedCard = (props) => {
  return (
    <ContainerRed>
      <Icon src={img3} />
      <Text>Find Patients</Text>
      <SubText>1859 members</SubText>
    </ContainerRed>
  );
};
