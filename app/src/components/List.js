import React, { useState } from 'react'
import { CardList } from './CardList'
import { useFetchHouse } from '../hook/useFetchHouse';

export const List = ({search}) => {

    console.log("hola");
    const { data:houses, loading } = useFetchHouse( search );

    return (
        <div>
            <h1>List</h1>
            <ol>
                {   
                    houses.map( house => (
                        <CardList 
                            key={ house.id }
                            { ...house }
                        />
                    ))
                }
            </ol>
        </div>
    )
}
