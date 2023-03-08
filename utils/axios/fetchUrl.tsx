import UseFetchGet from "../customHook/UseFetchGet";

export let getTopGames = () =>{
    const url: string = "https://api.twitch.tv/helix/games/top";
    const getTopGames: any = UseFetchGet({ url });
    return {
        getTopGames
    }
}

export let getTopStreams = () =>{
    const url = 'https://api.twitch.tv/helix/streams'
    const getTopStreams = UseFetchGet({url})
    return{
        getTopStreams
    }
}

export let getTopUsers = function GetTopUsers(idUrl:string) {
    const url = `https://api.twitch.tv/helix/users?${idUrl}`
    const getTopUsers = UseFetchGet({url})
    return {
        getTopUsers
    }
}
