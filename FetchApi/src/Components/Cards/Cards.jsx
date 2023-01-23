import React from 'react'
import "./Cards.css"
import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import Loading from "../Loading/Loading"
import { useDispatch } from "react-redux";
import {bringProducts} from "../../Features/Features"


const Cards = ({theme}) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  async function getProducts() {
    try {
       setLoad(true)
      const res = await axios.get("https://fakestoreapi.com/products");
      console.log(res.data);
      setProducts(res.data);
      dispatch(bringProducts (res.data))
       setLoad(false)
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='Card'>
      
      {
   load ? <Loading /> :  products?.map((item) => (
    <Link id={item.id} className='Card-item' to={`./detail/${item.id}`} style={{backgroundColor: theme? 'white': null}}>
      <div className='Products'>
      <img src={item.image} className="card-img"/>
      <p className='Price'>{item.category}</p>
      <p className='Price'>Price : {item.price}</p>
      </div>
      <div>
      </div>
    </Link>
  ))
      }
    </div>
  )
}

export default Cards