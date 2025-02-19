import useGames from "../hooks/useGames";
import { Text } from "@chakra-ui/react";


function GameGrid() {
  const { games,error} = useGames()
  return (
    <>
      {error && <Text>{error}</Text>}
      <ol>
      <div>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </div>
      </ol>
    </>
  );
}

export default GameGrid;
