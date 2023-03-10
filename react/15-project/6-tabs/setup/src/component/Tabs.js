import React from 'react'

function Tabs({values,indexs}) {
  const {id,title,company,dates,duties} = values[indexs]
  return (
    <div className='tabs-container'>
       <div className='items'>
            <h4 className='items-title'>{title}</h4>
            <button className='item-company'>{company}</button>
            <div className='items-dates'>{dates}</div>
            <ul className='items-duties'>
                {duties.map(duty =>{
                    return <li>{duty}</li>
                })}
            </ul>
        </div>
    </div>
  )
}

export default Tabs
