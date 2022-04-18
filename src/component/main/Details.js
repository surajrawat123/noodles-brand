import React from 'react'
import { useEffect , useState } from 'react'
import Item from './Item'
import { useDispatch, useSelector } from 'react-redux'
import './css/Item.css'

const Details = () => {
  const [data ,setData] = useState([]);
  const images_brand = useSelector(state => state.ImageBrand);
  const dispatch = useDispatch();
  const url = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json';
  const imageurl = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json'; 
  
  function uniqueCountry(value){
      var unique_country = [];
      unique_country.push(value[0].Country);
      for(var i=1 ; i<value.length ; i++){
          if(!unique_country.includes(value[i].Country)){
              unique_country.push(value[i].Country);
          }
      }
      dispatch({type:'unique',payload:unique_country});
  }

  async function fetchApi() {
      const res = await fetch(url);
      const value = await res.json();
      setData([...value]);
      dispatch({type:'all-brand',payload:value});
      uniqueCountry(value);
  }
  async function fetchImage(){
      const res = await fetch(imageurl);
      const value = await res.json();
      dispatch({type:'images',payload:value});
  }
  useEffect(() => {
      fetchApi();
      fetchImage();
  },[fetchImage , fetchApi]);

  function randomImage(){
      return images_brand[0].Image;
  }

  return (
    <div className='container'>
        {data.map((e) => (
            <>
              <Item value={e} images=''/>
            </>
        ))}
    </div>
  )
}

export default Details