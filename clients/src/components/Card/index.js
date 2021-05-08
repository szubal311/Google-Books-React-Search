import React from 'react'

function Card (props) {
    return(
        <div className="card text-center cardText">
            <div className="card-header">
                <h4>{props.heading}</h4>
            </div>
            <div className="card-body text-left">{props.chidren}</div>
        </div> 
    );
}

export default Card;