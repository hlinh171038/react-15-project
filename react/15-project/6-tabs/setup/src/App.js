import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import Loading from './component/Loading'
import Tabs from './component/Tabs'
import Navbar from './component/Navbar'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {

  const [loading,setLoading] = useState(true)
  const [values,setValues] = useState([])
  const [indexs,setIndexs] = useState(0);


  const fetchingApi =async() =>{
    try {
      const response = await fetch(url);
      const api = await response.json();
      setValues(api);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error)
    }
  }


  useEffect(()=>{
    fetchingApi()
  },[])

  if(loading){
    return <Loading/>
  }
  return <div className='container'>
    <Navbar  values={values} indexs={indexs} setIndexs={setIndexs}/>
    <Tabs values={values} indexs ={indexs}/>
  </div>
}

export default App
