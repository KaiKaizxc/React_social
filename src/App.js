import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { React, useState } from 'react'
import { textAlign } from "@mui/system";

function App() {

  const [mode, setMode] = useState("dark")

  const darkTheme = createTheme ({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme = {darkTheme}>

    
      <Box bgcolor = {"background.default"} color = {"text.primary"}>
        <Navbar/>
        <Stack direction = "row" spacing = {2} justifyContent = "space-between" > 
          <Sidebar setMode = { setMode } mode = { mode } />
          <Feed/>
          <Rightbar/>
          
        </Stack>
      </Box>
    </ThemeProvider>
    
  );
}

export default App;
