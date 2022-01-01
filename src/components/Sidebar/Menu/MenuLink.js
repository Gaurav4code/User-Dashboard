import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border-left: 3px solid
    ${(props) => (props.active ? props.theme.activeMenu : "transparent")};
  width: 100%;
  padding: 0.3rem;
  padding-left: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
  transition: 0.2s all ease-in-out;
`;

const Span = styled.div`
  font-size: 1rem;
  color: ${(props) => !props.active && props.theme.textColor};
  margin-right: 1rem;
`;

const Title = styled.h1`
  color: ${(props) => (props.active ? "#ffffff" : "#5163C8")};
  font-family: DM Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
   /* color: ${(props) =>
     props.active ? props.theme.activeMenu : "#5163C8"}; */
`;

/* color: ${(props) => (props.active ? props.theme.activeMenu : "#5163C8")}; */

const Icon = styled.img`
  margin-right: 15px;
  color: ${(props) => (props.active ? "#5163C8" : "#ffffff")};
`;
const MenuLink = ({ title, active, icon }) => {
  return (
    <Container active={active}>
      <Icon src={icon} active={active} />
      <Title active={active}> {title}</Title>
    </Container>
  );
};
export default MenuLink;
