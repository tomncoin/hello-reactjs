import React from "react";

// import './Card2.css';

function Card2(props){
    const {imageUrl, children} = props;
    console.log(imageUrl);
    return(
        <div className="card">
            <div className="card-cover" style={{backgroundImage: `url${imageUrl}`, height:"350px"}}></div>
            <div className="card-body">{children}</div>
        </div>
    );
}

export default Card2;