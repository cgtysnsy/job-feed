"use client"
import React, { createContext, useState, useContext, ReactNode } from "react";

interface JobContextType {
    jobFeedData: any[];
    setJobFeedData: React.Dispatch<React.SetStateAction<any[]>>,
    error: any;
    setError: React.Dispatch<React.SetStateAction<any[]>>,
    loader: boolean;
    setLoader:  React.Dispatch<React.SetStateAction<boolean>>,
};

export const JobContext = createContext<JobContextType | undefined>(undefined)
//------------------------------------------------------------------------------
interface JobProviderProps{
    children: ReactNode;
}

export const JobProvider: React.FC<JobProviderProps> = ({ children }) => {
    const [jobFeedData, setJobFeedData] = useState<any>([]);
    const [error, setError] = useState<any>(null);
    const [loader, setLoader] = useState<boolean>(false)

    return (
        <JobContext.Provider value={{ jobFeedData, setJobFeedData, error, setError, loader, setLoader }}>
            {children}
        </JobContext.Provider>)
}