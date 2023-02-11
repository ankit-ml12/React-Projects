import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
  const fetchTour = async () => {
    setLoading(true)

    try {
      const response = await fetch(url)
      const tour = await response.json()
      setLoading(false)
      setTours(tour)
      console.log('users', tour)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTour()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length == 0) {
    return (
      <main>
        <div className="title">
          <h2>No tour left</h2>
          <button className="btn" onClick={fetchTour}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} new />
    </main>
  )
}

export default App
