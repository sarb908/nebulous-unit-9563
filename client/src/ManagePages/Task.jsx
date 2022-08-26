import { Box, Select,Heading, Stack , Input, Button, Text, Checkbox, useDisclosure, FormLabel, FormControl} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {ArrowForwardIcon} from '@chakra-ui/icons'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useState } from 'react'
const Task = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const [task_name , setTask_name]  = useState("")
  const [rate , setRate]  = useState("")

  const [task , setTask] = useState([])

  const addtask = async () =>{
    const payload = {
      task_name,
      rate
    }

    await fetch(`http://localhost:8080/manage/task/new` ,{
      method : "POST",
      body : JSON.stringify(payload),
      headers :{
        'Content-Type' :'application/json',
        'token' : `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA3YjlkY2E5NzdkOTBmY2Y4MGVkMDEiLCJlbWFpbCI6Im1hc2FpQGdtYWlsLmNvbSIsImlhdCI6MTY2MTQ1MDc3Mn0.hSuzNiQn0XwvC19JEVzM_r1tHvO4G1C1qMZpsPIg5tI`
      }
    })
    .then((res) => res.json)
    .then((res) => {
      console.log(res)
    })
  }


  return (

    <Box style={{width:'50%', margin:'auto'}}>
        <Box margin='30px 0px'>
          <Heading>Task</Heading>
        </Box>
        <Box style={{display:'flex' ,justifyContent:'space-between'}}>
          <Stack direction={['column', 'row']} spacing='10px' >
            <Box w='150px' h='40px' bg='green' color='white' textAlign='center' padding='7px' borderRadius='10px'>
              <button onClick={onOpen}>+ New task</button>
            </Box>
            <Box>
              <Modal
                  initialFocusRef={initialRef}
                  finalFocusRef={finalRef}
                  isOpen={isOpen}
                  onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Add New Task</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel>Task Name</FormLabel>
                      <Input ref={initialRef} value={task_name} onChange={(e)=>setTask_name(e.target.value) } />
                    </FormControl>

                    <FormControl mt={4}>
                      <FormLabel>Default billable rate</FormLabel>
                      <Input width='100px' value={rate} onChange={(e)=>setRate(e.target.value) }/>
                    </FormControl>
                  </ModalBody>

                  <ModalFooter textAlign='center'>
                    <Button colorScheme='green' mr={5} padding='0px 35px' onClick={addtask}>
                      Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
            <Box w='150px' h='40px'  textAlign='center' border='1px solid black' borderRadius='10px'>
              <Select placeholder='Export' border='none'> 
                <option value='option2'>Export to CSV</option>
                <option value='option3'>Export to Excel</option>
              </Select>
            </Box>
          </Stack>
          <Stack direction={['column', 'row']} spacing='24px'>
            <Box w='200px' h='40px' color='black' border='1px solid' textAlign='center' padding='7px' borderRadius='10px'>
              View Archieved tasks
              <ArrowForwardIcon marginLeft='5px'/>
            </Box>
          </Stack>
        </Box>
        <Box border='1px solid grey' borderLeft='none' borderRight='none' height='50px' display='flex' justifyContent='space-between' marginTop ='20px' bg='#efefef' >
          <Checkbox colorScheme='green'  padding='15px'>
            Common tasks
          </Checkbox>
        </Box>
    </Box>
  )
}

export default Task