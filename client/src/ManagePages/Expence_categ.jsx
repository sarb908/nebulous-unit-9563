import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  Box,
  Heading,
  Hide,
  Text,
  AccordionPanel,
  Input,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import InputItem from "./InputItem";
import { useSelector } from "react-redux";
const Expence_categ = () => {
  const [category_name, setCateg_name] = useState("");
  const token = useSelector((state) => state.authReducer.token);

  const [categ, setCateg] = useState([]);

  const getcateg = () => {
    fetch("http://localhost:8080/manage/expence_categ", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: `bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setCateg(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getcateg();
  }, []);

  const addcateg = async () => {
    const payload = {
      category_name,
    };
    await fetch("http://localhost:8080/manage/expence_categ/new", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        token: `bearer ${token}`,
      },
    })
      .then((res) => window.location.reload(false))
      .catch((err) => console.log(err));
  };

  const editcateg = () => {};
  const cancelcateg = () => {
    window.location.reload(false);
  };

  const deletecateg = async ({ _id }) => {
    await fetch(`http://localhost:8080/manage/expence_categ/${_id}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: `bearer ${token}`,
      },
    })
      .then((res) => window.location.reload(false))
      .catch((err) => console.log(err));
  };

  return (
    <Box style={{ width: "50%", margin: "auto" }}>
      <Box margin="30px 0px">
        <Heading>Expence Categories</Heading>
      </Box>
      <Box>
        <Accordion defaultIndex={[1]} allowMultiple borderBlock="white">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  w="150px"
                  h="40px"
                  bg="green"
                  color="white"
                  textAlign="center"
                  padding="7px 15px"
                  borderRadius="10px"
                >
                  <button>+ New category</button>
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} style={{ border: "1px solid red" }}>
              <Box
                display="flex"
                flexDirection="column"
                gap="25px"
                padding="10px"
              >
                <Text color="black" fontWeight="600">
                  Category Name
                </Text>
                <Input
                  value={category_name}
                  onChange={(e) => setCateg_name(e.target.value)}
                />
                <Box>
                  <Button
                    width="140px"
                    bg="green"
                    color="white"
                    mr={5}
                    padding="0px 35px"
                    onClick={addcateg}
                    _hover={{ bg: "green" }}
                  >
                    Save category
                  </Button>
                  <Button
                    width="100px"
                    border="1px solid "
                    bg="white"
                    color="black"
                    mr={5}
                    padding="0px 35px"
                    _hover={{ bg: "white" }}
                    onClick={cancelcateg}
                  >
                    Cancel
                  </Button>
                </Box>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>

      {/* map the categories here */}
      {categ.map((item) => (
        <Box
          border="1px solid grey"
          borderLeft="none"
          borderRight="none"
          height="50px"
          display="flex"
          justifyContent="space-between"
          marginTop="20px"
        >
          <Box display="flex" gap="30px" padding="10px">
            {/* <Link to={`${item._id}/edit`}> */}
            <button
              style={{
                border: "1px solid grey",
                padding: "0px 10px",
                borderRadius: "5px",
                background: "white",
                textAlign: "center",
              }}
            >
              Edit
            </button>
            {/* </Link> */}
            <Text fontWeight="bold" fontSize="17px">
              {item.category_name}
            </Text>
          </Box>
          <Box
            w="80px"
            h="30px"
            color="black"
            border="1px solid"
            textAlign="center"
            margin="10px"
            borderRadius="10px"
            background="white"
          >
            <button onClick={() => deletecateg(item)}>Delete</button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Expence_categ;
