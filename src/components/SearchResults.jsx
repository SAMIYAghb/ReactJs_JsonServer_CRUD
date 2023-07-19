import React from 'react'

const SearchResults = ({results}) => {
  return (
    <div>
        <h4 className='text-center'> Search Results</h4>
        
        <div className="card-body">
                    
                    <table className='table table-bordered'>
                        <thead className='bg-black text-white'>
                            <tr>
                                <td>ID</td>
                                <td>Product Name</td>
                                <td>Price</td>
                                <td>Quantity</td>                                
                            </tr>
                        </thead>
                        <tbody>
                        {
                            results 
                            .map((result, index) =>(
                                    <tr key={result.id}>
                                        <td>{result.id}</td>
                                        <td>{result.name}</td>
                                        <td>{result.price}</td>
                                        <td>{result.quantity}</td>                                   
                                    </tr>
                                ))
                        }
                        </tbody>
                    </table>
                        
        </div>
    </div>
  )
}

export default SearchResults