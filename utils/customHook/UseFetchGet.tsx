import api from '../axios/axiosConfig'
import { useEffect, useState } from 'react'


type Props = {url:string, token?:string | unknown }

function UseFetchGet({url ,token}: Props) {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [apiData, setApiData] = useState<JSON | unknown >(null)
    const [serverError, setServerError] = useState<JSON | unknown>(null)


    useEffect(() => {

      setIsLoading(true)

      const fetchData = async ()=> {
        try {
            if(!token){
              const resp = await api.get(url)
              const data = await resp?.data
              setApiData(data)
              setIsLoading(false)
            }

            const resp = await api.get(url, {headers:{'Authorization': `bearer ${token}`}} )
            const data = await resp?.data
            setApiData(data)
            setIsLoading(false)


        } catch (error) {
            setServerError(error)
            setIsLoading(false)
        }
      }

      fetchData()

    }, [url, token])
    

  return (
    {isLoading, apiData, serverError}
  )
}

export default UseFetchGet