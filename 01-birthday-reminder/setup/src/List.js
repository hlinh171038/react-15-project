import React from 'react';

const List = ({dataBirthday}) => {
  return (
    <>
      {dataBirthday.map(item =>{
        console.log(item.name)
        const {id,name,age,image} = item;
        //console.log(name)
        return  <div className='person'>
                  <img src={image} alt={name}/>
                  <p>{name}</p>
                  <h4>{age}</h4>
                </div>
        
      })}
    </>
  );
};

export default List;
