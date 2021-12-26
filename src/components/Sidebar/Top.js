import styled from "styled-components";

import Logo from "../Sidebar/Union.png";
const Container = styled.div`
  display: flex;
  margin-left: 46px;
  margin-top: 35px;
`;
const Text = styled.h1`
  font-family: Muli;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
`;
const Icon = styled.img`
  height: 35px;
  width: 22px;
  margin-top: 10px;
  margin-right: 10px;
`;
export const Top = () => {
  return (
    <Container>
      <Icon src={Logo} />
      <Text>Phsyc</Text>
    </Container>
  );
};
