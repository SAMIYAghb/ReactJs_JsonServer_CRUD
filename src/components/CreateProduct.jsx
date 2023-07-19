import React, { useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom';

const CreateProduct = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();

  const handleSubmit=(e)=>{
      e.preventDefault();
      // console.log({id, name, price, quantity});

      const prodata = {name,price,quantity}   

      fetch("http://localhost:8000/products",{
        method: "POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(prodata)
      })
      .then((res)=>{
        alert('Saved successfully');
        navigate('/')
      })
      .catch((err) => {
        console.log(err.message);
    })
  }
 
  return (
    <div>
      <h1 className='text-center my-5'>Create Product</h1>
      <div className="container">
          <form onSubmit={handleSubmit}>
              <div className="card">
                  <div className="card-body">
                      <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group my-3">
                              <label className='mb-2'>Id</label>
                              <input value={id} 
                              disabled="disabled"
                              type="text" className='form-control' />
                            </div>

                            <div className="form-group my-3">
                              <label className='mb-2'>Name</label>
                              <input value={name}
                              onChange={e=>setName(e.target.value)}
                              onMouseDown={e=>setValidation(true)}
                              type="text" className='form-control' 
                              required/>
                              {name.length === 0 && validation &&(<span className='text-danger mt-2'>Enter The Product Name</span>)}
                            </div>

                            <div className="form-group my-3">
                              <label className='mb-2'>Price</label>
                              <input 
                              value={price} 
                              onChange={e=>setPrice(e.target.value)}
                              type="text" className='form-control' />
                            </div>

                            <div className="form-group my-3">
                              <label className='mb-2'>Quantity</label>
                              <input
                              value={quantity}
                              onChange={e=>setQuantity(e.target.value)}
                                type="text" className='form-control' />
                            </div>

                            <div className="form-group my-2">
                              <button type="submit" className='btn btn-primary px-5'>Save</button>
                              <Link to="/" className='btn btn-danger px-5 ms-3'>Back</Link>
                            </div>

                        </div>
                        
                      </div>
                  </div>
              </div>
          </form>
      </div>
    </div>
  )
}

export default CreateProduct