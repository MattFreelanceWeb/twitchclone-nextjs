import UseFetchGet from "@/utils/customHook/UseFetchGet";
import Image from "next/image";
import React, { useState, useEffect } from "react";

type Props = {};

function Games({}: Props) {
  const [games, setGames] = useState<any[]>([]);


  const url: string = "https://api.twitch.tv/helix/games/top";
  const getTopGames: any = UseFetchGet({ url });


    useEffect(() => {
      if (getTopGames.apiData) {
        let dataArray: any[] = getTopGames.apiData.data;

        let finalArray = dataArray.map((game) => {
          let newUrl = game.box_art_url
            .replace("{width}", "250")
            .replace("{height}", "300");
          game.box_art_url = newUrl;

          return game;
        });

        setGames(finalArray);
      }
    }, [getTopGames.apiData]);

  return (
    <div className="   pt-20 flex flex-col items-center justify-center z-10" > {/*pl-60*/ }
      <h1 className="text-6xl pb-10 text-center">Jeux les plus populaires</h1>
      <div className="flex flex-wrap items-center justify-center gap-4 ">
        {games.map((game, i) => (
          <div key={i} className='shadow-2xl max-w-[250px] h-[460px]  flex flex-col items-center cursor-pointer duration-500 hover:-translate-y-2 relative z-0 rounded-md' >
            <div className="bg-[#19171c] rounded-t-md" onClick={(()=>{console.log('hello')})}>
            <Image placeholder='blur' blurDataURL={game.box_art_url} src={game.box_art_url} alt={`image du jeu ${game.name}`} width={'250'} height={'300'} className='object-cover rounded-t-md hover:translate-x-2 hover:-translate-y-2 duration-100'/>
            </div>

            <div className="flex flex-col justify-center items-center gap-4">
                <h5 className="h-[72px] flex items-center justify-center text-2xl p-2 text-center font-semibold">{game.name}</h5>
                <div className="bg-[#6441a4] my-2 px-12 py-2 rounded-lg z-10 text-white" >
                    regarder
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Games;