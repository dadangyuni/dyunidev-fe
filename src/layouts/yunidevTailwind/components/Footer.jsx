import React from 'react'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='container mx-auto flex w-full justify-between items-center px-2'>
        <div className="footer-logo">
          <div className='w-full'>
              <div className='w-full flex justify-center items-center gap-3 lg:gap-6'>
                <a href='https://www.linkedin.com/in/dadang-yuni-utomo-2716a3114/' target="_blank" rel="noreferrer noopener">
                  <i className="fab fa-linkedin text-xl lg:text-2xl text-textMain hover:text-primary duration-300 transition ease-in-out dark:text-white"></i>
                </a>
                <a href='https://github.com/dadangyuni' target="_blank" rel="noreferrer noopener">
                  <i className="fab fa-github text-xl lg:text-2xl text-textMain hover:text-primary duration-300 transition ease-in-out dark:text-white"></i>
                </a>
                <a href='https://www.instagram.com/dadang_inuy/' target="_blank" rel="noreferrer noopener">
                  <i className="fab fa-instagram text-xl lg:text-2xl text-textMain hover:text-primary duration-300 transition ease-in-out dark:text-white"></i>
                </a>
                <a href='#text' target="_blank" rel="noreferrer noopener">
                  <i className="fab fa-youtube text-xl lg:text-2xl text-textMain hover:text-primary duration-300 transition ease-in-out dark:text-white"></i>
                </a>
              </div>
            </div>
        </div>
        <div className="copy-right">
          Create with <i className="fas fa-heart" /> by Dadang
        </div>
      </div>
    </footer>
  )
}

export default Footer