import React from 'react';
import Review from './Review';
function App() {
  return <div className='container-all'>
    <div className='title-container'>
      <p class="title">Our Review</p>
      <div className='underline'></div>
    </div>
    <div>
    <Review/>
    </div>
  </div>;
}

export default App;
