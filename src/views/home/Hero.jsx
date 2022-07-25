import React from 'react'

const Hero = () => {
  return (
    <section id='home' className='hero-container'>
        <div className="container mx-auto py-5">
            <div className="flex flex-wrap">
                <div className="w-full self-center lg:w-1/2">
                    <h5 className='text-xl font-medium md:text-2xl'>Hello, I'am</h5>
                    <h1 className='text-primary font-semibold text-5xl mt-1 md:text-7xl'>Dadang</h1>
                    <h2 className='text-black text-xl mt-4 font-medium md:text-3xl'>A <span className='text-primary'>
                        Web Developer</span> Based in <span className='text-primary'>Indonesia</span>
                    </h2>
                    <h3 className='text-textMain text-lg mb-10 md:text-2xl md:mt-2'>Who love code and build amazing things for the web. </h3>
                    <a href='#about' className='py-3 px-8 rounded-full border-[1px] bg-primary hover:opacity-80 transition duration-300 ease-in-out'>
                        <span className='text-text'><i className="fas fa-arrow-down text-white" /></span>
                        <span className='mx-2 text-white'>SEE MORE</span>
                    </a>
                </div>
                <div className="w-full self-end lg:w-1/2">
                    <div className='mt-10'>
                        <div>
                            <img src='/images/hero.png' alt='hero' className='max-w-full mx-auto'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero