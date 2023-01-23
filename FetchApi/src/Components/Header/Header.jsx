import axios from "axios"
import "./Header.css"
import Pink from "./Pink.png"
import {useState, useEffect, useContext} from "react"
import {useNavigate} from "react-router-dom"
import Theme from "./Theme"
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { ThemeContext } from '../../Api/Context'



const Header = ({color, change}) => {
  const {state} = useContext(ThemeContext);
 const navigate = useNavigate()

  const [drop, setDrop] = useState(false)
  const [item, setItem] = useState([])
  const amount = useSelector((state) => state.commerce.amount);

  const dropdown = (
    <div className='drop-list'>

       {item?.map((i)=>(

      <NavLink className='List' key={[i]} to={`/categories/${i}`}><p key={[i]} className='List-item' >{i}</p></NavLink> 

       )
      )
  }
    </div>
  )
  async function getItem(){
    const res = await axios.get(`https://fakestoreapi.com/products/categories`)
    setItem(res.data)
  }
  
  const activeColorObject = {
    color : change ? "white" : "black",
    textDecoration: "none",
    fontWeight: 550,
    
  }

  const colorObject = {
    textDecoration: "none",
    fontWeight: 550,
    color: "white",
  }

  useEffect(()=>{
    getItem()
  }, [])
 

  return (
    <div className='Header' style={{backgroundColor: state ? "grey" : undefined}}>

      <div className='Header-Logo'>

        <img className='Shop' src={Pink} onClick={() => navigate("/")} />

      </div>

      <div className='Header-Links'>

         <NavLink to="/" style={({isActive}) => isActive ? activeColorObject : colorObject}> <p className='nav1'>HOME</p></NavLink>
         
         <NavLink to="/categories" style={({isActive}) => isActive ? activeColorObject :colorObject} > 

         <div className='DropDown' onMouseEnter={()=>{setDrop(!drop)}} onMouseLeave={()=>{setDrop(!drop)}}><p className='nav1'>CATEGORY</p>

           {drop && <div className='invisible'></div>}

           {drop && dropdown} </div></NavLink>

          <NavLink to='/Cart' style={({isActive}) => isActive ? activeColorObject : colorObject}>{" "}<p className='nav1'>CART {amount}</p></NavLink>

      </div>

      <div className='Header_Toggle'>
        <Theme theme={color} toggler={change}/>
            </div>
    </div>
  )
}

export default Header