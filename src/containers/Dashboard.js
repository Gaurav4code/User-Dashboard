import { Sidebar } from "../components/Sidebar/Sidebar";
import { Main } from "../components/Main/Main";
import { Infos } from "../components/Main/Infos/Infos";
import styled from "styled-components";
export const Dashboard = () => {
  return (
    <Dash>
      <Sidebar />
      <Main />
    </Dash>
  );
};

const Dash = styled.div`
  display: flex;
`;
