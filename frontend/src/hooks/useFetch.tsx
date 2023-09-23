import { useEffect, useState } from "react";

const useFetch = (url: String) => {
    const [data, setData] = useState<any | null>(null)
    const [isLoading, setIsLoading] = useState<Boolean>(true)
    const [errorLoading, setErrorLoading] = useState<String>(String)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(import.meta.env.VITE_API_URL + url)
            const json = await response.json()
            
            if (response.ok) {
                setIsLoading(false) 
                setData(json)
            } else {
                setErrorLoading("Failed to fetch")
            }
        }
        fetchData()
    }, [url])

    return { data, isLoading, errorLoading }
}

export default useFetch;
