import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="grocery-list">
      {items.map(({ id, title }) => {
        // console.log(removeItem)
        return (
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>
            <div className="btn-container">
              <button
                type="button"
                className="edit-btn"
                onClick={() => {
                  editItem(id)
                }}
              >
                <FaEdit />
              </button>
              <button type="button" className="delete-btn">
                <FaTrash
                  onClick={() => {
                    removeItem(id)
                  }}
                />
              </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default List
