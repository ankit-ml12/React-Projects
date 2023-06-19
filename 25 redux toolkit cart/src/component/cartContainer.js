import React from 'react'
import CartItem from './cartItems'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../features/cart/cartslice'

const CartContainer = () => {
  const dispatch = useDispatch()
  const { cartItems, total, amount } = useSelector((store) => store.cart)

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your bag</h2>
          <h4 className="empty-cart">your card is empty currently</h4>
        </header>
      </section>
    )
  }

  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>
          {' '}
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
