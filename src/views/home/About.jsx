import React from 'react'

const About = () => {
  return (
    <section id='about'>
        <div className="container mx-auto">
            <h1 className='text-2xl font-semibold mb-3 lg:text-5xl'>About Me</h1>
            <h3 className='text-base font-normal text-textMain lg:text-xl lg:mb-6'>
                I'm a self-motivated learner with strong organization, time management & communication skills.
            </h3>
            <div className='flex justify-between flex-col lg:flex-row lg:gap-8'>
                <div className='w-full lg:w-1/2'>
                    <img className='rounded-xl mt-3 mb-5 mx-auto' src="/images/about_pict_1.jpg" alt="me" />
                </div>
                <div className='flex-auto py-5'>
                    <h1 className='text-2xl font-semibold mb-3 lg:text-4xl'>I’am Dadang Yuni U.</h1>
                    <h3 className='text-lg font-normal mb-3 lg:text-3xl'>
                        A <span className='text-textPrimary'>Web Developer</span> Based in <span className='text-textPrimary'>Indonesia</span>
                    </h3>
                    <p className='text-base text-textMain mb-3 lg:text-xl lg:leading-9'>
                        I started my journey as a developer in 2019. I build and develop a web application with javascript. Most of my projects done using ReactJS. But, I also improve my skill to be Fullstack Developer.
                    </p>
                    <p className='text-base text-textMain mb-3 lg:text-xl lg:leading-9'>
                        I am currently work as Frontend Developer in a company based in Jakarta, Indonesia. In my spare time I like design and build my own application.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About