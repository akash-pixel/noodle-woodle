import React, { useState, useEffect } from 'react'
import Card from "./Cards";
import "./HomePage.css";

function HomePage() {

  const [data, setData] = useState([]);
  const [images, setImage] = useState([]);

  const fetchData = async( ) => {
    const url = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json';

    const response = await fetch(url).then((res) => {
      if(!res.ok){
        throw new Error("HTTP error "+ res.status );
      }
      return res.json() 
    })
    setData(response);
  } 

  const fetchImages = async( ) => {
    const url = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json';

    const response = await fetch(url).then((res) => {
      if(!res.ok){
        throw new Error("HTTP error "+ res.status );
      }
      return res.json() 
    })
    setImage(response);
  } 

  function getRandomImage(){
    if(!images){
      return "";
    }

    let random = Math.floor(Math.random()*(images.length-1))
    let image = images[random];

    return image.Image;
  }

  useEffect(() => {
    fetchData() ;
    fetchImages();
  }, [])
  

  return (
    <div className='homepage'  >
      {
        data.map((d)=>{
          return <Card data={d} image={ getRandomImage() } />
        })
      }
    </div>
  )
}

export default HomePage