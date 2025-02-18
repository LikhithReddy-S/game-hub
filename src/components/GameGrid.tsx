import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: String;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <p>{error}</p>}
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
