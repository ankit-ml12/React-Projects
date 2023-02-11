import React, { useState } from 'react'

const Tour = ({ id, image, price, info, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <article className="single-tour">
      <img src={image} alt="" />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <hu className="tour-price">`${price}`</hu>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}

          <button
            onClick={() => {
              setReadMore(!readMore)
            }}
          >
            {readMore ? 'show less' : 'Read more'}
          </button>
        </p>

        <button
          className="delete-btn"
          onClick={() => {
            removeTour(id)
          }}
        >
          Not interested
        </button>
      </footer>
    </article>
  )
}

export default Tour
