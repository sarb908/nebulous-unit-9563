import { Box, color } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
//todo
const ManageNavbar = () => {
  return (
    <Box borderBottom="2px solid grey" padding="10px">
      <Box style={{ width: "70%", margin: "auto" }}>
        <Link to="/manage/client" style={{ marginLeft: "20px" }}>
          Clients
        </Link>
        <Link to="/manage/task" style={{ marginLeft: "20px" }}>
          Tasks
        </Link>
        <Link to="/manage/expence_categ" style={{ marginLeft: "20px" }}>
          Expence Categories
        </Link>
        <Link to="/manage/role" style={{ marginLeft: "20px" }}>
          Roles
        </Link>
      </Box>
    </Box>
  );
};

export default ManageNavbar;
