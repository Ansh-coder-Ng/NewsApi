import React from "react";
import '../css/NewsCard.css'
function NewsCard(prop)
{
    return(
        <div className="grid-content">
            <img src={prop.data.urlToImage}></img>
            <span className="title">Title-{prop.data.title}</span>
            <span className="description">Description-{prop.data.description}</span>
        </div>
    )
}
export default NewsCard;
