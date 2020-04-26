import React from 'react';


const CardName = ({id,name,email}) =>{
    return(
       
           <div className="card" style={{width: '18rem'}}>
        <img src={`https://robohash.org/${id}?size=200x200`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{email}</p>
          <a href="#" className="btn btn-primary friend">Add Friend</a>
        </div>
      </div>
          


       
       
    )
}
export default CardName;