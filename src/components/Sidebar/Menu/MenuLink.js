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

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Span = styled.div`
  font-size: 1rem;
  /* color: ${(props) => !props.active && props.theme.textColor}; */
  margin-right: 1rem;

`;

const Title = styled.h1`
  color: ${(props) => (props.active ? props.theme.activeMenu : "#5163C8")};
  font-family: DM Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
`;

const MenuLink = ({ title, active, icon }) => {
  return (
    <Container active={active}>
      <Span
        active={active}
        className="iconify"
        data-inline="false"
        data-icon={"mdi-light:${icon}"}
      ></Span>
      <Title active={active}> {title}</Title>
    </Container>
  );
};
export default MenuLink;
