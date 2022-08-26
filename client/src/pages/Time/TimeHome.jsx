// import React, {useEffect, useState} from 'react'

// import { Link } from 'react-router-dom'


// function Products() {

//     const [products, setProducts] = useState([])
//     const [value,setValue] = useState(0)

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
     

//     }

//     const Monday =()=>{

//         setValue(1)
//     }
    
//     const Tuesday =()=>{

//         setValue(2)
//     }
     
    
//     const Thursday =()=>{

//         setValue(3)
//     }
//     const Friday =()=>{

//         setValue(4)
//     }
//     const WednesDay =()=>{

//         setValue(7)
//     }
//     const Sunday =()=>{

//         setValue(5)
//     }
//     const Saturday =()=>{

//         setValue(6)
//     }

//     console.log(value)

//     if(value===1){
//         return(
//             <>
//                 <h1>Hyy Dear </h1>
//             </>
//         )
//     }
//     else if(value ===2){
//         return(
//             <>
//                  <h1>Hello 2</h1>
//             </>
//         )
//     }
//     else if(value ===3){
//         return(
//             <>
//                  <h1>Hello 3</h1>
//             </>
//         )
//     }
     
//     else if(value ===4){
//         return(
//             <>
//                  <h1>Hello 4</h1>
//             </>
//         )
//     }
     
//     else if(value ===5){
//         return(
//             <>
//                  <h1>Hello 5</h1>
//             </>
//         )
//     }
     
//     else if(value ===6){
//         return(
//             <>
//                  <h1>Hello 6</h1>
//             </>
//         )
//     }
     
//     else if(value ===7){
//         return(
//             <>
//                  <h1>Hello 7</h1>
//             </>
//         )
//     }
     
     
     

//     return (
//         <div>
//             <Link to='/admin/products/create' className='btn'>+</Link>
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
//                     <td>{p.day}</td>
//                     <td>{p.date}</td>
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
// <div style={{display:"flex"}}>            <div onClick={Monday}>
//                        <button>Monday</button>
//             </div>

//             <div onClick={Thursday}>
//                        <button>Tuesday</button>
//             </div>
//             <div onClick={Tuesday}>
//                        <button>Tuesday</button>
//             </div>
//             <div onClick={WednesDay}>
//                        <button>WednesDay</button>
//             </div>
//             <div onClick={Friday}>
//                        <button>Friday</button>
//             </div>
//             <div onClick={Saturday}>
//                        <button>Saturday</button>
//             </div>
//             <div onClick={Sunday}>
//                        <button>Sunday</button>
//             </div>
// </div>

      
//         </div>
//     )
// }

// export default Products
