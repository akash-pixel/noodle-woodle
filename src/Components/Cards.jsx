import React from 'react'
import "./Cards.css";

function Cards({data, image}) {
    
  return (
    <div className='card' >
        <img src={image} alt='' />
        <p className="variety">{data.Variety}</p>
        <div className="detail">
            <p className="key">Brand: </p>
            <p className="value">{data.Brand}</p>
        </div>
        <div className="detail">
            <p className="key">Country: </p>
            <p className="value">{data.Country}</p>
        </div>
        <div className="detail">
            <p className="key">Rating: </p>
            <p className="value">{data.Stars}</p>
        </div>
        { data["Top Ten"] !== "NaN" && 
           <div className="detail">
              <p className="key">Top Ten: </p>
              <p className="value">{data["Top Ten"]}</p>
            </div>  }
    </div>
  )
}

export default Cards