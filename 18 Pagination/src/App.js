import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  const { loading, data } = useFetch()
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])
  useEffect(() => {
    if (loading) return
    setFollowers(data[page])
  }, [loading, page])
  const handlePage = (index) => {
    setPage(index)
  }
  const prevPage = () => {
    const temp = (page - 1 + data.length) % data.length
    setPage(temp)
  }
  const nextPage = () => {
    const temp = (page + 1) % data.length
    setPage(temp)
  }
  return (
    <main>
      <div className="section-title">
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />
          })}
        </div>
        {!loading && (
          <div className="btn-container">
            <buttton className="prev-btn" onClick={prevPage}>
              prev
            </buttton>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  onClick={() => {
                    handlePage(index)
                  }}
                >
                  {index + 1}
                </button>
              )
            })}
            <buttton className="next-btn" onClick={nextPage}>
              next
            </buttton>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
