"use client"
import React, { useContext } from 'react';
import { JobContext } from "../context/JobContext";
import moment from 'moment';

// GET API = `https://hacker-news.firebaseio.com/v0/jobstories.json`;
// Metadata GET API = https://hacker-news.firebaseio.com/v0/item/YOUR_POST_ID_HERE.json`
const JobFeed = () => {
  const { jobFeedData, loader } = useContext<any>(JobContext)
  console.log(jobFeedData,"renderpage")
  return (
    <div className="allPostsContainer">
      <h1 >Hackernews Jobs</h1>
      <p style={{ fontWeight: '200', textAlign: 'center' }}>
        React the problem statement to start writing your code.
      </p>
      {jobFeedData.map((feed, idx) => <div className='postContainer'>
        <p>
          ID: <span>{feed?.id}</span>{' '}
        </p>
        <h1>{feed?.title}</h1>
        <p>{moment(feed?.time).format('Do MMM YYYY hh:mm a')}</p>
        <p>
          Posted by: <span>{feed?.by}</span>{' '}
        </p>
      </div>)}
        
    </div>
  );
};

export default JobFeed;
