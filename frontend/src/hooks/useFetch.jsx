import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [errorLoading, setErrorLoading] = useState()

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
