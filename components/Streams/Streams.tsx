import { getTopStreams, getTopUsers } from "@/utils/axios/fetchUrl";
import Image from "next/image";
import React, { useState, useEffect } from "react";

type Props = {};

function Streams({}: Props) {
  const [channels, setChannels] = useState<any[]>([]);
  const [idUrl, setIdUrl] = useState("");

  const topStreams = getTopStreams();
  const dataStreams: any = topStreams.getTopStreams.apiData;

  const topUsers = getTopUsers(idUrl);
  const dataUsers: any = topUsers.getTopUsers.apiData;

  console.log(channels);

  useEffect(() => {
    if (dataStreams) {
      let data: any[] = dataStreams.data;
      let userId: any[] = data.map((user) => {
        return user.user_id;
      });

      let idUrl: any = "";

      userId.map((id) => {
        return setIdUrl((idUrl = idUrl + `id=${id}&`));
      });
    }
    if (dataStreams && dataUsers) {
      let dataStream: any[] = dataStreams.data;
      let dataUser: any[] = dataUsers.data;

      let finalArray: any[] = dataStream.map((stream) => {
        stream.profilePic = "";
        dataUser.forEach((user) => {
          if (stream.user_id === user.id) {
            stream.profilePic = user.profile_image_url;
          }
        });

        let newUrl = stream.thumbnail_url
          .replace("{width}", "320")
          .replace("{height}", "180");
        stream.thumbnail_url = newUrl;

        return stream;
      });
      setChannels(finalArray);
    }
  }, [dataStreams, dataUsers]);

  return (
    <div className="pt-20 flex flex-col items-center justify-center z-10">
      <h1 className="text-6xl pb-10 text-center">
        Streams les plus populaires
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4 py-12 px-4">
        {channels.map((channel, i) => (
          <div key={i} className='bg-[#19171c]'>
            <div
              onClick={() => {
                console.log("hello");
              }}
              className="shadow-2xl w-[320px] h-72 flex flex-col items-center justify-center cursor-pointer duration-500 hover:translate-x-2 hover:-translate-y-2 relative z-0  bg-white"
              
            >
              <div className="relative w-full ">
                <Image
                  src={channel.thumbnail_url}
                  alt={"image du stream"}
                  width={320}
                  height={180}
                  className="w-full"
                />
              </div>
              <div className="flex items-center justify-between w-full gap-4 p-2 mt-4">
                <div className="relative">
                  <Image
                    src={channel.profilePic}
                    alt={"image de profile"}
                    width={300}
                    height={300}
                    className="rounded-full w-12 h-12"
                  />
                </div>
                <div className="flex flex-col overflow-hidden text-ellipsis">
                  <h3 className="font-semibold text-xl">{channel.user_name}</h3>
                  <p className="text-sm font-thin">{channel.game_name}</p>
                </div>
                <div className="flex-grow flex items-center justify-end">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <h4>{(channel.viewer_count / 1000).toFixed(1)} K</h4>
                    </div>
                    <p>Viewer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Streams;
