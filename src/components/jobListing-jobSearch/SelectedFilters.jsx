import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const SelectedFilters = () => {

    const filters = ["UX Design", "FullTime", "On-site", "Delhi NCR", "Bangalore"]
    return (
        <div className='flex-wrap md:w-full md:h-[42px] flex gap-1 md:gap-[15.56px] '>
            { filters.map((item, index) => (
                <div className='flex flex-wrap w-[80px] md:w-[127px] items-center p-1 justify-around bg-[#F3F3F3] rounded-[25px]  ' key={ index }>
                    <CloseIcon className='bg-slate-300 rounded-full p-1 w-1 h-1' />
                    <p className='text-[10px] md:text-xs'>{ item }</p>
                </div>
            )) }
        </div>
    )
}

export default SelectedFilters
