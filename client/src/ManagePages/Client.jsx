import React, { useEffect } from 'react'
import { Box, Select,Heading, Stack ,InputGroup, Input, InputLeftElement, border, Button, Text} from '@chakra-ui/react'
import {ArrowForwardIcon, SearchIcon} from '@chakra-ui/icons'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'

const Client = () => {

  const [client , setClient] = useState([]);

  const {id} = useParams()

  console.log(id);

  const getClients = async () =>{

    await fetch("http://localhost:8080/manage/client" ,{
      method : "GET" ,
      headers :{
        'Content-Type' :'application/json',
        'token' : `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA3YjlkY2E5NzdkOTBmY2Y4MGVkMDEiLCJlbWFpbCI6Im1hc2FpQGdtYWlsLmNvbSIsImlhdCI6MTY2MTQ1MDc3Mn0.hSuzNiQn0XwvC19JEVzM_r1tHvO4G1C1qMZpsPIg5tI`
      }
    })
    .then((res) => res.json())
    .then((res) =>{
      //console.log(res);

      setClient(res)
    })
    .catch((err) =>{
      console.log(err);
    })
  }

  useEffect(() =>{
    getClients()
  },[])

  // const deleteClient = async () =>{

  //   await fetch(`http://localhost:8080/manage/client/` ,{
  //     method : "GET" ,
  //     headers :{
  //       'Content-Type' :'application/json',
  //       'token' : `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA3YjlkY2E5NzdkOTBmY2Y4MGVkMDEiLCJlbWFpbCI6Im1hc2FpQGdtYWlsLmNvbSIsImlhdCI6MTY2MTQ1MDc3Mn0.hSuzNiQn0XwvC19JEVzM_r1tHvO4G1C1qMZpsPIg5tI`
  //     }
  //   })
  // }

  return (
  <Box style={{width:'50%', margin:'auto'}}>
    <Box margin='30px 0px'>
      <Heading>Client</Heading>
    </Box>
    <Box style={{display:'flex' ,justifyContent:'space-between'}}>
      <Stack direction={['column', 'row']} spacing='10px' >
        <Box w='150px' h='40px' bg='green' color='white' textAlign='center' padding='7px' borderRadius='10px'>
          <Link to='new'>+ New Client</Link>
        </Box>
        <Box w='150px' h='40px' color='black' border='1px solid' textAlign='center' padding='7px' borderRadius='10px'>
          <Link to='/contact/new'>+ Add contacts</Link>
        </Box>
        <Box w='150px' h='40px'  textAlign='center' border='1px solid black' borderRadius='10px'>
          <Select placeholder='Import/Export' border='none'> 
            <option value='Import clients from CSV' >Import clients from CSV</option>
            <option value='option2'>Import contacts from CSV</option>
            <option value='option3'>___________</option>
            <option value='option1' >Export client to Excel</option>
            <option value='option2'>Export client to CSV</option>
            <option value='option3'>Export contacts to Excel</option>
            <option value='option3'>Export contacts to CSV</option>
          </Select>
        </Box>
      </Stack>
      <Stack direction={['column', 'row']} spacing='24px'>
        <Box w='200px' h='40px' color='black' border='1px solid' textAlign='center' padding='7px' borderRadius='10px'>
          View Archieved clients
          <ArrowForwardIcon marginLeft='5px'/>
        </Box>
      </Stack>
    </Box>
    <Box margin='25px 0px' width='50%'>
      <InputGroup border='none'>
        <InputLeftElement
          pointerEvents='none'
          children={<SearchIcon  color='black' />}
        />
        <Input type='text'  placeholder='Filter by client or contact' />
      </InputGroup>
    </Box>
    <Box >
      {client.map((item) =>(
        <Box border='1px solid grey' borderLeft='none' borderRight='none' height='50px' display='flex' justifyContent='space-between' marginTop ='20px' bg='#efefef'>
          <Box display='flex' gap='30px' padding='10px'>
            <Link to={`${item._id}/edit`}>
              <button style={{border:'1px solid grey',padding:'0px 8px',borderRadius:'5px',background:'white'}}>edit</button>
            </Link>
            <Text fontWeight='bold' fontSize='17px'>{item.client_name}</Text>
          </Box>
          <Box w='130px' h='30px' color='black' border='1px solid' textAlign='center' margin='10px' borderRadius='10px' background='white'>
            <Link to='/contact/new'>+ Add contacts</Link>
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
  )
}

export default Client