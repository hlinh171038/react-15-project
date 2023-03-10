import React from 'react'

function Navbar({values,indexs,setIndexs}) {
    const btnCompany =values.map(value =>{
      return value.company
    })
    console.log(btnCompany)
  return (
    <div className='navbar-container'>
      {btnCompany.map((btn,index) =>{
        return <button onClick={()=>setIndexs(index)}>{btn}</button>
      })}
    </div>
  )
}

export default Navbar
