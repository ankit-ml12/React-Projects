import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'

const SingleMovie = () => {
  const { id } = useParams()
  const [movies, setMovies] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ show: false, msg: '' })

  const fetchMovies = async (url) => {
    console.log('url', url)
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data.Response === 'False') {
        setError({ show: true, msg: data.Error })
      } else {
        setMovies(data)
        setError({ show: false, msg: '' })
      }
      setIsLoading(false)
    } catch (error) {
      console.log('error2 : ', error)
    }
  }
  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&i=${id}`)
  }, [id])

  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    )
  }

  const { Poster: poster, Title: title, Plot: plot, Year: year } = movies
  return (
    <section className="single-movie">
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    </section>
  )
}

export default SingleMovie
