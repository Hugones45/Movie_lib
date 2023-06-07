import { useSearchParams } from "react-router-dom"
import { MovieCard } from "../components/MovieCard"
import { useFetch } from "../hooks/useFectch"
import "./MovieGrid.css"
const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

export const Search = () => {

  const [searchParams] = useSearchParams()

  const query = searchParams.get("q")

  const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;

  const { dateSearch: foundMovies } = useFetch(searchWithQueryURL)

  return (
    <div className="container">

      <h2 className="title">
        Results: <span className="query-text">{query}</span>
      </h2>

      <div className="movies-container">
        {foundMovies.length === 0 && <p>Loading...</p>}
        {foundMovies.length > 0 && foundMovies.map((movie) =>
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        )}
      </div>
    </div>
  )
}