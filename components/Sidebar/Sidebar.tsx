import React, {useState} from 'react'
import IonIcon from '@reacticons/ionicons'

type Props = {}

function Sidebar({}: Props) {
    const [toggle, setToggle] = useState<Boolean>(true)

  return (
    <div className={`fixed w-60 bg-[#19171c] h-screen flex flex-col items-center duration-500 ${toggle?'-translate-x-60' :'translate-x-0'} z-40 `} >
        <button className='self-end w-full flex items-center justify-end mt-20 mr-4' onClick={()=>{setToggle(!toggle)}}>
            <span  className='text-white '><IonIcon name="close" size='large'/></span> 
        </button>

        <h2 className='text-[#efebf5] text-lg font-semibold pt-7 px-0 pb-5 z-0' >Chaînes recommandées</h2>
        <button className={` translate-x-40 ${toggle? 'flex' : 'hidden'} fixed md:top-20 top-96 flex items-center`} onClick={()=>{setToggle(!toggle)}}><span className='text-black '><IonIcon name='chevron-forward' size='large'/></span></button>
    </div>
  )
}

export default Sidebar