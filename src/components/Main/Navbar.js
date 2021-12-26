import styled from "styled-components";
import Input from "./Input";
import search from "../Main/Search.png";
const Container = styled.div`
  width: 500px;
  border: solid red 1px;
  display: flex;
`;
const StyledInput = styled.input`
  width: 80%;
  font-family: DM sans;
  font-size: 16px;
  max-width: 650px;
  font-weight: 400;
  min-width: 250px;
  height: 40px;
  border: none;
  margin: 0.5rem 0;
  color: yellow;

  box-shadow: 0px 14px 10px -15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0 1rem;
  transition: all 0.2 ease-in;
  &:hover {
    transform: translateY(-3px);
  }
  width: 500px;
  placeholder {
    color: red;
  }
`;
const Icon = styled.img`
  height: 20px;
  width: 20px;
  margin: 20px 120px;
`;
export const Navbar = () => {
  return (
    <Container>
      <StyledInput type="text " placeholder="Search" />
      <Icon src={search} />
    </Container>
  );
};
