import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index}) => {
  const [alerts,setAlerts] =useState(false)
  let rgbColor = rgb.join(',');
  let hex = rgbToHex(...rgb)
  console.log(rgbColor)
  useEffect(()=>{
    let timeOut = setTimeout(()=>{
      setAlerts(false)
    },3000);
    return ()=> clearTimeout(timeOut);
  })
  return <div className={`color ${index > 10 && 'color-light'}`} 
              style={{'backgroundColor':`rgb(${rgbColor})`}}
              onClick={()=>{
                setAlerts(true);
                navigator.clipboard.writeText(hex);
              }}
              >
            <p className='percent-value'>{weight}%</p>
            <p className='color-value'>{hex}</p>
            <p className='alert'>{alerts&& 'coppied the clipboard'}</p>
          </div>
}

export default SingleColor
