import React from "react";
import '../css/NewsCard.css'
function NewsCard(data)
{
    console.log(data)
    return(
        <div className="grid-content">
            <span className="title">Title-{data.data.title}</span>
            <span className="description">Description-{data.data.description}</span>
        </div>
    )
}

export default NewsCard;
