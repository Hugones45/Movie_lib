import { MovieCard } from "../components/MovieCard"
import { useFetch } from "../hooks/useFectch"
import "./MovieGrid.css"

const popularMovies = import.meta.env.VITE_POPULAR
const apiKey = import.meta.env.VITE_API_KEY

export const Popular = () => {
    const thePopularMovies = `${popularMovies}?${apiKey}`
    const { datePopular: popular } = useFetch(thePopularMovies)

    return (
        <div className="container">
            <h2 className="title">Most Popular</h2>
            <div className="movies-container">
                {popular.length > 0 && popular.map((popularMovies) =>
                    <MovieCard movie={popularMovies} key={popularMovies.id} />
                )}
            </div>
        </div>
    )
}
