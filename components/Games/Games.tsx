import api from '@/utils/axios/axiosConfig'
import React, {useState , useEffect} from 'react'

type Props = {}

function Games({}: Props) {

const [games, setGames] = useState<[]>([])

useEffect(() => {

  const fetchData = async () => {

    try{const result = await api.get('https://api.twitch.tv/helix/games/top')
    console.log(result);}
    catch(error){
        console.log(error);
        
    }
    
  }
fetchData()

}, [])


  return (
    <div>
        <h1>Jeux les plus populaires</h1>
        <div>

        </div>
    </div>
  )
}

export default Games