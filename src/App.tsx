import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "menu"`,
        lg: `"nav nav" "aside menu"`,
      }}
    >
      <GridItem area={"nav"}>
        <Navbar />
        
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"menu"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
