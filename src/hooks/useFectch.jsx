import { useState, useEffect } from "react"

export const useFetch = (url) => {
    const [date, setDate] = useState([])
    const [dataDetails, setDataDetails] = useState(null)
    const [datePopular, setDatePopular] = useState([])
    const [dateSearch, setDateSearch] = useState([])

    const fetchData = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setDate(data.results)
        setDataDetails(data)
        setDatePopular(data.results)
        setDateSearch(data.results)
    }

    useEffect(() => {

        fetchData(url)

    }, [url])

    return { date, dataDetails, datePopular, dateSearch }

}






