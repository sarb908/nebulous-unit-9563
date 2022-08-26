import { Box } from "@chakra-ui/react";
import "./App.css";
import NavbarA from "./components/NavbarA";
import MainRoutes from "./pages/MainRoutes";
import NavbarB from "./components/NavbarB"
import Manage from "./pages/Manage";
function App() {
  return (
    <Box >
      <NavbarA />
      {/* <NavbarB/> */}
      <MainRoutes />

      {/* <Manage /> */}
    </Box>
  );
}

export default App;
