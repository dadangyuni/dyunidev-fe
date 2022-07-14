import React from 'react'

const Header = () => {
  const onClickHam = (e) => {
      const ham = document.getElementById('hamburger');
      const navMenu = document.getElementById('nav-menu');
      ham.classList.toggle('hamburger-active');
      navMenu.classList.toggle('hidden');
  }

  return (
    <header className='bg-transparent absolute top-0 left-0 w-full flex items-center z-10 navbar-fixed'>
      <div className="w-full px-10">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a href="#home" className="font-bold text-lg text-primary block py-2">
              <img className='w-24' src='/logo192.png' alt='logo'/>
            </a>
          </div>
          <div className="flex items-center px-4">
            <button id='hamburger' name='hamburger' type='button' className='block absolute right-4 lg:hidden' onClick={onClickHam}>
              <span className='origin-top-left hamburger-line transition duration-300 ease-in-out'></span>
              <span className='hamburger-line transition duration-300 ease-in-out'></span>
              <span className='origin-bottom-left hamburger-line transition duration-300 ease-in-out'></span>
            </button>
            <nav id="nav-menu" 
              className='hidden absolute right-4 top-full py-5 bg-white rounded-lg shadow-lg max-w-[200px] w-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:rounded-none lg:shadow-none'
            >
              <ul className='block lg:flex'>
                <li className='group'>
                  <a href="#home" className='text-base text-dark py-2 mx-6 group-hover:text-primary flex'>Home</a>
                </li>
                <li className='group'>
                  <a href="#about" className='text-base text-dark py-2 mx-6 group-hover:text-primary flex'>About</a>
                </li>
                <li className='group'>
                  <a href="#portofolio" className='text-base text-dark py-2 mx-6 group-hover:text-primary flex'>Portofolio</a>
                </li>
                <li className='group'>
                  <a href="#contact" className='text-base text-dark py-2 mx-6 group-hover:text-primary flex'>Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header