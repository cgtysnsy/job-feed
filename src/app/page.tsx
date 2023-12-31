"use client"
import Image from 'next/image'
import styles from './page.module.css'
import JobFeed from './components/JobFeed'
import DataFetcher from './components/DataFetcher'
import { JobProvider } from './context/JobContext'

export default function Home() {
  return (
    <JobProvider>
      <div>
        <JobFeed />
        <DataFetcher/>
      </div>
    </JobProvider>
   
  )
}
