import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexam }) => {
  console.log(rgb, weight, index, hexam)
  const [alert, setAlert] = useState(false)
  const bcd = rgb.join(',')
  const hexa = rgbToHex(...rgb)
  const hexValue = `#${hexam}`

  return (
    <article
      className="color"
      style={{ backgroundColor: `rgb(${bcd})` }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexa}</p>
      {alert && <p className="alert">copy to clipboard</p>}
    </article>
  )
}

export default SingleColor
