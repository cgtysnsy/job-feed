"use client"
import React, { useEffect, useState, useContext } from 'react';
import {JobContext} from "../context/JobContext"


const DataFetcher = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const [perPage, setPerPage] = useState(5);

    const {setError, setLoader, setJobFeedData}= useContext<any>(JobContext)
    const URL = "https://hacker-news.firebaseio.com/v0/jobstories.json"

    useEffect(() => {
        const fetchData = async() => {
            setLoader(true);
            
            try {
            const response = await fetch(URL);
            const data = await response.json();
                console.log(data.splice(pageNumber * perPage, perPage))
                setJobFeedData(data)

            }catch (error) {
            setError(error)
       
            } finally { setLoader(false) }
            
        }
        fetchData()
    },[])
  return null
}

export default DataFetcher
