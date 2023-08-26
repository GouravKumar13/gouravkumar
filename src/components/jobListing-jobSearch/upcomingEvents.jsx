import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
const UpcomingEvent = () => {


    return (
        <div className='w-[355px] '>
            <div className='flex justify-between m-3'>
                <h1 className='text-[22.6px] leading-[33.89px] '>Upcoming Events</h1>
                <MoreVertIcon sx={ { width: 54.66, height: 28.77 } } />

            </div>
            <div className=' bg-slate-50 flex flex-col items-center  rounded-[12px] '>



                <select className='bg-[#FCFBFF] rounded-[15px] m-3 ml-[53%] text-[11.3px]'>
                    <option> August 2023</option>
                    <option> september 2023</option>
                    <option> october 2023</option>
                    <option> November 2023</option>
                    <option> december 2023</option>

                </select>

                <div className='flex flex-col gap-[14px] justify-center items-center'>
                    <div className='w-[297px] h-[85px] flex justify-between items-center rounded-[8px] bg-slate-100'>
                        <div className='flex flex-col items-center justify-center'>
                            <img src={ require("../../Asset/pestologo.png") } alt='pestologo' className='w-[56.44px] h-[52px]' />
                            <span className='text-[10.49px] leading-[15.74px]'>Pesto</span>
                        </div>
                        <div className='flex flex-col items-center justify-center w-[50%] px-4 border-l-8 drop-shadow-lg border-red-400 rounded-md opacity-[70%]'>
                            <span className='text-[9.5px] leading-[14.25px] font-medium'> Portfolio Presentation</span>
                            <span className='text-[10px] leading-[15px] font-semibold text-[#BC0F0F] '>Tomorrow</span>
                            <span className='text-[9.16px] leading-[13.74px] font-semibold'>  9:00 AM - 11:00 AM</span>
                        </div>
                    </div>
                    <div className='w-[297px] h-[85px] flex justify-between items-center rounded-[8px] bg-slate-100'>
                        <div className='flex flex-col items-center justify-center'>
                            <img src={ require("../../Asset/pestologo.png") } alt='pestologo' className='w-[56.44px] h-[52px]' />
                            <span className='text-[10.49px] leading-[15.74px]'>Vernacular.Ai</span>
                        </div>
                        <div className='flex flex-col items-center justify-center w-[50%] px-4 border-l-8 drop-shadow-lg border-yellow-200 rounded-md opacity-[70%]'>
                            <span className='text-[9.5px] leading-[14.25px] font-medium'> Group Discussion</span>
                            <span className='text-[10px] leading-[15px] font-semibold '>25th August ,2023</span>
                            <span className='text-[9.16px] leading-[13.74px] font-semibold'>  9:00 AM - 10:00 AM</span>
                        </div>
                    </div>
                    <div className='w-[297px] h-[85px] flex justify-between items-center rounded-[8px] bg-slate-100'>
                        <div className='flex flex-col items-center justify-center'>
                            <img src={ require("../../Asset/pestologo.png") } alt='pestologo' className='w-[56.44px] h-[52px]' />
                            <span className='text-[10.49px] leading-[15.74px]'>Pesto</span>
                        </div>
                        <div className='flex flex-col items-center justify-center w-[50%] px-4 border-l-8 drop-shadow-lg border-green-200 rounded-md opacity-[70%]'>
                            <span className='text-[9.5px] leading-[14.25px] font-medium'> Mock Interview Session 1</span>
                            <span className='text-[10px] leading-[15px] font-semibold '>29th August ,2023</span>
                            <span className='text-[9.16px] leading-[13.74px] font-semibold'>  2:00 PM - 4:00 PM</span>
                        </div>
                    </div>


                </div>


            </div>

        </div>
    )
}

export default UpcomingEvent
