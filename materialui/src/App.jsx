import Button from "@mui/material/Button";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClick}>
        First MUI Component
      </Button>
      <Navbar></Navbar>
    </>
  );
}

export default App;
