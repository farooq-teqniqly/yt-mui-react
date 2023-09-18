import Button from "@mui/material/Button";

function App() {
  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <Button variant="contained" onClick={handleClick}>
      First MUI Component
    </Button>
  );
}

export default App;
