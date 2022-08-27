
import { RepeatClockIcon } from '@chakra-ui/icons'
import { Box, Button,Heading,Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const Timecounter = (props) => {

 console.log(props.props.time)
    const [time1,setTime1] = useState(props.props.time)

const startTimer=()=>{
    setInterval(() => {
        
        setTime1(time1=>time1-1)
    }, 60000);
    
}

  return (
    <Box style={{display:"flex"}}>
    
       <Heading as='h4' size='md' style={{marginLeft:"10px",marginTop:"7px",marginRight:"20px"}}>{time1}</Heading>
   <Button style={{height:"40px",marginRght:"10px"}}   onClick={startTimer}> <Button ><RepeatClockIcon marginRight={'20px'}/>   Start </Button>  </Button>


    </Box>
  )
}

export default Timecounter