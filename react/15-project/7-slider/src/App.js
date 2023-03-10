import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import Slides from './components/Slides'
import data from './data';
function App() {
  const [datas,setDatas] = useState(data)
  const [indexs, setIndexs] = useState(0)
  
  const checkSlides = (num)=>{
    if(num >datas.length -1){
      return 0;
    }
    if(num<0){
      return datas.length -1;
    }
    return num;
  }
  const handleNextSlide = ()=>{
    setIndexs(index=>{
      let nextIndex = index+1;
      return checkSlides(nextIndex);
    })
  }
  const handlePrevSlide = ()=>{
    setIndexs(index=>{
      let nextIndex = index-1;
      return checkSlides(nextIndex);
    })
  }
  console.log(datas);
  return <div className='section'>
          <div className='prev' onClick={handlePrevSlide}><FiChevronLeft/></div>
            <Slides datas={datas} indexs={indexs}/>
          <div className='next' onClick={handleNextSlide}><FiChevronRight/></div>
        </div>;
}

export default App;
