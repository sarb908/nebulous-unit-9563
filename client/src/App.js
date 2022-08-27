import { Box } from "@chakra-ui/react";
import "./App.css";
import { Expenses } from "./components/Expenses/Expenses";
import { Table } from "./components/Expenses/Table";


// import NavbarA from "./components/NavbarA";

import MainRoutes from "./pages/MainRoutes";
function App() {
  return (

    <Box bg={"#fff8f1"}>
       {/* <Table/> */}
      {/* <NavbarA /> */}
      <MainRoutes />
      {/* <Expenses/> */}
     

    </Box>

  );
}

export default App;