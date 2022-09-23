import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Image,
  Img,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "./Form";
import styles from "./Expenses.module.css";
import { Table } from "./Table";
import { Route, Routes, useParams } from "react-router-dom";
import { Expenses } from "./Expenses";
import axios from "axios";

const EditExpence = () => {
  const [div, SetDiv] = useState(false);
  // console.log(div);
  const [projectname, SetProject] = useState("");
  const [expensee, Setpu] = useState("");
  const [notes, SetNotes] = useState("");
  const [date, Setdate] = useState("");
  const [amount, Setamount] = useState(0);
  const [show, Setshow] = useState(true);
  const [last, Setlast] = useState(true);

  const { id } = useParams();

  console.log(id);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      projectname,
      expensee,
      notes,
      amount,
      date,
    };
    console.log(payload);

    axios
      .patch(`http://localhost:8080/expenses/${id}`, payload)
      .then(({ data }) => {
        console.log(data, "test");
        window.location.reload(false);
      });
  };
  console.log(id);
  // const deleteExpence =() =>{
  //     fetch(`http://localhost:8080/${id}` ,{
  //       method :"DELETE",
  //       headers :{
  //         "Content-Type" : 'application/json',
  //       }
  //     })
  //     .then((res) =>window.location.reload(false))
  //     .catch((err) =>console.log(err))
  // }

  const deleteExpence = () => {
    axios.delete(`http://localhost:8080/expenses/${id}`);
    Setlast(false);
    window.location.reload(false);
  };

  return (
    <div>
      {last ? (
        <Box className={styles.res}>
          <Box className={styles.abc}>
            <Box className={styles.dleft}>
              <h1>Date</h1>

              <Input
                type="date"
                value={date}
                onChange={(e) => Setdate(e.target.value)}
              />
            </Box>
            <Box spacing={3}>
              <h1>Project / Category</h1>
              <form action="">
                <Select
                  className={styles.sel}
                  onChange={(e) => SetProject(e.target.value)}
                >
                  <option value="Example Search">Example Search</option>
                  <option value="New Project">New Project</option>
                  <option value="Example Project">Example Project </option>
                </Select>

                <Select
                  className={styles.sel}
                  onChange={(e) => Setpu(e.target.value)}
                >
                  <option value="Chosses a category">Chosses a category</option>
                  <option value="Entrainment">Entrainment</option>
                  <option value="Lodging">Lodging</option>
                  <option value="Mileage">Mileage</option>
                  <option value="Others">Others</option>
                  <option value="Transportion">Transportion</option>
                </Select>
                <Input
                  onChange={(e) => SetNotes(e.target.value)}
                  value={notes}
                  type="text"
                  placeholder="Notes (Optional)"
                  className={styles.sel}
                />
                <Input type="file" />
                <Checkbox
                  className={styles.sel}
                  size="sm"
                  colorScheme="orange"
                  defaultChecked
                >
                  This expense is billable
                </Checkbox>
                <br />
                <Button bg="green" color="white" onClick={handleSubmit}>
                  Update expenses
                </Button>
                <Button
                  type="submit"
                  colorScheme="black"
                  variant="outline"
                  className={styles.bcancel}
                  onClick={() => Setlast(true)}
                >
                  cancel
                </Button>
                <Button
                  variant="outline"
                  className={styles.bcancel}
                  colorScheme="orange"
                  onClick={deleteExpence}
                >
                  Delete
                </Button>
              </form>
            </Box>
            <Box className={styles.rpay}>
              <h1>Amount</h1>
              <Input
                type="text"
                color="black"
                value={amount}
                placeholder="$"
                onChange={(e) => Setamount(e.target.value)}
              />
            </Box>
          </Box>
        </Box>
      ) : null}
    </div>
  );
};

export default EditExpence;
