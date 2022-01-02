import styled from "styled-components";
import { Infos } from "./Infos/Infos";
import { Recent } from "./Recents/Recent";
import { SearchBar } from "./Search/Searchbar";

export const Main = () => {
  return (
    <Container>
      <SearchBar />
      <Infos />
      <Recent />
    </Container>
  );
};
const Container = styled.div``;
