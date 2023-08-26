import React from 'react'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { Badge } from '@mui/material';
const BottomBar = () => {
    return (
        <div className=' flex w-full bg-[#22506C]  text-white h-12 md:hidden  justify-around  items-center '>
            <span> <DashboardOutlinedIcon /></span>
            <span><WorkOutlineIcon /></span>
            <span><ChatBubbleOutlineOutlinedIcon /></span>
            <Badge badgeContent={ 4 } variant='dot' color="warning" ><CalendarMonthOutlinedIcon /></Badge>
        </div>
    )
}

export default BottomBar
