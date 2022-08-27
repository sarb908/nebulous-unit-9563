import { Box } from "@chakra-ui/react";
import "./App.css";

import { useSelector } from "react-redux";
import NavbarA from "./components/NavbarA";
import NavbarB from "./components/NavbarB";


import MainRoutes from "./pages/MainRoutes";

function App() {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  return (
    <Box bg={"#fff8f1"}>

      {isAuth ? <NavbarB /> : <NavbarA />}
      <MainRoutes />

    </Box>
  );
}

export default App;