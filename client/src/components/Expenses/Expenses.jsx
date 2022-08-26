import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { Form } from "./Form";

export const Expenses = () => {
  const [div,SetDiv]=useState(false)
   console.log(div)
 
  return (
    <div>
      <Box bg="tomato" w="100%" p={4} >
        <Button onClick={()=>SetDiv(true)}>heelo</Button>
         <Box >
          
             {div? <Form/>: <h1>click on button</h1>}
         
         </Box>

      </Box>
    </div>
  );
};
