import React from 'react'
import techmitelogo from "../../Asset/ProductDesignerLogo.png"
const MyJobs = () => {


    const Applications = [
        {
            title: "Product designer",
            company: "techmint",
            logoImg: techmitelogo,
            type: "On-site",
            location: "Bangaluru,India",
            status: "Rejected",
            salary: " ₹50K - ₹70k ",
            duration: "Per Month"



        },
        {
            title: "Product designer",
            company: "techmint",
            logoImg: techmitelogo,
            type: "On-site",
            location: "Bangaluru,India",
            status: "Rejected",
            salary: " ₹50K - ₹70k ",
            duration: "Per Month"



        },
        {
            title: "Product designer",
            company: "techmint",
            logoImg: techmitelogo,
            type: "On-site",
            location: "Bangaluru,India",
            status: "Rejected",
            salary: " ₹50K - ₹70k ",
            duration: "Per Month"



        },
        {
            title: "Product designer",
            company: "techmint",
            logoImg: techmitelogo,
            type: "On-site",
            location: "Bangaluru,India",
            status: "Rejected",
            salary: " ₹50K - ₹70k ",
            duration: "Per Month"



        },
        {
            title: "Product designer",
            company: "techmint",
            logoImg: techmitelogo,
            type: "On-site",
            location: "Bangaluru,India",
            status: "Rejected",
            salary: " ₹50K - ₹70k ",
            duration: "Per Month"



        },
        {
            title: "Product designer",
            company: "techmint",
            logoImg: techmitelogo,
            type: "On-site",
            location: "Bangaluru,India",
            status: "Rejected",
            salary: " ₹50K - ₹70k ",
            duration: "Per Month"



        },




    ]

    return (
        <section className='w-full mt-3 md:mt-[57px]'>
            <div className=' hidden md:flex w-full justify-between items-center'>
                <h1 className='md:text-[34px] leading-[50.7px] font-medium'>My Jobs</h1>
                <div className='flex flex-col w-[226px] justify-center items-center'>
                    <p className='text-[15px] '> Job search status</p>
                    <select className='bg-slate-100 text-[13px] w-full h-9 text-center  rounded-xl '>
                        <option>🟡 Actively Interviewing</option>
                        <option>🟢 Open to Offer</option>
                        <option>🔴 Looking for Jobs</option>

                    </select>

                </div>

            </div>
            <div className='mt-[16px]'>
                <h1 className='text-[20px] leading-[30px] font-medium'>Applications</h1>
                <div className='mt-2 flex flex-col gap-y-2'>{
                    Applications.map((item, index) => (
                        <div key={ index } className='w-[95vw] md:w-[100%] md:py-2 md:px-3 p-1 m-2 md:m-0 flex-col md:flex-row flex justify-between bg-slate-50 drop-shadow-lg rounded-2xl'>
                            <div className='flex gap-20 md:gap-4 w-[90vw] justify-start md:w-[40%]'>
                                <img src={ item.logoImg } alt="alt" className='w-[50px] h-[50px] md:w-[65px] md:h-[65px] rounded-xl ' />
                                <div className='text-start'>
                                    <h2 className='text-[12px] md:text-[15px] leading-[23px] font-medium'>{ item.title }</h2>
                                    <p className='text-[9px] md:text-[12px] leading-[18px] text-slate-400'><span>{ item.company }</span> ,<span> { item.type }</span></p>
                                    <p className='text-[9px] md:text-[12px] leading-[18px]  text-slate-400'>{ item.location }</p>
                                </div>
                            </div>
                            <div className='flex justify-between py-3  items-center w-[50%]'>
                                <div className='flex md:flex-col items-center justify-center h-full'>
                                    <span className="text-[15px] w-[100px] font-medium">{ item.salary }</span>
                                    <span className='text-[10px] w-[80px]'>{ item.duration }</span>
                                </div>
                                <div className={ `${item.status === "Rejected" ? "bg-red-300" : item.status === "Selected" ? "bg-green-300" : "bg-yellow-100"} rounded-lg  px-3 ` }>
                                    { item.status }
                                </div>

                            </div>
                        </div>
                    ))



                }
                </div>
            </div>

        </section >
    )
}

export default MyJobs
