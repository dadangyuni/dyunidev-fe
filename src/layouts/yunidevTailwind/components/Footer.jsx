import React from 'react'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='container mx-auto flex w-full justify-between items-center'>
        <div className="footer-logo">
          <img className='w-20' src='/logo192.png' alt='logo'/>
        </div>
        <div className="copy-right">
          Create with <i className="fas fa-heart" /> by Dadang
        </div>
      </div>
    </div>
  )
}

export default Footer