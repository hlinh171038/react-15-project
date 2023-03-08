import React from 'react';
import Tour from './Tour';
const Tours = ({tours,setTours}) => {
  return <div>
            <h1 className='title'>Our tours</h1>
            <div className='underline'></div>
            <div className='cover'>
                {tours.map(tour =>{
                  return <Tour key={tour.id} 
                  name={tour.name} 
                  id={tour.id}
                  info ={tour.info}
                  price = {tour.price}
                  image = {tour.image}
                  tours={tours}
                  setTours={setTours}/>
                })}
            </div>
         </div>;
};

export default Tours;
