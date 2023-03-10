import React, { useState } from 'react';
import data from './data';
function App() {
  const [counts,setCounts]= useState(0)
  const [datas,setDatas] = useState(data)
  const [texts,setTexts] = useState([])
  
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(e.target[0].value)
  }

  const handleUpdateCount =(e)=>{
    setCounts(e.target.value);
  }

  const handleText =(counts)=>{
    let pagra;
    if(counts>datas.length -1){
      pagra = datas.splice(0,datas.length -1);
      setTexts(pagra);
      return;
    }
    if(counts <=0 ){
      pagra = datas.splice(0,1);
      setTexts(pagra);
      return;
    }
    pagra = datas.slice(0,counts);

    setTexts(pagra);

  }
  return (
      <div className='container'>
        <div className='form-container'>
          <form className='lorem-form' onSubmit={handleSubmit}>
            <label htmlFor='amount'>
              paragraph:
            </label>
            <input type='number' value={counts} id="amount" onChange={handleUpdateCount}/>
            <button type='submit' className='btn' onClick={()=>handleText(counts)}>Submit</button>
          </form>
          <div className='content-container'>
            {texts.map(item=>{
              return <p>{item}</p>
            })}
          </div>
        </div>
      </div>
    )
}

export default App;
