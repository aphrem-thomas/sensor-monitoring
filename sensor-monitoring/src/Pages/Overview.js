import React from 'react';
import './Overview.css';

const Overview = ()=>{
    return(
        <div className="overview">
            <div className="heading-overview">Overview</div>
            <div className="text-matter">
            Among the risk factors with serious health issues, air pollution ranks the highest annually. 
            Air pollution is considered as the main cause for the majority of deaths and suffering from chronic diseases.  
            To address this issue, we believe, active participation from the public on collecting and interpreting data, educating to change the behavior of individuals and industries, and helping to control and manage pollution sources effectively is crucial. 
            Fortunately, this goal appears to be achievable due to the recent revolution of electronic and computing technologies.  
            It is possible that small,  portable,  and off-the-shelf pollution sensors along with low power processors and wireless communication modules can be bought at low-cost. 
            Also, to make the data available to different users we need to build a system specific software which focuses on different level of users. 
            The need for user-specific software for general purposes are consistently increasing. 
            The two focused tasks are first is a system framework on how to build a low-cost portable pollution monitoring system and next is building user-specific software from scratch that will focuses on different user groups. 
            Contributing to achieve this task is the objective of this work.  
            We propose a portable pollution monitoring system framework using low cost off the shelf pollution sensors and demonstrate its feasibility with the software that we built in our lab.
            </div>        
       </div>
    )
}

export default Overview;