import { Box } from "@chakra-ui/react";
import "./App.css";
import NavbarA from "./components/NavbarA";
import MainRoutes from "./pages/MainRoutes";
import NavbarB from "./components/NavbarB"
function App() {
  return (
    <Box bg={"#fff8f1"}>
      <NavbarA />
      {/* <NavbarB/> */}
      <MainRoutes />

    </Box>
  );
}

export default App;
