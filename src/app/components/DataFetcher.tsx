"use client"
import React, { useEffect, useState, useContext } from 'react';
import {JobContext} from "../context/DataContext"


const DataFetcher = () => {
    const {setError, setLoader, setJobFeedData}= useContext<any>(JobContext)
    const URL = "https://hacker-news.firebaseio.com/v0/jobstories.json"

    useEffect(() => {
        const fetchData = async() => {
            setLoader(true);
            
            try {
            const response = await fetch(URL);
            const data = await response.json();
                console.log(data)
                setJobFeedData(data)
            }catch (error) {
            setError(error)
       
            } finally { setLoader(false) }
            
        }
        fetchData()
    },[])
  return (
    <div>
      
    </div>
  )
}

export default DataFetcher
