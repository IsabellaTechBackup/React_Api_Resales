import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Single } from './Single';


export const CardList = ( { 
    id,
    image,
    bed,
    bath,
    desc,
    type } ) => {
    return (
        <div>
            <h1>CardList</h1>
            
            <div className="card ms-3" style={ { maxWidth:540 } }>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={ image } className="card-img" alt={ id } />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title"> { id } </h5>
                            <p className="card-text"> { desc } </p>
                            <p className="card-text">{ bed }</p>
                            <p className="card-text">{ bath }</p>
                            <p className="card-text">
                                <small className="text-muted">{ type }</small>
                            </p>
                            {console.log('hola')/*  <NavLink to={`/house/${id}`}>blah bla

                             </NavLink> */}
                             
                             {/* <Single 
                                id    = {id} 
                                image = {image}
                                bed   = {bed}
                                bath  = {bath}
                                desc  = {desc}
                                type  = {type} />  )> */}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
