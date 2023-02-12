import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'
function App() {
  const [questions, setQuestion] = useState(data)

  return (
    <main>
      <div className="container">
        <h3>Question and answer about login</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />
          })}
        </section>
      </div>
    </main>
  )
  return <h2>accordion project setup</h2>
}

export default App
