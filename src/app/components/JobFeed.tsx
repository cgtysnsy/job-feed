import React from 'react'

// GET API = `https://hacker-news.firebaseio.com/v0/jobstories.json`;
// Metadata GET API = https://hacker-news.firebaseio.com/v0/item/YOUR_POST_ID_HERE.json`
const JobFeed = () => {
  return (
    <div className="container">
      <h1 >Hackernews Jobs</h1>
      <p style={{ fontWeight: '200', textAlign: 'center' }}>
        React the problem statement to start writing your code.
      </p>
      {/* Write your code here */}
    </div>
  );
};

export default JobFeed;
