import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
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
  },[])
  return (

    
    <div>

  


      <Box className={styles.header}>
        <hr />
        <h2>22-Aug 2020</h2>
        <hr />
      </Box>
  {/* //map */}
     {expence.map((item) =>(

     
      <Box className={styles.tables}>
        <Box className={styles.tab1}>
          <Box> <h1>Sat, 27 Aug</h1>  </Box>
          <Box> <b className={styles.tabe}>{item.projectname}</b></Box>
        </Box>
        <Box className={styles.tab1}>
          <Box> <h1>$200</h1>  </Box>
          <Box> <Button className={styles.tabea} colorScheme='black' variant='outline'>
            <Link to={`expences/${item._id}`}>Edit</Link>
            </Button></Box>
        </Box>

        
      </Box>
      ))}
    </div>
  );
};
