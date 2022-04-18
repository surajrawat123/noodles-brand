import React from 'react'
import './css/Item.css';
import { Link } from 'react-router-dom';
import { useSelector  , useDispatch } from 'react-redux';

const LinkPage = (props) => {
   const dispatch = useDispatch()
   const allBrand = useSelector(state => state.AllBrand);
   function handleClick(){
       const country_data = allBrand.filter((e)=> e.Country===props.value);
       dispatch({type:props.value , payload:country_data});
   }

  return (
    <div className='small-card'>
        <Link className='link' onClick={handleClick} to={`${props.value}`}> {props.value} </Link>
    </div>
  )
}

export default LinkPage