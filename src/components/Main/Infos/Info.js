import styled from "styled-components";
import img1 from "./Union1.png";
import img2 from "./Union2.png";
import img3 from "./Union3.png";

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
const ContainerBlue = styled.div`
  height: 157px;
  width: 141px;
  left: 287px;
  top: 163px;
  border-radius: 20px;
  margin-right: 35px;
  background: rgba(73, 142, 247, 0.1);
`;
const ContainerRed = styled.div`
  height: 157px;
  width: 141px;
  left: 287px;
  top: 163px;
  margin-right: 35px;
  border-radius: 20px;
  background: #fff6f6;
`;
const ContainerGreen = styled.div`
  height: 157px;
  width: 141px;
  left: 287px;
  top: 163px;
  border-radius: 20px;
  margin-right: 35px;
  background: #eefdf3;
`;
const Icon = styled.img`
  padding-top: 29px;
  padding-right: 49px;
  padding-left: 49px;
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
