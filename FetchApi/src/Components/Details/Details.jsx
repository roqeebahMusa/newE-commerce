import "./Details.css"
import axios from "axios"
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import { useDispatch } from 'react-redux';
import {addToCart, total} from "../../Features/Features.jsx"
import Swal from'sweetalert2'

const Details = () => {
  const {id} = useParams()
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()

  async function getProducts() {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log(res.data);
      setProducts(res.data);
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
    <div className='Details-Holder'>
      <div className='Details-card'>
        <div className='Details-image-holder'>
        <img src={products.image} alt="productImage"  className="Detail-Image"/>
        </div>
        <div className='Details-Details'>
          <div>
            <h3>Title: {products.title}</h3>
            <p>Category: {products.category}</p>
            <p>Description: {products.description}</p>
            <br />
            <h4>Price: $ {products.price}</h4>
            <h5>Rating: 3.5</h5>
          </div>
          <div className='Detail-button' onClick={() => {dispatch(addToCart(products)); dispatch(total ());
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Item has been added to Cart',
              showConfirmButton: true,
              timer: 2000
            })
          }}> <p className='P'> Add To Cart</p>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details