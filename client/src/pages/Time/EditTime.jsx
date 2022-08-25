// import React, { useState, useEffect } from 'react'
// // import { useParams } from 'react-router-dom';
// // import { useHistory } from 'react-router-dom';
// // import Wrapper from './Wrapper'

// function ProductEdit(props) {
//     console.log(props)
//     const [task, settask] = useState("");
//     const [time, setTime] = useState(0);
//     const [projectManagement, setProjectManagement] = useState('');
//     const [notes, setNotes] = useState('');
  
//     // const params = useParams()



//     useEffect(() => {
        
//         fetch(`http://localhost:8800/api/products/${props.id}`)
//         .then(res => res.json())
//         .then(product => {
//             settask(product.task);
//             setTime(product.time);
//             setProjectManagement(product.projectManagement);
//           setNotes(product.notes);
//         })          
//         // eslint-disable-next-line
//       }, [])

//     const submit = (e) => {
//         e.preventDefault();
//         fetch(`http://localhost:8800/api/products/${props.id}`, {
//             method: 'PUT',
//             headers: {"Content-type": "application/json"},
//             body: JSON.stringify({ task, time, projectManagement, notes })
//         }).then((res) =>
//         {
//             console.log(res.data)
//         });
//     }

//     return (
//         <div>
//             <form onSubmit={submit}>
//                 <label>Title</label>
//                 <input type="text" name="title"
//                 defaultValue={task} 
//                 onChange={e => settask(e.target.value)}
//                  />
//                  <label>Price</label>
//                 <input type="text" name="price"
//                 defaultValue={time} 
//                 onChange={e => setTime(e.target.value)}
//                  />
//                 <label>Details</label>
//                 <input type="text" name="details" 
//                 defaultValue={projectManagement}
//                 onChange={e => setProjectManagement(e.target.value)}
//                  />
//                 <label>Image</label>
//                 <input type="text" name="image"
//                 defaultValue={notes}
//                 onChange={e => setNotes(e.target.value)}
                
//                 />
//                 <button type="submit">Save</button>
//             </form>
//         </div>
//     )
// }

// export default ProductEdit
