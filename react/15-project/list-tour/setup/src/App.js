import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'


function App() {
  const [ loading,setLoading] = useState(true)
  const [tours, setTours] = useState([]);
  const fetchingApiTour = async ()=>{
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
    
}

useEffect(()=>{
  fetchingApiTour()
},[]);

if(loading){
  return <Loading/>
}
if(tours.length === 0){
  return <div>
    <h4> the list is empty</h4>
    <button onClick={fetchingApiTour}>return list</button>
  </div>
}
  return <Tours tours={tours} setTours={setTours}/>

}

export default App
