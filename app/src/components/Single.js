import React from 'react'


export const Single = ({
    id,
    image,
    bed,
    bath,
    desc,
    type}) => {
    return (
        <div>
            <h1>Single</h1>
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
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
