import React from 'react'
import './css/Item.css'
const Item = (props) => {

  if (props.images !== '') {
    return (
      <div className='card'>
        <h3>{props.value.Brand}</h3>
        <p>{props.value.Variety} <span>{props.value.Style}</span></p>
        <h4>{props.value.Country}</h4>
        <h4>Rating : {props.value.Stars}</h4>
        <p>{props.value['Top Ten']}</p>
        <img src={props.images} alt="brand image" />
      </div>
    )
  }else{
    return (
      <div className='card'>
        <h3>{props.value.Brand}</h3>
        <p>{props.value.Variety} <span>{props.value.Style}</span></p>
        <h4>{props.value.Country}</h4>
        <h4>Rating : {props.value.Stars}</h4>
        <p>{props.value['Top Ten']}</p>
      </div>
    )
  }
}

export default Item