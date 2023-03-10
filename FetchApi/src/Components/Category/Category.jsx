import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./Category.css"
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'


const  Category = ({color}) => {

  const { cs } = useParams()
     
  const [category, setCategory] = useState([]);
  const [ load, setLoad ] = useState(false)

  async function getCategory() {
    setLoad(true)
    const res = await axios.get(`https://fakestoreapi.com/products/category/${cs}`)
    setCategory(res.data)
    setLoad(false)
  }

  useEffect(() => {
    getCategory()
  }, [cs])
  return (
    <div className='Category-Holder'>
    <div className='Category-Item-Holder'>

      {
        load? <Loading/> :  category?.map((item) => (
        <Link key={item.id} className='Category-Place-holder' to={`/detail/${item.id}`} style={{ backgroundColor: color ? 'white' : null }}>
          <div className='Category-Image-holder'>
            <img src={item.image} className='Category-Image' />
          </div>
          <div className='Category-Details'>
            <p>{item.title}</p>
            <h4> Price: ₦ {item.price}</h4>
            <h4>Ratings: 4.9</h4>
          </div>
        </Link>
      ))
      }
    </div>
  </div>
)
}

export default Category