import React from "react";

type Props = {};

function LoadingStreamerInfo({}: Props) {
  return (
    <div className="flex gap-2 animate-pulse">
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
  );
}

export default LoadingStreamerInfo;
