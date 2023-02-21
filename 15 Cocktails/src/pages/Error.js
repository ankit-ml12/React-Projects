import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>Opps. It's a dead end</h1>
        <Link to="/" className="btn btn-primary">
          Back Home
        </Link>
      </div>
      <h2>Error Page</h2>
    </section>
  )
}

export default Error
