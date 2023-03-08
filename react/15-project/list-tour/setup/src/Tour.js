import React, { useState } from 'react';

const Tour = ({id,name,image,price,info,tours,setTours}) => {
  const [readMore,setReadMore] = useState(false)
  
  let handleRemoveTour =()=>{
    setTours(tours.filter(tour => tour.id !==id));
  }
  return <article className="single-tour">
            <img src={image} alt={name} />
            <footer>
              <div className="tour-info">
                <h4>{name}</h4>
                <h4 className="tour-price">${price}</h4>
              </div>
              <p>
                {readMore ? info :info.substring(0,200)}........
                <button onClick={() =>setReadMore(!readMore)}>{readMore ? 'read less' :'read more'}</button>
              </p>
              <button className="delete-btn" onClick={handleRemoveTour}>
                not interested
              </button>
            </footer>
          </article>;
};

export default Tour;
