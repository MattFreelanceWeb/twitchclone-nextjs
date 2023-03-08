import React, { useState, useEffect } from "react";
import IonIcon from "@reacticons/ionicons";
import { getTopStreams, getTopUsers } from "@/utils/axios/fetchUrl";
import Image from "next/image";
import LoadingStreamerInfo from "./LoadingStreamerInfo";

type Props = {};

function Sidebar({}: Props) {
  const [toggle, setToggle] = useState<Boolean>(true);
  const [idUrl, setIdUrl] = useState("");
  const [sideBarInfo, setSideBarInfo] = useState<any[]>([]);

  console.log(sideBarInfo);

  const topStreams = getTopStreams();
  const dataStreams: any = topStreams.getTopStreams.apiData;

  console.log();

  const topUsers = getTopUsers(idUrl);
  const dataUsers: any = topUsers.getTopUsers.apiData;

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
        return stream;
      });
      setSideBarInfo(finalArray);
    }
  }, [dataStreams, dataUsers]);

  return (
    <div
      className={`fixed w-80 bg-[#19171c] h-screen flex flex-col items-center duration-500 ${
        toggle ? "-translate-x-80" : "translate-x-0"
      } z-40 `}
    >
      <button
        className="self-end w-full flex items-center justify-end mt-20 mr-4"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <span className="text-white ">
          <IonIcon name="close" size="large" />
        </span>
      </button>

      <h2 className="text-[#efebf5] text-lg font-semibold pt-7 px-0 pb-5 z-0">
        Chaînes recommandées
      </h2>
      <button
        className={` translate-x-48 ${
          toggle ? "flex" : "hidden"
        } fixed md:top-20 top-96 flex items-center`}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <span className="text-black ">
          <IonIcon name="chevron-forward" size="large" />
        </span>
      </button>
      <ul className="overflow-y-auto w-full p-2 flex flex-col gap-4">
        {topStreams.getTopStreams.isLoading && (
          <>
            <LoadingStreamerInfo />
            <LoadingStreamerInfo />
            <LoadingStreamerInfo />
            <LoadingStreamerInfo />
            <LoadingStreamerInfo />
            <LoadingStreamerInfo />
            <LoadingStreamerInfo />
            <LoadingStreamerInfo />
            <LoadingStreamerInfo />
            <LoadingStreamerInfo />
          </>
        )}
        {sideBarInfo.map((stream, i) => (
          <li
            key={i}
            className="flex items-center gap-4 text-white cursor-pointer"
          >
            <div className="relative">
              <Image
                src={stream.profilePic}
                alt={"image de profile"}
                width={300}
                height={300}
                className="rounded-full w-12 h-12"
              />
            </div>
            <div className="flex flex-col overflow-hidden text-ellipsis">
              <h3 className="font-semibold text-xl">{stream.user_name}</h3>
              <p className="text-sm font-thin">{stream.game_name}</p>
            </div>
            <div className="flex-grow flex items-center justify-end">
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <h4>{(stream.viewer_count / 1000).toFixed(1)} K</h4>
                </div>
                <p>Viewer</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
