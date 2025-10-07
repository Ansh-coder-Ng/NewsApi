import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import '../css/Home.css'
function Home()
{
    const [news,setNews]=useState([])
    const api_key=`101e80e17c7e4665adc0ee585307878e`
    const getApi=async()=>{

        try{
            const response=await fetch(`https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=${api_key}`)
            const data=await response.json()
            setNews(data.articles)
        }
        catch(error)
        {
            console.log(error)
        }
    }

    useEffect(()=>{
        getApi()
    },[])
    return(
        <div className="grid-container">
            {news.map((data)=>{
                return <NewsCard data={data}/> 
            })}
        </div>

    )

}

export default Home