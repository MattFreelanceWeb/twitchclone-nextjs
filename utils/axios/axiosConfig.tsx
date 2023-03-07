import axios from 'axios'

let api = axios.create({
    headers:{
        'Client-ID': process.env.TWITCH_API_KEY,
        'Authorization' :`Bearer ${process.env.TWITCH_BEARER}`
    }
})

export default api