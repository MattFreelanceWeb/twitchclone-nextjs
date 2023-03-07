import IonIcon from '@reacticons/ionicons'
import Link from 'next/link'
import React from 'react'

type Props = {}

function Header({}: Props) {
  return (
    <div className='bg-[#6441a4] h-16 fixed w-full z-50 text-white'>
        <nav className='w-full'>
            <ul className='flex w-full items-center '>
                <li className='py-0 px-5'>
                   <span className='text-white cursor-pointer text-xl'><IonIcon name='logo-twitch' size ='large'/></span> 
                </li>
                <li className='py-0 px-5 w-32'>
                    <Link href=''>
                        Top Games
                    </Link>
                </li>
                <li className='py-0 px-5 w-32'>
                    <Link href=''>
                        Top Streams
                    </Link>
                </li>
                <li className=' px-5 mx-auto flex-shrink flex items-center justify-center h-16 w-full ' >
                    <form action=" " className=' h-10 w-full flex flex-shrink items-center justify-center  '>
                        <input type="text"  className='h-10 w-1/2 bg-white border-2 border-white rounded-l-[5px] text-black'/>
                        <button className='rounded-r-[5px] py-1 px-5  bg-gray-200'>
                           <span className='w-5 text-2xl font-bold text-black'><IonIcon name='search' /></span> 
                        </button>
                    </form>
                </li>
            </ul>
        </nav>
        <div className=' fixed top-0 right-2 cursor-pointer h-16 w-16 flex items-center justify-center md:hidden'>
             <span className='text-4xl text-white'><IonIcon name='menu' /></span>
        </div>
    </div>
  )
}

export default Header