import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'


function TodoSearch(){
    const {searchValue,setSearchValue } = React.useContext(TodoContext)

    return[ <input 
        className="TodoSearch" 
        placeholder='Buscar'
        // value={searchValue}
        onChange={(event)=>setSearchValue(event.target.value)}
        />,
        <p>{searchValue}</p>
    ]
    ;
}

export {TodoSearch }