import React, { useState } from 'react'
import Menu from './Menu'
import items from './data'
import Categories from './Categories'

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  console.log(items)
  const [menuItems, setmenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItem = (category) => {
    if (category === 'all') {
      setmenuItems(items)
      return
    }
    const newitems = items.filter((item) => item.category == category)
    setmenuItems(newitems)
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItem={filterItem} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
