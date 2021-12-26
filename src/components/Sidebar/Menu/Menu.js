import styled from "styled-components";
import dash from "../Menu/dash.png";
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
      <MenuLink title="Community" icon={dash} />
      <MenuLink title="SignOut" icon={dash} />
    </Container>
  );
};
