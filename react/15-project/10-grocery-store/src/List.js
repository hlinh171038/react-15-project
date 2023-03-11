import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({item,index,handleDelete,handleCompleted}) => {
  return <div className='grocery-item'>
            <p className='title'>{item}</p>
            <button className='edit-btn' onClick={()=>handleCompleted(index)}>
              <FaEdit/>
            </button>
            <button className='delete-btn' onClick={()=>handleDelete(index)}>
              <FaTrash/>
            </button>
          </div>
}


export default List
