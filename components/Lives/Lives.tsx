import React from 'react'
import dynamic from 'next/dynamic'

const ReactTwitchEmbedVideo = dynamic(() => import('react-twitch-embed-video'), {
  ssr: false,
})

type Props = {login:any}

function Lives({login}: Props) {
  return (
    <div className='w-full  bg-black h-screen flex items-center justify-center'>
        <ReactTwitchEmbedVideo height='754' width='100%' channel={login}/>
    </div>
  )
}

export default Lives