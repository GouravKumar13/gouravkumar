import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Badge } from '@mui/material';


const SideBar
    = () => {
        return (
            <>

                <div className='w-[121.55px] h-[120vh] bg-[#22506C] sticky  md:flex hidden flex-col justify-between py-10 text-white items-center '>
                    <span><MenuIcon sx={ { width: 30, height: 30 } } /></span>
                    <div className='flex flex-col  w-full items-center md:gap-[50px] lg:gap-[45px] md:top-[135px] absolute xl:top-[166px]'>
                        <span className=' flex-col items-center  flex'><DashboardOutlinedIcon className='w-[22px]' sx={ { width: 25, height: 25 } } /><p className='md:hidden lg:block'>
                            Dashboard
                        </p>
                        </span>

                        <span className=' flex-col items-center flex'><WorkOutlineIcon sx={ { width: 25, height: 25 } } /><p className='md:hidden lg:block'>
                            My Jobs
                        </p></span>
                        <span className=' flex-col items-center flex'> <ChatBubbleOutlineOutlinedIcon sx={ { width: 25, height: 25 } } /><p className='md:hidden lg:block'>
                            Messages
                        </p></span>
                        <span className=' flex-col items-center text-center flex'><Badge badgeContent={ 4 } color="primary" ><CalendarMonthOutlinedIcon sx={ { width: 25, height: 25 } } /></Badge><p className='md:hidden lg:block'>
                            Upcoming <br /> Events
                        </p></span>

                    </div>
                    <div className='flex flex-col items-center  gap-[52px] w-full '>

                        <button className='bg-white text-black px-4 text-[14px] rounded-[7px]'>HELP</button>
                        <span><LogoutOutlinedIcon sx={ { width: 30, height: 30 } } /></span>

                    </div>



                </div>
            </>
        )
    }

export default SideBar

