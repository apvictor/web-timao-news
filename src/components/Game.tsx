import { Calendar, SoccerBall, X } from "@phosphor-icons/react";

interface Props {
  game: any
}
export function Game({ game }: Props) {

  return (
    <div className="m-4 py-3 flex flex-col items-center border-solid border-2 border-white rounded-xl">

      <div className="flex gap-x-2 items-center">
        <SoccerBall size={18} className="text-white mb-[-3px]" />
        <p className="text-white text-sm">
          {game.campeonato_id.nome_comum} • {game.temporada}
        </p>
      </div>

      <p className="text-white text-sm">
        {game.estadio} • {game.local}
      </p>

      <div className="w-full py-3 gap-6 flex flex-row justify-center items-center">

        <div className="flex flex-col items-center">
          <img src={game.time1.brasao} alt={game.time1.nome} />
          <p className="text-white text-sm">{game.time1.sigla}</p>
        </div>

        <p className="text-white text-3xl font-bold">{game.placar1}</p>
        <X size={24} className="text-white" />
        <p className="text-white text-3xl font-bold">{game.placar2}</p>

        <div className="flex flex-col items-center">
          <img src={game.time2.brasao} alt={game.time2.nome} />
          <p className="text-white text-sm">{game.time2.sigla}</p>
        </div>

      </div>


      {
        game.campeonato_id.id == 30
          ?
          <div className="flex gap-x-2 items-center">
            <Calendar size={18} className="text-white mb-[-3px]" />
            <p className="text-white text-sm">Rodada {game.id} • {game.data} • {game.horario}</p>
          </div>
          :
          <div className="flex gap-x-2 items-center">
            <Calendar size={18} className="text-white mb-[-3px]" />
            <p className="text-white text-sm">{game.nome} • {game.data} • {game.horario}</p>
          </div>
      }


    </div>
  )
}
