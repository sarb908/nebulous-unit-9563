import React, { useEffect ,useState } from 'react'
import { Box, Select,Heading, Stack , Input, Button, Text, Checkbox, useDisclosure, FormLabel, FormControl} from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import {ArrowForwardIcon, ChevronDownIcon} from '@chakra-ui/icons'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'




const Task = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const [task_name , setTask_name]  = useState("")
  const [rate , setRate]  = useState("")

  const [task , setTask] = useState([])

  const getTasks = () =>{

    fetch("http://localhost:8080/manage/task/" , {
      method : "GET",
      headers :{
        'Content-Type' :'application/json',
        'token' : `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA3YjlkY2E5NzdkOTBmY2Y4MGVkMDEiLCJlbWFpbCI6Im1hc2FpQGdtYWlsLmNvbSIsImlhdCI6MTY2MTQ1MDc3Mn0.hSuzNiQn0XwvC19JEVzM_r1tHvO4G1C1qMZpsPIg5tI`
      }
    })
    .then((res) => res.json())

    .then((res) =>{

      setTask(res)
    })
    .catch((err) => console.log(err))
   }

  useEffect(() =>{

    getTasks()

  },[])

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
    .then((res) => window.location.reload(false))
  }
   
  const deleteTask = async ({_id}) =>{
  
    await fetch(`http://localhost:8080/manage/task/${_id}/delete` ,{
      method : "DELETE",
      headers :{
        'Content-Type' :'application/json',
        'token' : `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA3YjlkY2E5NzdkOTBmY2Y4MGVkMDEiLCJlbWFpbCI6Im1hc2FpQGdtYWlsLmNvbSIsImlhdCI6MTY2MTQ1MDc3Mn0.hSuzNiQn0XwvC19JEVzM_r1tHvO4G1C1qMZpsPIg5tI`
      }
    })
    .then((res) =>{

     window.location.reload(false)

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
          
          <Box padding='10px' fontWeight='bold' marginLeft="10px">
            <Text>Task Name</Text>
          </Box>

          <Box display='flex' gap='120px' padding='10px' fontWeight='bold'>
            <Text>Billable Rate</Text>
            <Text></Text>
          </Box>

        </Box>

        <Box>
          {task.map((item =>(
            <Box key={item._id} border='1px solid grey' borderLeft='none' borderRight='none' height='50px' display='flex' justifyContent='space-between' marginTop ='20px' bg='#fff1cd'>
              
              <Box>
                <Checkbox colorScheme='green'  padding='10px'>
                  {item.task_name}
                </Checkbox>
              </Box>
              
              <Box display='flex' gap='20px' >
                <Text padding='10px'>₹{item.rate}</Text>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />} color='black' bg="white" border="1px solid grey" height='35px' margin='6px'>
                      Actions
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Edit task</MenuItem>
                      <MenuItem onClick={function(){deleteTask(item)}}>Delete task</MenuItem>
                    </MenuList>
                  </Menu>
              </Box>

            </Box>
          )))}

        </Box>
        
    </Box>
  )
}

export default Task