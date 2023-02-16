import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showlink, setShowlink] = useState(false)
  const linksContainerRefs = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    console.log(linksHeight)
    if (showlink) {
      linksRef.current.style.height = `${linksHeight}`
    } else {
      linksRef.current.style.height = `0px`
    }
  }, [showlink])
  return (
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" />
        <button className="nav-toggle" onClick={() => setShowlink(!showlink)}>
          <FaBars />
        </button>
      </div>

      <div className="link-container" ref={linksContainerRefs}>
        <ul className="links" ref={linksRef}>
          {links.map((link) => {
            const { id, url, text } = link
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            )
          })}
        </ul>
      </div>
      <ul className="social-icons">
        {social.map((soci) => {
          const { id, url, icon } = soci
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Navbar
