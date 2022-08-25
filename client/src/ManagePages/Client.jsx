import React from 'react'
import { Box, Select,Heading, Stack ,InputGroup, Input, InputLeftElement, border} from '@chakra-ui/react'
import {ArrowForwardIcon, SearchIcon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const Client = () => {

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
      <Box border='1px solid' height='50px'></Box>
      <Box border='1px solid' height='50px'></Box>
      <Box border='1px solid' height='50px'></Box>
    </Box>
  </Box>
  )
}

export default Client