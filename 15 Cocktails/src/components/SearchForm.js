import React, { useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef('')

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    searchCocktail()
  }
  return (
    <section className="section search">
      <form action="" className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name"> Serach Your Cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            // onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
