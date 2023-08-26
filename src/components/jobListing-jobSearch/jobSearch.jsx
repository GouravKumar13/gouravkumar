import React from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';
import PlaceIcon from '@mui/icons-material/Place';

const JobSearch = () => {
    return (
        <div className=' flex flex-col items-start mb-4 gap-y-3 '>
            <h1 className=' text-sm hidden md:block md:text-2xl font-medium px-1'>Search for Jobs</h1>
            <section className='flex gap-4 lg:gap-x-[27px] h-[40px]  lg:h-[55px] justify-center items-center '>

                <div className='w-52 hidden md:flex md:w-[396px] h-full relative'>
                    <img src={ require('../../Asset/searchbutton.png') } alt="" className=' w-[12px]   md:w-[22px] md:h-[23px] absolute top-[28%] left-[5%]' />
                    <input type="search" placeholder="Search by Job title, company, keywords " className='pl-16 h-full rounded-[14px] bg-slate-100 w-full' />
                </div>
                <div className='md:w-[183px] w-[50%]  md:h-full bg-slate-100 flex items-center  md:justify-around rounded-[12px] text-slate-400'>
                    <PlaceIcon />

                    <select className='bg-slate-100 w-full rounded-[12px]'>
                        <option> AnyWhere</option>
                        <option> Delhi</option>
                        <option> Noida</option>
                        <option> work from home</option>
                        <option> india</option>
                        <option> Surat</option>
                        <option> UP</option>
                    </select>

                </div>
                <div className='flex justify-around items-center w-[50%] md:w-[183.13px] md:h-full rounded-[12px] text-slate-400 bg-slate-100 '>
                    <FilterListIcon />
                    <span>Filters</span>
                    <span className='rounded-full bg-[#22506C] px-1 text-xs'>5</span>
                </div>
            </section>

        </div>
    )
}

export default JobSearch
