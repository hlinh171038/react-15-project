import React,{useState} from 'react'
import { AiOutlinePlusSquare,AiOutlineMinusSquare } from "react-icons/ai";

function Accordation({id,title,info}) {
    const [answer,setAnswer] = useState(false)
  return (
    <div className='accordation-artical'>
      <div className='question-container'>
        <div className='title'>{title}</div>
        <button className='title-btn' onClick={()=>setAnswer(!answer)}>
           {answer ? <AiOutlineMinusSquare/>:<AiOutlinePlusSquare/> }
        </button>
      </div>
      {answer && <p className='content'>{info}</p>}
    </div>
  )
}

export default Accordation
