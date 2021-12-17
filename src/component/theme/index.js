import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const theme = createTheme({
    palette:{
          secondary: {
            main: "#c9c2b8",
          },
          white:{
              main: grey[100]
          }
    },
    typography: {
        button: {
          textTransform: 'none'
        }
      }
  })


export default function index(props) {
    return (
        <ThemeProvider theme={theme} id="" >
            {props.children}
        </ThemeProvider>
    )
}