import styled from "styled-components";
import { Infos } from "./Infos/Infos";
import { Recent } from "./Recents/Recent";
import Nav from "./Nav";

const Container = styled.div`
  border: solid 3px yellow;
`;

export const Main = () => {
  return (
    <Container>
      <Nav />
      <Infos />
      <Recent />
    </Container>
  );
};
