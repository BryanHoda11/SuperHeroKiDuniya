import React, { useContext } from 'react'
import { myListContext } from "../context/context";
import { MdHome } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({ setSidebar, sidebar }) => {
  const { Moviescount } = useContext(myListContext);

  return (
    <>
      <div className="sidebar hidden w-[12%] h-1/2 bg-slate-800 lg:flex flex-col text-white py-10">
        <ul className='flex flex-col ml-6 mr-auto gap-8'>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'cursor-pointer font-bold flex items-center gap-3' : 'cursor-pointer flex items-center gap-3')}><MdHome style={{ fontSize: '23px' }} /> Home</NavLink>
          <NavLink to="/list" className={({ isActive }) => (isActive ? 'cursor-pointer font-bold flex items-center gap-3' : 'cursor-pointer flex items-center gap-3')}><MdOutlineFormatListBulleted style={{ fontSize: '23px' }} /> My List
            {Moviescount > 0 ? (<span className='bg-slate-900 font-normal text-white flex items-center justify-center h-7 w-7 rounded-full text-xs'>{Moviescount}</span>): null} </NavLink>
          <NavLink to="/popular" className={({ isActive }) => (isActive ? 'cursor-pointer font-bold flex items-center gap-3' : 'cursor-pointer flex items-center gap-3')}><IoMdTrendingUp style={{ fontSize: '23px' }} /> Popular</NavLink>
          <li className='cursor-pointer flex items-center gap-3'><IoSettingsOutline style={{ fontSize: '23px' }} /> Settings</li>
        </ul>
      </div>

      {sidebar && <div className="res-sidebar absolute z-10 w-full sm:w-1/2 h-1/2 bg-slate-800 flex lg:hidden flex-col text-white py-10">
        <button onClick={() => setSidebar(false)} className='absolute top-5 right-5 cursor-pointer'><FaTimes /></button>
        <ul className='flex flex-col ml-6 mr-auto gap-8'>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'cursor-pointer font-bold flex items-center gap-3' : 'cursor-pointer flex items-center gap-3')}><MdHome style={{ fontSize: '23px' }} /> Home</NavLink>
          <NavLink to="/list" className={({ isActive }) => (isActive ? 'cursor-pointer font-bold flex items-center gap-3' : 'cursor-pointer flex items-center gap-3')}><MdOutlineFormatListBulleted style={{ fontSize: '23px' }} /> My List
          <span className='bg-slate-900 font-normal text-white flex items-center justify-center h-7 w-7 rounded-full text-xs'>{Moviescount}</span></NavLink>
          <NavLink to="/popular" className={({ isActive }) => (isActive ? 'cursor-pointer font-bold flex items-center gap-3' : 'cursor-pointer flex items-center gap-3')}><IoMdTrendingUp style={{ fontSize: '23px' }} /> Popular</NavLink>
          <li className='cursor-pointer hover:font-bold flex items-center gap-3'><IoSettingsOutline style={{ fontSize: '23px' }} /> Settings</li>
        </ul>
      </div>}
    </>
  )
}

export default Sidebar
