import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import '../css/Home.css'
import axios from 'axios'

function Home()
{
    const [news,setNews]=useState([])
    const api_key=`101e80e17c7e4665adc0ee585307878e`
    const getApi=async()=>{
        try{       
            /*
            fetch(`https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=${api_key}`)
                .then(response=> response.json())
                .then(data=>setNews(data.articles))
            */

            /*
            const response=await axios.get(`https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=${api_key}`)
            console.log(response)
            setNews(response.data.articles) 

            Or 

            axios.get(`https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=${api_key}`)
            .then(response=>setNews(response.data.articles))

            */

        
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
            {news.map((data,index)=>{
                return <NewsCard data={data} key={index}/> 
            })}
        </div>
    )
}
export default Home