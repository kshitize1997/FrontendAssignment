import React from "react";

const Card = (props) => {
    return(
        <div className="card text-center mx-auto mt-3" id={props.cardID}>
            <div className="card-header">
                <h5>{props.cardTitle}</h5>
            </div>
            <div className="card-body">
                {props.cardBody}               
            </div> 
        </div>
    );
}

export default Card;