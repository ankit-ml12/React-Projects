import React from 'react'

const List = ({ people }) => {
  return (
    <>
      {people.map((pep) => {
        return (
          <article className="person">
            <img key={pep.id} src={pep.image} alt="" />
            <div>
              <h4>{pep.name}</h4>
              <p>{pep.age}</p>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default List
