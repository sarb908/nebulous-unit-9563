// import {useState,useEffect} from "react"
// import axios from "axios"
// import './App.css';
// import React from 'react'


// function ProductCreate() {

// //   const [timedata,setTimedata] = useState([])
//   // const [time1,setTime1] = useState(time[0].time)


//   const [task, settask] = useState();
//   const [time, setTime] = useState(0);
//   const [projectManagement, setProjectManagement] = useState('');
//   const [notes, setNotes] = useState('');


//  console.log(time)

//   useEffect(() => {
  


   
    
//   }, [])
  



// const handleSubmit =()=>{
//   let payload=  {
//     task,time,projectManagement,notes
//   }
  

//   axios({
//     url: "http://localhost:8800/api/products/create",
//     method: "Post",
//     data:payload
     
    
//   })
//     .then((res) => {
     
//       console.log(res.data)
//     })
//     .catch((err) => {
//       console.log(err);
    
//     });
// }



//   return (
//     <div className="App">


//            <div>
//             <form onSubmit={handleSubmit}>
//                 <label>Title</label>
//                 <input type="text" name="title" 
//                 onChange={e => settask(e.target.value)}
//                  />
//                 <label>Price</label>
//                 <input type="text" name="price" 
//                 onChange={e => setTime(e.target.value)}
//                  />
//                 <label>Details</label>
//                 <input type="text" name="details" 
//                 onChange={e => setProjectManagement(e.target.value)}
//                  />
//                 <label>Image</label>
//                 <input type="text" name="image"
//                 onChange={e => setNotes(e.target.value)}
                
//                 /> 
//                 <button type="submit">Add Product</button>
//            </form>
//         </div>



//  </div>
//   );
// }


// export default ProductCreate;