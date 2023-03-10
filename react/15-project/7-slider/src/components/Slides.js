import React from 'react'

function Slides({datas,indexs}) {
    const {id,image,name,title,quote} = datas[indexs];
  return (
    <artical className="artical">
      <div className='img-container'>
        <img src={image} alt={name} className="img"/>
      </div>
      <p className='name'>{name}</p>
      <p className='title'>{title}</p>
      <p className='text'>{quote}</p>
    </artical >
  )
}

export default Slides
