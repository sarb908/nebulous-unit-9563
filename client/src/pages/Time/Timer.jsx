import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  GridItem,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProductEdit from "./editProduct";
import Edit from "./Time/edit";
import Create from "./Time/create";
import Timecounter from "./Time/Timecounter";
import InitialFocus from "./Time/one";

function Products() {
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState(0);
  let today = new Date().toISOString().slice(0, 10);

  console.log(today);
  useEffect(() => {
    fetch("http://localhost:8800/time")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const del = (id) => {
    fetch(`http://localhost:8800/time/${id}`, {
      method: "DELETE",
    });

    setProducts(products.filter((p) => p._id !== id));
  };

//   const Monday = () => {
//     setValue(1);
//   };

//   const Tuesday = () => {
//     setValue(2);
//   };

//   const Thursday = () => {
//     setValue(3);
//   };
//   const Friday = () => {
//     setValue(4);
//   };
//   const WednesDay = () => {
//     setValue(7);
//   };
//   const Sunday = () => {
//     setValue(5);
//   };
//   const Saturday = () => {
//     setValue(6);
//   };

//   console.log(value);

//   if (value === 1) {
//     return (
//       <>
//         <h1>Hyy Dear </h1>
//       </>
//     );
//   } else if (value === 2) {
//     return (
//       <>
//         <h1>Hello 2</h1>
//       </>
//     );
//   } else if (value === 3) {
//     return (
//       <>
//         <h1>Hello 3</h1>
//       </>
//     );
//   } else if (value === 4) {
//     return (
//       <>
//         <h1>Hello 4</h1>
//       </>
//     );
//   } else if (value === 5) {
//     return (
//       <>
//         <h1>Hello 5</h1>
//       </>
//     );
//   } else if (value === 6) {
//     return (
//       <>
//         <h1>Hello 6</h1>
//       </>
//     );
//   } else if (value === 7) {
//     return (
//       <>
//         <h1>Hello 7</h1>
//       </>
//     );
//   }

  return (
    <Box style={{ marginLeft: "10px" }}>
      <Heading ml="145px" mt="20px" as="h4" size="lg" fontWeight="500">
        {" "}
        Sauturday : {today}
      </Heading>
      <Box
        style={{
          display: "flex",
          gap: "20px",
          marginLeft: "140px",
          marginTop: "20px",
        }}
      >
        {" "}
        <Box onClick={Monday}>
          <Button>Monday</Button>
        </Box>
        <Box onClick={Thursday}>
          <Button>Tuesday</Button>
        </Box>
        <Box onClick={Tuesday}>
          <Button>Tuesday</Button>
        </Box>
        <Box onClick={WednesDay}>
          <Button>WednesDay</Button>
        </Box>
        <Box onClick={Friday}>
          <Button>Friday</Button>
        </Box>
        <Box onClick={Saturday}>
          <Button>Saturday</Button>
        </Box>
        <Box onClick={Sunday}>
          <Button>Sunday</Button>
        </Box>
      </Box>

      <Box style={{ marginLeft: "10px", display: "flex" }}>
   

        <Flex>
          <Create style={{ width: "10%" }} />

          <Box>
            <TableContainer mt="30px" ml="30px" bg={"rgb(255,248,240)"}>
              <Table variant="striped" colorScheme="rgb(255,213,188)">
                <TableCaption>
                  “All we have to decide is what to do with the time that is
                  given us.” – Gandalf
                </TableCaption>

                {products.map((p) => {
                  return (
                    <>
                      <Tbody w="700px" style={{ marhinLeft: "40px" }}>
                        <Tr>
                          <Td>
                            {" "}
                            <Heading as="h4" size="md">
                              {" "}
                              {p.tasks}
                              {p.notes}
                            </Heading>{" "}
                            <br /> {p.projectManagement}
                          </Td>
                          <Td></Td>
                          <Td> </Td>
                          <Td> </Td>
                          <Td> </Td>
                          <Td> </Td>
                          <Td> </Td>
                          <Td> </Td>
                          <Td> </Td>
                          <Td> </Td>
                          <Td>
                            <Timecounter props={p} />{" "}
                          </Td>
                          <Td>
                            {" "}
                            <Edit
                              key={p.id}
                              id={p.id}
                              time={p.time}
                              props={p}
                            />
                          </Td>
                          <Td>
                            {" "}
                            <Button onClick={() => del(p._id)}>Delete</Button>
                          </Td>
                        </Tr>
                      </Tbody>
                      <hr />
                    </>
                  );
                })}
              </Table>
            </TableContainer>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Products;
