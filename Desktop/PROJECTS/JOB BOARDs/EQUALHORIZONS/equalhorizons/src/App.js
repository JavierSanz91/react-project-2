import React, { useEffect, useState } from 'react';
import Superheader from "./modules/Superheader";
import Navigation from "./modules/Navigation";
import Claim from "./modules/Claim";
import Filters from "./modules/Filters";
import Jobs from "./modules/Jobs";
import Footer from "./modules/Footer";
import JobsData from "./JobsData";

export default function App() {
    const [jobCount, setJobCount] = useState(10);

    const jobsElements = JobsData.slice(0, jobCount).map(job => {
        return <Jobs 
            key={job.id}
            jobs={job}
        /> 
    });

    const loadMoreJobs = () => {
        if (jobCount < JobsData.length) {
            setJobCount(jobCount + 10);  // Load 10 more jobs
        }
    };

    const handleScroll = () => {
        const buffer = 200;
        const scrollTop = 'scrollY' in window ? window.scrollY : document.documentElement.scrollTop;

        if (window.innerHeight + scrollTop + buffer >= document.documentElement.scrollHeight) {
            loadMoreJobs();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [jobCount]);

    return (
        <div>
            <Superheader />
            <Navigation />
            <Claim />
            <Filters />
            <div>
                {jobsElements}
            </div>
            <Footer />
        </div>
    );
}
