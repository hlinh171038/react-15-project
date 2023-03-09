import React,{useState} from 'react';
import data from './data.js';
import Accordation from './components/Accordation'
import './App.css';

function App() {
  const [question,setQuestion] = useState(data);
  console.log(question)
  return <div className='container'>
    {question.map(item =>{
      return <Accordation {...item}/>
    })}
  </div>
}

export default App;
