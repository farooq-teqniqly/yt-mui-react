import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import Grid from "@mui/material/Grid";

export const App = () => {
  return (
    <Grid container>
      <Navbar></Navbar>
      <Outlet />
    </Grid>
  );
};
