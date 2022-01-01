import { Sidebar } from "../components/Sidebar/Sidebar";
import { Main } from "../components/Main/Main";
import { Infos } from "../components/Main/Infos/Infos";
import { RightSidebar } from "../components/RightSidebar/RightSidebar";
import styled from "styled-components";
export const Dashboard = () => {
  return (
    <Dash>
      <Sidebar />
      <Main />
      <RightSidebar />
    </Dash>
  );
};

const Dash = styled.div`
  display: flex;
`;
