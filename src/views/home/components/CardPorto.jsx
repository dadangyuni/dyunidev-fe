import React from 'react'

const CardPorto = ({title, poster, description, demoLink, sourceLink}) => {
  return (
    <div className='item-card'>
        <div className='inner-card'>
        <div className='border-[1px] border-borderLight rounded-md'>
            <img className='rounded-md w-full object-cover max-h-52 h-full' src={poster} alt={title}/>
        </div>
        <div className='flex-auto flex flex-col'>
            <h3 className='w-full text-left text-xl py-2 font-semibold'>{title}</h3>
            <div className='flex-auto text-left text-textMain font-normal text-base'>
                {description}
            </div>
            <div className='pt-4 flex justify-between'>
                <a href={demoLink}  className='btn-card' target="_blank" rel='noopener noreferrer'>
                    <i class="fas fa-play"></i>
                    {" "}
                    Demo
                </a>
                <a href={sourceLink} className='btn-card' target="_blank" rel='noopener noreferrer'>
                    <i class="fab fa-github"></i>
                    {" "}
                    Source
                </a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CardPorto