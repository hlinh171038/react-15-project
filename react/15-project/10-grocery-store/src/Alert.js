import React, { useEffect } from 'react'

const Alert = ({type,text,removeAlert}) => {
  useEffect(()=>{
    console.log('tryuiiif')
    let timeOut = setTimeout(()=>{
      removeAlert();
      console.log('dkdkd')
    },3000)
    return()=> clearTimeout(timeOut);
  }, [])
  
  return <div className={`alert alert-${type}`}>{text}</div>
}

export default Alert
