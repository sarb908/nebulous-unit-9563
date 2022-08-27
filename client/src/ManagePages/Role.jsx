import React from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, Box, Heading, Hide, Text, AccordionPanel, Input, Button, } from '@chakra-ui/react'
import { useState } from 'react'
import { useEffect } from 'react'

const Role = () => {

  const [role_name , setRole_name] = useState("")

  const [email , setEmail] = useState("")

  const [role , setRole] = useState([])

  const getRole = () =>{
    fetch("http://localhost:8080/manage/role" ,{
      method :"GET" ,
      headers :{
        'Content-Type' :'application/json',
        'token' : `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA3YjlkY2E5NzdkOTBmY2Y4MGVkMDEiLCJlbWFpbCI6Im1hc2FpQGdtYWlsLmNvbSIsImlhdCI6MTY2MTQ1MDc3Mn0.hSuzNiQn0XwvC19JEVzM_r1tHvO4G1C1qMZpsPIg5tI`
      }
    })
    .then((res) => res.json())
    .then((res) =>{
      console.log(res)
      setRole(res)
    })
    .catch((err) => console.log(err))
  }

  useEffect(() =>{
    getRole()
  },[])

  const addRole = async () =>{
    const payload = {
      role_name
    }
    await fetch("http://localhost:8080/manage/role/new" ,{
      method :"POST" ,
      body : JSON.stringify(payload),
      headers :{
        'Content-Type' :'application/json',
        'token' : `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA3YjlkY2E5NzdkOTBmY2Y4MGVkMDEiLCJlbWFpbCI6Im1hc2FpQGdtYWlsLmNvbSIsImlhdCI6MTY2MTQ1MDc3Mn0.hSuzNiQn0XwvC19JEVzM_r1tHvO4G1C1qMZpsPIg5tI`
      }
    })
    .then((res) => window.location.reload(false))
    .catch((err) => console.log(err))
  }

  const editRole = () =>{

  }
  const cancelRole = () =>{
    window.location.reload(false)
  }

  const deleteRole = async ({_id}) =>{

    await fetch(`http://localhost:8080/manage/role/${_id}/delete`,{
      method :"DELETE" ,
      headers :{
        'Content-Type' :'application/json',
        'token' : `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA3YjlkY2E5NzdkOTBmY2Y4MGVkMDEiLCJlbWFpbCI6Im1hc2FpQGdtYWlsLmNvbSIsImlhdCI6MTY2MTQ1MDc3Mn0.hSuzNiQn0XwvC19JEVzM_r1tHvO4G1C1qMZpsPIg5tI`
      }
    })
    .then((res) => window.location.reload(false))
    .catch((err) => console.log(err))
  }
  return (
    <Box style={{width:'50%', margin:'auto'}}>
        <Box margin='30px 0px'>
          <Heading>Role</Heading>
        </Box>
        <Box>
          <Accordion defaultIndex={[1]} allowMultiple borderBlock='white'>
              <AccordionItem >
                <h2>
                  <AccordionButton>
                  <Box w='150px'
                     h='40px'
                     bg='green'
                     color='white' 
                     textAlign='center' 
                     borderRadius='10px' 
                     padding='6px 15px' 
                     fontSize='18px'
                     marginLeft='-15px'
                  >
                    <button>+ New Role</button>
                  </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} style={{border:'1px solid red'}}>
                  <Box display='flex' flexDirection='column' gap='15px' padding='10px'>
                    <Text color='black' fontWeight='600'>Role Name</Text>
                    <Input value={role_name} onChange={(e) => setRole_name(e.target.value)}/>
                    <Box >
                      <Button width='140px' bg='green'color='white' mr={5} padding='0px 35px' onClick={addRole} _hover={{bg:'green'}}>
                        Save role
                      </Button>
                      <Button width='100px' border='1px solid ' bg='white' color='black' mr={5} padding='0px 35px'  _hover={{bg:'white'}} onClick={cancelRole}>
                        Cancel
                      </Button>
                    </Box>
                    
                  </Box>
                </AccordionPanel>
              </AccordionItem>
          </Accordion>
        </Box>
        <Box border='1px solid grey' borderLeft='none' borderRight='none' height='40px' display='flex' justifyContent='space-between' marginTop ='20px' bg='#efefef' >
          
          <Box padding='7px' marginLeft="10px">
            <Text>Role</Text>
          </Box>
          <Box padding='7px' marginLeft="10px">
            <Text>Asigned to</Text>
          </Box>

        </Box>

        {/* map the categories here */}
        {role.map((item) =>(
          <Box border='1px solid grey' borderLeft='none' borderRight='none' height='50px' display='flex' justifyContent='space-between' marginTop ='10px' bg='#fff1cd'>
            <Box display='flex' gap='30px' padding='10px' paddingLeft='20px'>
              <Text fontWeight='bold' fontSize='17px'>{item.role_name}</Text>
            </Box>
            <Box>
              <Text>{item.user}</Text>
            </Box>
            <Box display='flex'>
              <Box w='80px' h='30px' color='black' border='1px solid' textAlign='center' margin='10px' borderRadius='10px' background='white'>
                <button>Edit</button>
              </Box>
              <Box w='80px' h='30px' color='black' border='1px solid' textAlign='center' margin='10px' borderRadius='10px' background='white'>
                <button onClick={()=> deleteRole(item)}>Delete</button>
              </Box>
            </Box>
          </Box>
        ))}
        
    </Box>
  )
}

export default Role