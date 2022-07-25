import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='contact-section'>
      <div className="container m-auto">
        <div className="w-full text-center">
          <h1 className='text-2xl font-semibold mb-3 lg:text-4xl dark:text-white'>Contact</h1>
          <h3 className='text-lg font-normal mb-6 text-textMain lg:text-xl dark:text-white'>
            If you have any suggestion, project or amazing idea, please fill out the form below and I will reply you shortly.
          </h3>
          <form className='max-w-xl w-full mx-auto'>
            <div className="w-full mb-8 text-left">
              <label htmlFor="name" className='text-base  font-normal text-textMain mb-10 dark:text-white'>Name</label>
              <input 
                id='name' 
                type="text" 
                className='mt-3 w-full bg-white text-dark p-3 rounded-md focus:outline-none ring-borderLight ring-1 focus:ring-primary focus:ring-2 focus:border-primary dark:bg-bgDarkOne dark:ring-bgDarkThree' />
            </div>
            <div className='w-full flex gap-8'>
              <div className="w-1/2 mb-6 text-left">
                <label htmlFor="email" className='text-base  font-normal text-textMain mb-10 dark:text-white'>Email</label>
                <input 
                  id='email' 
                  type="text" 
                  className='mt-3 w-full bg-white text-dark p-3 rounded-md focus:outline-none ring-borderLight ring-1 focus:ring-primary focus:ring-2 focus:border-primary dark:bg-bgDarkOne dark:ring-bgDarkThree' />
              </div>
              <div className="w-1/2 mb-6 text-left">
                <label htmlFor="subject" className='text-base  font-normal text-textMain mb-10 dark:text-white'>Subject</label>
                <input 
                  id='subject' 
                  type="text" 
                  className='mt-3 w-full bg-white text-dark p-3 rounded-md focus:outline-none ring-borderLight ring-1 focus:ring-primary focus:ring-2 focus:border-primary dark:bg-bgDarkOne dark:ring-bgDarkThree' />
              </div>
            </div>
            <div className="w-full mb-6 text-left">
              <label htmlFor="message" className='text-base font-normal text-textMain mb-10 dark:text-white'>Message</label>
              <textarea 
                id='message' 
                className='mt-3 w-full bg-white text-dark p-3 rounded-md focus:outline-none ring-borderLight ring-1 focus:ring-primary focus:ring-2 focus:border-primary h-32 dark:bg-bgDarkOne dark:ring-bgDarkThree'
              />
            </div>
            <div className="w-full flex flex-wrap justify-between gap-6">
              <div className='flex items-center gap-3'>
                <div className='bg-yellowOne flex flex-col justify-center w-11 h-11 p-2 rounded-md'>
                  <i className="fas fa-envelope"></i>
                </div>
                <div className='text-left'>
                  <label htmlFor="show-email" className='text-base font-bold text-black dark:text-white'>Email</label>
                  <div id='show-email' className='text-base font-medium text-textMain dark:text-teal-50'>dadanginuy@gmail.com</div>
                </div>
              </div>
              <button className='text-base font-semibold bg-primary text-white py-3 px-8 rounded-lg hover:opacity-80 w-full hover:shadow-lg transition duration-300'>Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact