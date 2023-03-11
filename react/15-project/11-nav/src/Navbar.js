import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLink,setShowLink] = useState(false);
  const linkContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(()=>{
    let linksHeight = linksRef.current.getBoundingClientRect().height
    if(showLink){
      linkContainerRef.current.style.height = `${linksHeight}px`;
    }else{
      linkContainerRef.current.style.height = '0px'
    }

  },[showLink])
  return <nav>
            <div className='nav-center'>
            <div className='nav-header'>
              <img src={logo} alt='logo-branch'/>
              <button className='nav-toggle' onClick={() => setShowLink(!showLink)}>
                <FaBars />
              </button>
            </div>
            <div className={`links-container ${showLink && 'show-container'}`} ref={linkContainerRef}>
              <ul className='links' ref={linksRef}>
                {links.map(link =>{
                  return <li><a href={link.url}>{link.text}</a></li>
                })}
              </ul>
            </div>
            <ul className='social-icons'>
              {social.map(item=>{
                return <li>
                  <a href={item.url}>{item.icon}</a>
                </li>
              })}
            </ul>
          </div>
         </nav>
}

export default Navbar
