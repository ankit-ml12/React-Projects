import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { id, name, job, image, text } = people[index]

  const prevPerson = () => {
    setIndex((prevState) => {
      let newIndex = (prevState - 1 + people.length) % people.length
      return newIndex
    })
  }
  const nextPerson = () => {
    setIndex((prevState) => {
      let newIndex = (prevState + 1) % people.length
      return newIndex
    })
  }
  const rendomPerson = () => {
    setIndex(Math.trunc(Math.random() * 4))
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt="" className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="text">{text}</p>
      <div className="button-container">
        <button>
          <FaChevronLeft className="prev-btn" onClick={prevPerson} />
        </button>
        <button>
          <FaChevronRight className="next-btn" onClick={nextPerson} />
        </button>
      </div>
      <div>
        <button className="random-btn" onClick={rendomPerson}>
          Suprise Me
        </button>
      </div>
    </article>
  )
}

export default Review
