import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Search = ( {
    id,
    image,
    bed,
    bath,
    desc,
    type } ) => {

    const [search,  setSearch]  = useState();
   
    const [beds,  setBed]  = useState();
    const [baths, setBath] = useState()
    

    const handleBedChange = ( e ) => {
        setBed( e.target.value );
    }

    const handleBathChange = ( e ) => {
        setBath( e.target.value );
    }

   const handleClick = () =>  {
        setSearch({
            bed:beds,
            bath:baths
        });
   }


    return (

        <form onSubmit={handleClick}>
            <div className="container">
                <h1>Search</h1>
                <input 
                    placeholder="reference" >
                    
                </input>
                <button 
                    className="btn btn-primary"
                    type="onSubmit  "
                    >
                    buscar
                </button>
                <div className="row">

                    <div className="col-md-6">
                        <p>Habitaciones</p>
                        <select id="bed" onChange={handleBedChange}> 
                            <option value="1"> 1 </option> 
                            <option value="2"> 2 </option> 
                            <option value="3"> 3 </option> 
                            <option value="4"> 4 </option> 
                            <option value="5"> 5 </option> 
                        </select>

                    </div>

                    <div className="col-md-6">
                        <p>Baños</p>
                        <select id="bath" onChange={handleBathChange}>
                            <option value="1"> 1 </option> 
                            <option value="2"> 2 </option> 
                            <option value="3"> 3 </option> 
                            <option value="4"> 4 </option> 
                            <option value="5"> 5 </option> 
                        </select>
                    </div>
                    
                </div>
            </div>
        </form>
    )
}

