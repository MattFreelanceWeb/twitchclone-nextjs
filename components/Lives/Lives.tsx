import React from 'react'
import ReactTwitchEmbedVideo from "react-twitch-embed-video"

type Props = {login:string}

function Lives({login}: Props) {
  return (
    <div>
        <ReactTwitchEmbedVideo height='754' width='100%' channel="talk2megooseman" />
    </div>
  )
}

export default Lives