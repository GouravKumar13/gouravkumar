import { Badge, } from '@mui/material'
import React from 'react'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
const Header = () => {
    return (
        <header className='w-full md:h-[94px] h-[50px] bg-[#22506C] text-slate-500   flex  lg:gap-[4rem] xl:gap-[7rem] items-center px-4'>

            <img src={ require("../Asset/aviate logo.png") } alt='logo' className=' lg:w-[140px]  object-fill hidden lg:block' />
            <div className='absolute flex justify-center left-[20%]  '>
                <img src={ require('../Asset/searchbutton.png') } alt="" className=' w-[12px] top-1.5   md:w-[22px] md:h-[23px] absolute md:top-4 left-[2%]' />
                <input type='search' placeholder='Type for Search.....' className='md:w-[370px] lg:w-[450px] pl-[10%] w-[200px] md:h-[45px] xl:w-[651px] xl:h-[53px] rounded-[12px]  bg-[#F3F3F3]' />
            </div>

            <div className='gap-4 hidden absolute md:flex md:gap-5  lg:gap-[30px] lg:left-[70%] md:left-[80%] '>
                <Badge badgeContent={ 4 } color="primary" >
                    <ChatBubbleIcon className='text-white  ' />
                </Badge>
                <Badge badgeContent={ 4 } color="primary">
                    <NotificationsIcon className='text-white' />
                </Badge>
                <Badge badgeContent={ 4 } color="primary">
                    <TurnedInIcon className='text-white' />
                </Badge>
            </div>

            <div className='flex items-center absolute lg:left-[85%] left-0 ' >

                <img alt="Remy Sharp" src={ require("../Asset/user.png") } className=" p-2 lg:p-0 w-[60px] md:h-[60px]   " />

                <div className=' flex-col lg:flex hidden'>
                    <p className='md:text-[10px] xl:text-[13px] text-white '>Akash Mishra</p>
                    <span className='bg-white cursor-pointer lg:text-[8px] rounded-sm  text-center'>EDIT MY PROFILE</span>
                </div>
            </div>







        </header>
    )
}

export default Header
