import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import Card from "./Cards";

function Country() {

    let params = useParams();
    
    const [country, setCountry] = useState("")
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
      setCountry(params.country)
      fetchData() ;
      fetchImages();
    }, [params.country])

    const countryStyle = {
        "display": "flex",
        "flex-wrap": "wrap",
        "margin": "10px",
      }

  return (
    <div className='country' style={countryStyle} >
      {
        data.map((d)=>{
          return d.Country===country && <Card data={d} image={ getRandomImage() } />
        })
      }
    </div>  
  )
}

export default Country