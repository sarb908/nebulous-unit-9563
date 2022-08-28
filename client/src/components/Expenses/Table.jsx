 import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import EditExpence from "./EditExpence";
import { Expenses } from "./Expenses";
import styles from "./Expenses.module.css";
export const Table = () => {
 
  const [expence , setExpence] = useState([])
  const getExpence = () =>{

    fetch("http://localhost:8080/expenses",{
      method : "GET",
      headers:{
        "Content-Type" : "application/json"
      }
    })
    .then((res) => res.json())
    .then((res) =>{
      console.log(res);
      setExpence(res)
    })
    .then((err) => console.log(err))
  }

  useEffect(() =>{
    getExpence()
    // setExpence()
  },[])
  

 const [Tab,SetTab]=useState(false)

  return (

    
    <div className={styles.testa}>
           <Box className={styles.header}>
        <hr />
        <h2>28-Aug 2022</h2>
        <hr />
      </Box>
      
  {/* //map */}

<Box> {Tab ? <EditExpence/>:null}</Box>

     {expence.map((item,index) =>(

     <Box key={index}>
      <Box className={styles.tables}>
        <Box className={styles.tab1}>
          <Box> <h1>{item.date}</h1>  </Box>
          <Box> <b className={styles.tabe}>{item.projectname} ( {item.expensee} )</b>
          <br />
     
          
          </Box>
        </Box>
        <Box className={styles.tab1}>
          <Box> <h1>${item.amount}</h1>  </Box>
          <Box> <Button  className={styles.tabea} colorScheme='black' 
          variant='outline' onClick={()=>SetTab(true)}>
                    
            
          <Link to={`/expenses/${item._id}`} >Edit</Link>
          {/* <Link to={`/expenses`} >Edit</Link> */}
         
          
            </Button>  
            </Box>
       
        </Box>

      
      </Box>
     
     </Box>

      
      ))}

     
    </div>
  );
};
