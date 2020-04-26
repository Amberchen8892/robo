import React from 'react';
import CardName from '../components/CrardName';


const CardList = (props) =>{
    return (
    <div className="grid-container" style={{padding:'5rem'}}>
        {
            props.robots.map((user,i)=>{
                return (
                   
                    <CardName
                    key={i}
                    id={user.id}
                    name={user.name}
                    email={user.email} />
                )
            })
        }
        </div>
    )
}
export default CardList;