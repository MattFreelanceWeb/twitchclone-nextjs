import React from "react";

type Props = {};

function LoadingCards({}: Props) {
  return (
    <div className="shadow-2xl w-[250px] h-[460px]  flex flex-col items-center cursor-pointer duration-500 hover:-translate-y-2 relative z-0 rounded-md animate-pulse">
      <div className="w-full h-[300px] bg-gray-300 rounded-md"></div>
      <div className="flex flex-col justify-center items-center gap-4">
        <h5 className="w-32 h-4 bg-gray-300 mt-10 rounded-full"></h5>
        <h5 className="w-32 h-4 bg-gray-300 rounded-full"></h5>
        <div className="bg-gray-300 my-2 px-12 py-2 h-10 w-20 rounded-lg z-10 text-white"></div>
      </div>
    </div>
  );
}

export default LoadingCards;
