import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [people, setPeople] = useState(data)
  return (
    <section className="container">
      <h3>{people.length} birthday today</h3>

      <List people={people}></List>
      <button
        className=".btn"
        onClick={() => {
          setPeople([])
        }}
      >
        Clear All
      </button>
    </section>
  )
}

export default App
