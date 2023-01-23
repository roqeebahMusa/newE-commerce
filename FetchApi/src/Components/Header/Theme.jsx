import "../../App.css"
// import { useState } from "react"
import { MdOutlineLightMode } from 'react-icons/md';
import { MdOutlineNightlight } from 'react-icons/md';
import { ThemeContext } from "../../Api/Context";
import { useContext } from "react";
const Theme = () => {
   const {state, Toggle} = useContext(ThemeContext)
    return (
        <div className='theme'>
           {state ? <MdOutlineLightMode onClick={() =>{Toggle()} }
          className='tog' /> :
          <MdOutlineNightlight onClick={() => {Toggle()}}
            className='tog' color='white' />}
        </div>
    )
}

export default Theme