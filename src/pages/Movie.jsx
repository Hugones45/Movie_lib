import { useParams } from "react-router-dom"
import { MovieCard } from "../components/MovieCard"
import { useFetch } from "../hooks/useFectch";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
  BsFillCalendarDateFill
} from "react-icons/bs";
import './Movie.css'

const movieUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

export const Movie = () => {

  const { id } = useParams()

  const topRatedUrl = `${movieUrl}${id}?${apiKey}`

  const { dataDetails: detailOfMovie } = useFetch(topRatedUrl)

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    })
  }

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('pt-BR', options);
    return formattedDate;
  };

  return (
    <div className="movie-page">
      {detailOfMovie && <>
        <MovieCard movie={detailOfMovie} showLink={false} />
        <p className="tagline">{detailOfMovie.tagline}</p>
        <div className="info">
          <h3 >
            <BsFillCalendarDateFill /> Release Date:
          </h3>
          <p>{formatDate(detailOfMovie.release_date)}</p>
        </div>
        <div className="info">
          <h3>
            <BsWallet2 /> Budget:
          </h3>
          <p>{formatCurrency(detailOfMovie.budget)}</p>
        </div>
        <div className="info">
          <h3>
            <BsGraphUp /> Revenue:
          </h3>
          <p>{formatCurrency(detailOfMovie.revenue)}</p>
        </div>
        <div className="info">
          <h3>
            <BsHourglassSplit /> Time:
          </h3>
          <p>{detailOfMovie.runtime} minutes</p>
        </div>
        <div className="info description">
          <h3>
            <BsFillFileEarmarkTextFill /> Description:
          </h3>
          <p>{detailOfMovie.overview}</p>
        </div>
      </>}
    </div>
  )
}
