import { MovieCard } from "../components/MovieCard"
import { useFetch } from "../hooks/useFectch"
import "./MovieGrid.css"

const movieUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

export const Home = () => {

  const topRatedUrl = `${movieUrl}top_rated?${apiKey}`

  const { date: topMovies } = useFetch(topRatedUrl)

  return (
    <div className="container">

      <h2 className="title">Best Movies</h2>

      <div className="movies-container">
        {topMovies.length === 0 && <p>Loading...</p>}
        {topMovies.length > 0 && topMovies.map((movie) =>
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        )}
      </div>
    </div>
  )
}









{/*import { useState, useEffect } from "react"
import { MovieCard } from "../components/MovieCard"
import "./MovieGrid.css"

const movieUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

export const Home = () => {

  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setTopMovies(data.results)
  }

  useEffect(() => {

    const topRatedUrl = `${movieUrl}top_rated?${apiKey}`

    getTopRatedMovies(topRatedUrl)
  }, [])

  return (
    <div className="container">

      <h2 className="title">Melhores Filmes</h2>

      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && topMovies.map((movie) =>
          <MovieCard
            key={movie.id}
            movie={movie}

          />
        )}
      </div>
    </div>
  )
}*/}
