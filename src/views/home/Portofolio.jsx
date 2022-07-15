import React, { useState } from 'react';
import { CardPorto } from './components';
import service from './services';

const Portofolio = () => {
  const [btnActive,setBtnActive] = useState(1);
  return (
    <section id='portofolio' className='portofolio-container'>
      <div className="container mx-auto text-center">
        <h1 className='text-2xl font-semibold mb-3 lg:text-4xl'>My Portofolio</h1>
        <h3 className='text-base font-normal text-textMain lg:text-xl lg:mb-6'>
          Here are a few projects built completely <br/> with passion and creatifity during my spare time
        </h3>
        <div className='my-5'>
          <div className='my-5'>
            <button 
              onClick={()=>setBtnActive(1)}
              className={`btn-base rounded-l-lg ${btnActive === 1 && 'btn-active'}`}
            >Web</button>
            <button 
              onClick={()=>setBtnActive(2)}
              className={`btn-base rounded-r-lg ${btnActive === 2 && 'btn-active'}`}
            >Design</button>
          </div>
          {btnActive === 1 && <div className='list-container'>
            {service.portofolioData.map((m,idx)=>{
              return (<CardPorto key={idx} {...m}/>)
            })}
          </div>}
          {btnActive === 2 && <div className='list-container'>
            <div className='flex-auto text-center w-full p-20 bg-borderLight min-h-[350px] h-full flex flex-col justify-center rounded-lg'>Coming Soon</div>
          </div>}
        </div>
      </div>
    </section>
  )
}

export default Portofolio