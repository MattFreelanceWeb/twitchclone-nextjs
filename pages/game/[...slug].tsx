import { getGamesFrom } from "@/utils/axios/fetchUrl";
import IonIcon from "@reacticons/ionicons";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {};

function GameFrom({}: Props) {
  const [finalArray, setFinalArray] = useState<[]>();
  const [numberViewer, setNumberViewer] = useState<number>(0);

  const router = useRouter();
  let slugArray: string | string[] | undefined = router.query.slug;

  const games = getGamesFrom(slugArray && slugArray[1]).getGamesFrom;

  console.log(finalArray);

  useEffect(() => {
    if (games.apiData) {
      let dataObject: any = games.apiData;
      let dataArray = dataObject.data;

      let finalArray = dataArray.map((game: any) => {
        let newUrl = game.thumbnail_url
          .replace("{width}", "320")
          .replace("{height}", "180");
        game.thumbnail_url = newUrl;

        return game;
      });

      setFinalArray(finalArray);

      let totalViewers: number = finalArray.reduce((acc: number, val: any) => {
        return acc + val.viewer_count;
      }, 0);

      setNumberViewer(totalViewers);
    }
  }, [games.apiData]);

  return (
    <main className="text-black w-hull h-screen flex  flex-col items-center justify-start pt-20">
      <h2> Streamer playing : {slugArray && slugArray[0]} </h2>
      <p> viewers: {numberViewer} </p>
      <ul className="flex flex-wrap items-center justify-center gap-4">
        {finalArray?.map((item:any, i) => (
          <li onClick={()=>{router.push(`/live/${item.user_login}`)}} key={i} className='w-80  border-2  flex flex-col items-center justify-start cursor-pointer shadow-xl'>
            <div className="relative bg-gray-400 h-4/6 w-full grid place-items-center">
             {/* <span className="text-4xl"><IonIcon name='image' size='large'/></span>  */}
             <Image src={item.thumbnail_url} alt={''} width={320} height={180}/>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 py-2">
              <h3 className="text-xl font-bold">{item.user_name}</h3>
              <ul className="flex flex-wrap p-1 gap-1 h-12 overflow-hidden">
               {item.tags.map((item:any,i)=>( <li key={i} className='border-2 p-2 rounded-full'>{item}</li> ))}
              </ul>
              <button className="text-xl bg-[#6441A5] text-white py-2 px-12 rounded-md">Regarder</button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default GameFrom;
