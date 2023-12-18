"use client"
import React, { useEffect, useState, useContext } from 'react';
import {JobContext} from "../context/JobContext"


const DataFetcher = () => {
   const [pageNumber, setPageNumber] = useState(0);
   const [perPage, setPerPage] = useState(5);
   const [jobIds, setJobIds] = useState([]);
//   const [endReached, setEndReached] = useState(false);

    const {setError, setLoader, setJobFeedData,jobFeedData}= useContext<any>(JobContext)
    const URL = "https://hacker-news.firebaseio.com/v0/jobstories.json"

    useEffect(() => {
        fetchData() 
    }, [])

    const fetchData = async() => {
        setLoader(true);
        
        try {
        const response = await fetch(URL);
        const data = await response.json();
            // console.log(data.splice(pageNumber * perPage, perPage))
            setJobIds(data)
            console.log(data)
             fetchAllMetadata(data.splice(pageNumber * perPage, perPage));
        }catch (error) {
        setError(error)
   
        } finally { setLoader(false) }
        
    }

    const fetchAllMetadata = (jobIds: [Number]) => {
        console.log(jobIds)
        jobIds.forEach(async (postId) => {
            try { 
                const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${postId}.json`);
                const data = await response.json();
                setJobFeedData((feeds)=> [...feeds,data])
              
            } catch (error) {
             setError(error)
         }
        });
    };
    
  return null
}

export default DataFetcher
