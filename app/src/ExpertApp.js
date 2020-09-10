import React, { useState } from 'react';
import { Search } from './components/Search';
import { List } from './components/List';



export const ExpertApp = ( { defaultSearch = [] }) => {
    
    const [search, setSearch] = useState( defaultSearch );

    return (
        <div>
            <h1>List</h1>
            <Search setSearch={setSearch}/>
            <ol>
                {   
                    search.map( features => (
                        <List 
                            key={ features }
                            search={ features }
                        />
                    ))
                   
                }
            </ol>
        </div>
    )
}