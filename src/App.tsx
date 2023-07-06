import { useEffect, useState } from "react";

import api from "./services/api";

import { Game } from "./components/Game";
import { Header } from "./components/Header";

export function App() {

  const [games, setGames] = useState([]);

  const dataAtual = new Date();
  const temporada = dataAtual.getFullYear();


  async function getRodadas() {
    await api
      .get(`/rodadas?campeonato=0&temporada=${temporada}&equipe=6&proximos_jogos=0`)
      .then((response: any) => {
        console.log(response.data);

        setGames(response.data);
      })
      .catch((err: any) => {
        console.error("ops! ocorreu um erro: " + err);
      }).finally(() => {
      });
  }

  useEffect(() => {
    getRodadas();
  }, []);

  return (
    <div className="h-full container m-auto bg-black py-4">

      <Header />

      <div className="mt-20">
        {games.map((game, i) => <Game key={i} game={game} />)}
      </div>



    </div>
  )
}
