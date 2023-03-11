import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage =()=>{
  let lists = localStorage.getItem('lists');
  if(lists){
    return JSON.parse(localStorage.getItem('lists'));
  }else{
    return []
  }
}

function App() {
  const [values,setValues] = useState('');
  const [lists,setLists] = useState(getLocalStorage)
  const [alert,setAlert] = useState({show:false, type:'',text:''})
  const [editing,setEditing] = useState(false);
  const [editId,setEditId] = useState(null);
  

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(values)
    if(!values){
      showAlert(true,'danger','please! typing some text..')
    }else if(values && editing){
            setLists(lists.map((item,index)=>{
                if(index ===editId){
                  return [...item,values]
                }
                return item;
            }))
            setValues('')
            setEditId(null)
            setEditing(false)
            showAlert(true,'success','edited success')
    }else{
    let inputValue =e.target[0].value;
    setLists([...lists,inputValue]);
    setValues('')
    }
  }
  
  const handleDelete =(itemDelete) =>{
     let result =  lists.filter((list,index )=>{
        return index !==itemDelete;
      });
    setLists(result);
  }

  const handleCompleted =(itemCompleted)=>{
     let result = lists.find((item,index) =>{
      return index === itemCompleted;
     })
     setEditing(true);
     setEditId(itemCompleted);
     console.log(editId);
     setValues(result);
  }

  const showAlert = (show=false, type='', text ='')=>{
    setAlert({show,type,text})
  }

  useEffect(()=>{
    localStorage.setItem('lists',JSON.stringify(lists))
  },[lists])

  return <div className='grocery-form'>
            <h3 className='title'>Grocery Bud</h3>
            <div className='form-container'>
             {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
                <form className='form-control' onSubmit={handleSubmit}>
                  <input className='input' 
                         type='text' 
                         placeholder='e.g.eggs' 
                         value={values}
                         onChange={(e)=>setValues(e.target.value)}
                         />
                  <button type='submit' className='submit-btn'>{editing?'Edit':'Add New'}</button>
                </form>
                <div className='lists-container'>
                  {lists.map((item,index) =>{
                    return <List  key={index} 
                                  item = {item} 
                                  index={index} 
                                  handleDelete={handleDelete}
                                  handleCompleted={handleCompleted}
                                  />
                  })}
                </div>
                <button className={` ${lists.length !==0 ? 'clear-btn':'none-clear-btn'}`} 
                        onClick={()=>setLists([])}
                        >clear all items</button>
            </div>
          </div>
}

export default App
