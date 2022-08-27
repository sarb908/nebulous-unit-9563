// import React, {useEffect, useState} from 'react'

// import { Link } from 'react-router-dom'


// function Products() {

//     const [products, setProducts] = useState([])

//     useEffect(() => {
//         fetch('http://localhost:8800/api/products')
//           .then(res => res.json())
//           .then(data => setProducts(data))
//       }, [])


//     const del = (id) => {
//         fetch(`http://localhost:8800/api/products/${id}`, {
//             method: 'DELETE'
//         });

//         setProducts(products.filter(p => p._id !== id));
//         // console.log(id)

//     }
//     return (
//         <div>
//             <Link to='/admin/products/create' className='btn'>Add Product</Link>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>#Id</th>
//                         <th>time</th>
//                         <th>projectManagement</th>
//                         <th>notes</th>
//                         <th>Image</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {products.map(p => {
//                     return (
                    
//                         <tr key={p.id} >
//                     <td>{p.task}</td>
//                     <td>{p.time}</td>
//                     <td>{p.projectManagement}</td>
//                     <td>{p.notes}</td>
//                     <td><img src={p.image} alt={p.time} width="90" /></td>
//                     <td>
//                         <Link to={`/admin/products/${p._id}/edit`}   className='btn'  >Edit</Link>
//                         <button onClick={() => del(p._id)}>Delete</button>
//                     </td>
//                 </tr>
                   
  
//                     )
//                 })}
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default Products
