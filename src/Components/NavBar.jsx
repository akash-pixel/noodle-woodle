import React from 'react'
// import {Link} from "react-router-dom";

function NavBar() {

    const countries = ["Myanmar", "Singapore", "SG", "Taiwan", "China", "Malaysia","JPN","Thailand" ]
    const brands = [ "MAMA", "Prima", "Prima Taste", "Wugudaochang" , "Tseng Noodles",
                    "MyKuali", "CarJEN", "Maruchan", "Mamee", "Mama", "Nongshim" ]

  return (
    <div className='navbar'>
        
        <ul className="nav nav-pills">
            
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Country</a>
                <div className="dropdown-menu">
                    { countries.map( country => {
                        return <a className="dropdown-item" href={"/country/"+country} key={country}>{country}</a>
                    } ) }
                </div>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Brands</a>
                <div className="dropdown-menu">
                    { brands.map( brand => {
                        return <a className="dropdown-item" href={"/brand/"+brand} key={brand}>{brand}</a>
                    } ) }
                </div>
            </li>
        </ul>
    
    </div>
  )
}

export default NavBar