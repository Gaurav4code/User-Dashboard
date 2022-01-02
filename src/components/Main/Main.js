import styled from "styled-components";
import { Infos } from "./Infos/Infos";
import { Recent } from "./Recents/Recent";
import { SearchBar } from "./Search/Searchbar";

const Container = styled.div`
  border: solid 3px yellow;
`;

export const Main = () => {
  return (
    <Container>
      <SearchBar />
      <Infos />
      <Recent />
    </Container>
  );
};
