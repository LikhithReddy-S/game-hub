import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

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
          Aside
        </GridItem>
      </Show>
      <GridItem area={"menu"}>
        Menu
      </GridItem>
    </Grid>
  );
}

export default App;
