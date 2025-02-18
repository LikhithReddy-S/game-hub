import { Grid, GridItem, Show } from "@chakra-ui/react";
import { aside, nav } from "framer-motion/client";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "menu"`,
        lg: `"nav nav" "aside menu"`,
      }}
    >
      <GridItem area={"nav"} bg={"orange"}>
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg={"green"}>
          Aside
        </GridItem>
      </Show>
      <GridItem area={"menu"} bg={"blue"}>
        Menu
      </GridItem>
    </Grid>
  );
}

export default App;
