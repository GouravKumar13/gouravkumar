import React from 'react'
import JobSearch from './jobListing-jobSearch/jobSearch'
import SelectedFilters from './jobListing-jobSearch/SelectedFilters'
import MyJobs from './jobListing-jobSearch/myJobs'
import SuggestedSession from './jobListing-jobSearch/suggestedSessions'
import UpcomingEvent from './jobListing-jobSearch/upcomingEvents'

const JobSection = () => {
    return (
        <div className='absolute flex  flex-col md:flex-col xl:flex-row  gap-[84px] top-19 left-1 md:top-[120px] md:left-[165px] lg:w-[879px]'>
            <div>
                <JobSearch />
                <SelectedFilters />
                <MyJobs />
            </div>
            <div className='md:flex hidden gap-[56px] xl:flex-col'>
                <SuggestedSession />
                <UpcomingEvent />
            </div>
        </div>
    )
}

export default JobSection
