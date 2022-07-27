import React, { useEffect } from 'react'

const Header = () => {
  const onClickHam = (e) => {
      const ham = document.getElementById('hamburger');
      const navMenu = document.getElementById('nav-menu');
      ham.classList.toggle('hamburger-active');
      navMenu.classList.toggle('hidden');
  }

  const darkToggle = (e) => {
    const html = document.querySelector('html');
    const themeToggle = document.querySelector('#theme-toggle');

    if(themeToggle.checked){
      html.classList.add('dark')
    }else{
      html.classList.remove('dark')
    }
  }

  useEffect(()=>{
    const onScroll = () => {
      const header = document.querySelector('header');
      const toTop = document.querySelector('#to-top');
      const fixedNav = header.offsetTop;
      
      if(window.pageYOffset > fixedNav){
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
      } else {
        toTop.classList.add('hidden');
        toTop.classList.remove('flex');
      }
    };
    window.addEventListener("scroll", onScroll);
    window.addEventListener("click", (e) => {
      const ham = document.getElementById('hamburger');
      const navMenu = document.getElementById('nav-menu');
      if(e.target !== ham && e.target !== navMenu){
        ham.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
      }
    })

    return () => window.removeEventListener("scroll", onScroll);
  },[])

  return (
    <header className='bg-transparent absolute top-0 left-0 w-full flex items-center z-10 navbar-fixed'>
      <div className="w-full px-5">
        <div className="flex items-center justify-between relative">
          <div className="px-0">
            <a href="#home" className="font-bold text-lg text-primary block py-2">
              <img className='w-16' src='/logo192.png' alt='logo'/>
            </a>
          </div>
          <div className="flex items-center px-4">
            <button id='hamburger' name='hamburger' type='button' className='block absolute right-4 lg:hidden' onClick={onClickHam}>
              <span className='origin-top-left hamburger-line transition duration-300 ease-in-out'></span>
              <span className='hamburger-line transition duration-300 ease-in-out'></span>
              <span className='origin-bottom-left hamburger-line transition duration-300 ease-in-out'></span>
            </button>
            <nav id="nav-menu" 
              className='hidden absolute right-4 top-full py-5 bg-white rounded-lg shadow-lg max-w-[200px] w-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:rounded-none lg:shadow-none dark:bg-bgDarkTwo lg:dark:bg-transparent'
            >
              <ul className='block lg:flex'>
                <li className='group'>
                  <a href="#home" className='text-base text-dark py-2 mx-6 group-hover:text-primary flex dark:text-white dark:group-hover:text-textDarkPrimary'>Home</a>
                </li>
                <li className='group'>
                  <a href="#about" className='text-base text-dark py-2 mx-6 group-hover:text-primary flex dark:text-white dark:group-hover:text-textDarkPrimary'>About</a>
                </li>
                <li className='group'>
                  <a href="#portofolio" className='text-base text-dark py-2 mx-6 group-hover:text-primary flex dark:text-white dark:group-hover:text-textDarkPrimary'>Portofolio</a>
                </li>
                <li className='group'>
                  <a href="#contact" className='text-base text-dark py-2 mx-6 group-hover:text-primary flex dark:text-white dark:group-hover:text-textDarkPrimary'>Contact</a>
                </li>
                <li className='flex items-center pl-8'>
                  <div className='flex'>
                    <input type="checkbox" className='hidden' id='theme-toggle' onChange={darkToggle}></input>
                    <label htmlFor="theme-toggle">
                      <div className='flex h-6 w-[55px] cursor-pointer items-center justify-between rounded-full bg-borderLight p-[2px]'>
                        <div className='toggle-dark h-5 w-5 rounded-full flex items-center justify-center transition-all duration-200'>
                          <i className="fas fa-moon text-textMain"></i>
                        </div>
                        <div className='toggle-light bg-white h-5 w-5 rounded-full flex items-center justify-center transition-all duration-200'>
                          <i className="fas fa-sun text-primary"></i>
                        </div>
                      </div>
                    </label>
                  </div>
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