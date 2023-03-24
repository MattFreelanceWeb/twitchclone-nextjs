import IonIcon from "@reacticons/ionicons";
import React from "react";

type Props = {};

function LoadingStreamsInfo({}: Props) {
  return (
    <>
      {/*skeleton template*/}
      <div className="bg-[#19171c]">
        <div className="shadow-2xl w-[320px] h-72 flex flex-col items-center justify-between cursor-pointer  relative z-0  bg-white animate-pulse">
          <div className="w-full h-[180px] bg-gray-300 flex items-center justify-center">
            <span className="text-6xl text-white">
              <IonIcon name="image" size="large" />
            </span>
          </div>
          <div className="flex w-full px-4 pb-10 gap-2">
            <div className="w-12 h-12 rounded-full bg-gray-300" />
            <div className="flex flex-col justify-center gap-2">
              <div className="h-3 w-20 bg-gray-300 rounded-full" />
              <div className="h-2 w-32 bg-gray-300 rounded-full" />
            </div>
            <div className="flex flex-col flex-grow items-end  justify-center gap-2">
              <div className="flex gap-1">
                <div className="h-2 w-2 bg-gray-300 rounded-full" />
                <div className="h-3 w-10 bg-gray-300 rounded-full" />
              </div>
              <div className="h-2 w-10 bg-gray-300 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingStreamsInfo;
