import React from 'react';

const SearchBox = ({searchChange})=>{
    console.log({searchChange})
    return (
        <div>
             <input placeholder='enter the name' 
             type='search'
             onChange={searchChange} /> 

        </div>
      
    )
    }
export default SearchBox;