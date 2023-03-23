import IonIcon from "@reacticons/ionicons";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

function Header({}: Props) {
  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <div className={`bg-[#6441a4] h-12 fixed w-full z-50 text-white overflow-hidden flex items-start justify-center p-1 duration-300 ${toggle? 'h-auto':'h-12'} md:h-16 p-0`}>
      <nav className="w-full flex flex-col items-center md:flex-row">
      <div className="py-0 px-5">
            <Link href="/">
              <span className="text-white cursor-pointer text-xl">
                <IonIcon name="logo-twitch" size="large" />
              </span>
            </Link>
          </div>
        <ul className="flex flex-col w-full items-center  py-12 gap-8 md:flex-row md:py-0 md:gap-0">
          <li onClick={()=>(setToggle(!toggle))} className="py-2 px-5 w-48 font-semibold text-xl hover:bg-[#19171c] rounded-lg duration-200 mx-4">
            <Link href="/topGames">Top Games</Link>
          </li>
          <li onClick={()=>(setToggle(!toggle))} className="py-2 px-5 w-48 font-semibold text-xl hover:bg-[#19171c] rounded-lg duration-200 mx-4">
            <Link href="/topStreams">Top Streams</Link>
          </li>
          <li className=" px-5 mx-auto flex-shrink flex items-center justify-center h-16 w-full ">
            <form
              action=" "
              className=" h-10 w-full flex flex-shrink items-center justify-center  "
            >
              <input
                type="text"
                className="h-10 w-1/2 bg-white border-2 border-white rounded-l-[5px] text-black"
              />
              <button className="rounded-r-[5px] py-1 px-5  bg-gray-200">
                <span className="w-5 text-2xl font-bold text-black">
                  <IonIcon name="search" />
                </span>
              </button>
            </form>
          </li>
        </ul>
      </nav>
      <div 
      onClick={()=>(setToggle(!toggle))}
      className=" fixed top-0 right-2 cursor-pointer h-12 w-12 flex items-center justify-center md:hidden">
        <span className="text-4xl text-white">
          <IonIcon name="menu" />
        </span>
      </div>
    </div>
  );
}

export default Header;
