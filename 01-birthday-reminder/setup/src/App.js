import React, { useState } from 'react';
import data from './data';
import List from './List';
import './index.css';
function App() {
  const [dataBirthday,setDataBirthday] = useState(data)
  return <div className='container'>
    <h3> 0 Brithday today</h3>
    <List  dataBirthday={dataBirthday}/>
    <button onClick={()=> setDataBirthday([])}>View all</button>
  </div>;
}

export default App;
