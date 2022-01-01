import styled from "styled-components";
import dash from "../Menu/Sqaure.svg";
import users from "../Menu/Combined-Shape.svg";
import logout from "../Menu/Logout.svg";
import React from "react";

import MenuLink from "../Menu/MenuLink";
const Container = styled.div`
  border: solid red 2px;
  width: 100%;
  margin-top: 40px;
`;
export const Menu = () => {
  return (
    <Container>
      <MenuLink title="Dashboard" icon={dash} />
      <MenuLink title="Community" icon={users} active />
      <MenuLink title="SignOut" icon={logout} active />
    </Container>
  );
};
