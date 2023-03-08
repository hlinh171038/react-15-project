import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(0)
  const {id,name,job,image,text} = people[index]

  const check =(number)=>{
    if(number >people.length -1){
      return 0
    }
    if(number <0){
      return people.length -1;
    }
    return number;
  }
  const handlePrev = () =>{
    setIndex(index =>{
      let newIndex = index -1;
      return check(newIndex);
    })

  }

  const handleNext = () =>{
    setIndex(index =>{
      let newIndex = index +1;
      return check(newIndex);
    })
  }

  const handleRandom = ()=>{
    let randomReview = Math.floor(Math.random() *people.length);
    setIndex(randomReview);
  }

  return <artical className="review">
            <div className='img-container'>
              <img src={image} alt={name} className="person-img"/>
              <span className='quote-icon'>
                <FaQuoteRight/>
              </span>
              <h4 className='author'>{name}</h4>
              <p className='job'>{job}</p>
              <p className='text'>{text}</p>
              <div className='button-conatainer'>
                <button className='prev-btn' onClick={handlePrev}>
                  <FaChevronLeft/>
                </button>
                <button className='next-btn' onClick={handleNext}>
                  <FaChevronRight/>
                </button>
                <button className='random-btn' onClick={handleRandom}>suprise hoi me</button>
              </div>
            </div>
          </artical>;
};

export default Review;
