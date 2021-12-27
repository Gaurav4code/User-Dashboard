import styled from "styled-components";
import { Infos } from "./Infos/Infos";

import Nav from "./Nav";

const Container = styled.div`
  border: solid 3px yellow;
  width: 1000px;
`;

export const Main = () => {
  return (
    <Container>
      <Nav />
      <Infos />
    </Container>
  );
};
