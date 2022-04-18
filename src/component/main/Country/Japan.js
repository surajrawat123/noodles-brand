import React from 'react'
import { useSelector } from 'react-redux'
import Item from '../Item';
import '../css/Item.css'
const Japan = () => {

  const data = useSelector(state => state.CountryBrand);
  const images_brand = useSelector(state => state.ImageBrand);

  return (
    <div className='container'>
      {data.map((e) => (
            <>
             <Item value={e} images={images_brand[Math.floor(Math.random()*7)].Image} />
            </>
        ))}
    </div>
  )
}
export default Japan