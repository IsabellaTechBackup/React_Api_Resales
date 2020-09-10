import { useState, useEffect } from 'react'
import { getHouses } from '../helpers/getHouses';


export const useFetchHouse = ( {search} ) => {
   
    const [state, setState] = useState({
        Property: [],
        loading: true
    });

    useEffect( () => {

        getHouses(search).then( house => {
            setState({
                Property: house,
                loading: false
            });
            })

    }, [])


    console.log('hola' + state);

    return state; // { data:[], loading: true };


}


