import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor] = useState('')
  const  [error,setError] = useState(false);
  const [lists,setLists] = useState(new Values('#f15025').all(10))

  const handleSubmit = (e) =>{
    try {
      e.preventDefault();
      let colors = new Values(color).all(10);
      setLists(colors)
    } catch (error) {
      setError(true);
      console.log(error)
    }
  }
  return <div className='section'>
          <div className='container'>
            <h3 className='title'>Color Generate</h3>
            <form onSubmit={handleSubmit}>
              <input type='text' 
                     className='input' 
                     value ={color} 
                     placeholder="#f15025"
                     onChange ={(e)=>setColor(e.target.value)}
                     />
              <button type='submit' className='btn'>submit</button>
            </form>
            
          </div>
          <div className='container-list'>
              {lists.map((list,index )=>{
                return <SingleColor key={index} {...list} index={index}/>
              })}
          </div>
        </div>
}

export default App
