import React,{ useEffect, useState} from 'react'
import { useParams ,Link} from 'react-router-dom'

const Details = () => {
  const {id} = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/products/"+id)
    .then((res)=>{
        return res.json()
    })
    .then((data) => { 
        // console.log(data);
        setProducts(data);
        console.log(products);
    })
    .catch((err) => {
        console.log(err.message);
    })
  }, [])
  

  return (
    <div className='container'>
      <h1 className='text-center my-5'>Product Details</h1>
      <div className="card">
        <div className="card-title bg-black text-white">
          <h3 className='p-3'>Product name: {products.name}</h3>  
        </div>
        <div className="card-body">
          <h4>Product price: {products.price} $</h4>
          <h4>Product quantity: {products.quantity}</h4>
        </div>
        
       
      </div>
      <Link to ="/"className='btn btn-danger mt-3 px-5'>Back</Link>
      
    </div>
  )
}

export default Details