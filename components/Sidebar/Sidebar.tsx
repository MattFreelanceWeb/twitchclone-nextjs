import React from 'react'

type Props = {}

function Sidebar({}: Props) {
  return (
    <div className='fixed top-16 w-60 bg-[#19171c] h-screen flex flex-col items-center'>
        <h2 className='text-[#efebf5] text-lg font-semibold pt-7 px-0 pb-5'>Chaînes recommandées</h2>
        <ul className=''>

        </ul>
    </div>
  )
}

export default Sidebar