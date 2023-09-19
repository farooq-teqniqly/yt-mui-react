import Button from "@mui/material/Button";
import { Navbar } from "./components/Navbar/Navbar";

export const App = () => {
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
};
