import React from "react";
import { Box, Heading, Input, Select, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const AddClient = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.authReducer.token);
  const [client_name, setClient] = useState("");
  const [address, setAddress] = useState("");
  const [currency, setCurr] = useState("");

  const addclient = async () => {
    const payload = {
      client_name,
      address,
      currency,
    };
    await fetch("http://localhost:8080/manage/client/new", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        token: `bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        navigate("/manage/client");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const canceladd = () => {
    navigate("/manage/client");
  };
  return (
    <Box style={{ width: "50%", margin: "auto", marginTop: "50px" }}>
      <Box>
        <Heading>New Client</Heading>
        <Text>
          Once you’ve added a client, you can add projects and contacts.
        </Text>
      </Box>
      <Box>
        <hr />
      </Box>
      <Box display="flex" justifyContent="space-between" marginTop="50px">
        <Text padding="5px" color="black" fontWeight="600">
          Client Name
        </Text>
        <Input
          width="70%"
          value={client_name}
          onChange={(e) => setClient(e.target.value)}
        />
      </Box>
      <Box display="flex" justifyContent="space-between" marginTop="20px">
        <Text padding="5px" color="black" fontWeight="600">
          Address
        </Text>
        <Textarea
          width="70%"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></Textarea>
      </Box>
      <Box display="flex" justifyContent="space-between" marginTop="20px">
        <Text padding="5px" color="black" fontWeight="600">
          Preferred currency
        </Text>
        <Select
          width="70%"
          placeholder=" Choose Currency"
          onChange={(e) => setCurr(e.target.value)}
        >
          <option value={"Euro - EUR"}>Euro - EUR</option>
          <option value={"United States Dollor - USD"}>
            United States Dollor - USD
          </option>
          <option value={"British Pount - GBP"}>British Pount - GBP</option>
          <option value={"Indian Rupee - INR"}>Indian Rupee - INR</option>
          <option value={"Australian Dolar - AUD"}>
            Australian Dolar - AUD
          </option>
          <option value={"Canedian Dollar -CAD"}>Canedian Dollar -CAD</option>
        </Select>
      </Box>
      <Box display="flex" justifyContent="center" marginTop="20px" gap="10px">
        <button
          style={{
            background: "green",
            color: "white",
            padding: "8px",
            fontWeight: "bold",
            borderRadius: "10px",
          }}
          onClick={addclient}
        >
          Save client
        </button>
        <button
          style={{
            border: "1px solid",
            padding: "8px",
            fontWeight: "bold",
            borderRadius: "10px",
          }}
          onClick={canceladd}
        >
          Cancel
        </button>
      </Box>
    </Box>
  );
};

export default AddClient;
