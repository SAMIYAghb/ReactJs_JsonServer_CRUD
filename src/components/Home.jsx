import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import SearchResults from './SearchResults';
import Loader from './Loader';


const Home = () => {
    const [products, setProducts] = useState([]);
    const [input, setInput] = useState("");
    const [results, setResults] = useState("");
    const [loader, setLoader] = useState(false);
    // console.log(input);
    const navigate = useNavigate();

    const fetchData =(value) =>{
       
        fetch("http://localhost:8000/products")
        .then((res)=>{
            return res.json()
        })
        .then((data) => { 
            setLoader(true);
            // console.log(data);
            setProducts(data);
            // console.log(products);
            setLoader(false);
        })
        .catch((err) => {
            // console.log(err.message);
        })
    }
    const handleChange = (value) =>{
        setInput(value);
        const results = products.filter(product =>{
            return value 
            && product 
            && product.name 
            && product.name.toLowerCase().includes(value)
        })
        setResults(results)
        console.log(results);
    };
    

    const productDetails =(id) => {
        navigate('/details/'+id);
    };
    
    const productEdit =(id) => {
        navigate('/edit/'+id);
    };

    const productDelete =(id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:8000/products/"+id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    };

    useEffect(() => {
        fetchData()
    }, [])
    
  return (<>
    <h1 className='text-center my-5'>CRUD System Using React JS</h1>
    <div className="container">
            <div className="card">
                <div className="card-title">
                    
                </div>

                <form className="d-flex m-3" role="search">
                    <input 
                    value={input}
                    onChange={(e)=>{handleChange(e.target.value)}}

                    className="form-control me-2" type="search" placeholder="Search..." aria-label="Search"/>
                    
                </form>
                {results && <SearchResults results={results}/> }
                
                

                <div className="card-body">
                    <h2 className='text-center my-3'> Product List</h2>
                    <Link to="/create" className='btn btn-success my-3'>Add Product + </Link>


            {loader ? <Loader/> : 
                <table className='table table-bordered'>
                        <thead className='bg-black text-white'>
                            <tr>
                                <td>ID</td>
                                <td>Product Name</td>
                                <td>Price</td>
                                <td>Quantity</td> 
                                <td className='text-center'>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products 
                                .map((product, index) =>(
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td className='text-center'>

                                            <button 
                                            onClick={()=>{productEdit(product.id)}}
                                            className='btn btn-info text-white'>Edit</button>

                                            <button 
                                            onClick={()=>{productDelete(product.id)}}
                                            className='btn btn-danger mx-2'>Remove</button>

                                            <button 
                                            onClick={()=>{productDetails(product.id)}}
                                            className='btn btn-primary '>Details</button>
                                        </td>
                                        
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
}
                    
                </div>
            </div>
    </div>
    </>)
}

export default Home