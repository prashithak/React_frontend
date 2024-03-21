import { AppBar, Box, Button, IconButton, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    }
  });
  return (
    
    
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography variant="h6" component="div" align='left' sx={{ flexGrow: 1 }}><Link to={'/'} style={{textDecoration:"none", color:"white"}}> Dashboard</Link>
           
          </Typography>
          <Button color="inherit"><Link to={'/h'} style={{textDecoration:"none", color:"white"}}>Home</Link></Button>
          <Button color="inherit"><Link to={'/e'} style={{textDecoration:"none",color:"white"}}>Employee</Link></Button>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </Box>
  )
}

export default Navbar