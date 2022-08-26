import { Box } from "@chakra-ui/react";
import "./App.css";


import NavbarA from "./components/NavbarA";

import MainRoutes from "./pages/MainRoutes";

function App() {
  return (

    <Box bg={"#fff8f1"}>

      <NavbarA />
      <MainRoutes />

      {/* <Manage /> */}
    </Box>

  );
}

export default App;