import React from 'react'

const sessions = [
    {
        title: "Mock Interview",
        Date: " 24th August , 2022",
        time: " 9:00 AM - 11:00 AM",
    },
    {
        title: "Mock Interview",
        Date: " 24th August , 2022",
        time: " 9:00 AM - 11:00 AM",
    },
    {
        title: "Mock Interview",
        Date: " 24th August , 2022",
        time: " 9:00 AM - 11:00 AM",
    }



]

const SuggestedSession = () => {
    return (
        <div className='w-[355px] flex flex-col items-center justify-center bg-slate-100 p-7 rounded-[15px]'>
            <img src={ require("../../Asset/suggestedSessionimg.png") } alt='logo' className='w-[235px]' />

            <div className='flex flex-col  gap-4 w-full px-5'>
                <div className='flex justify-between'>
                    <h1 className='text-[15px] font-medium leading-[22px]'>Suggested Sessions</h1>
                    <span className='text-[11px] left-4 text-blue-950 font-medium '>See all</span>
                </div>
                <div className='flex  flex-col  items-center gap-[23px]'>                {
                    sessions.map((item, index) => (
                        <div className='flex justify-between items-center w-full' key={ index }>
                            <div className='flex flex-col items-center '>
                                <h1 className='text-[11px] font-medium leading-[14px]'>{ item.title }</h1>
                                <span className='text-[6.44px] font-medium opacity-[50%] leading-[7.69px]'>{ item.Date }</span>
                                <span className='text-[9.84px] font-medium leading-[11.75px]'>{ item.time }</span>


                            </div>
                            <button className=' text-[9.35px] leading-[14px] text-[#894A01] bg-[#FEF3F0]'>Enroll Now</button>
                        </div>

                    ))
                }
                </div>

            </div>
        </div>
    )
}

export default SuggestedSession
