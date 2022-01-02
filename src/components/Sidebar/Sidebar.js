import styled from "styled-components";
import { Top } from "./Logo/Top";
import { Menu } from "./Menu/Menu";
import { Profile } from "./Profile/Profile";
import { Newpost } from "./Newpost/Newpost";

const Container = styled.div`
  width: 290px;
  height: 700px;
  margin-left: 0px;
  margin-top: 0px;

  background: #0b1539;
`;
export const Sidebar = () => {
  return (
    <Container>
      <Top />
      <Newpost />
      <Menu />
      <Profile />
    </Container>
  );
};
