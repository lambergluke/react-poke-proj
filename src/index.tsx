import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { RecoilRoot } from 'recoil';


const theme = createTheme({
  palette: {
    //type: 'dark',
    primary: {
      main: '#ff9403',
    },
    secondary: {
      main: '#0369d7',
    },
    error: {
      main: '#ff371c',
    },
    warning: {
      main: '#c6c500',
    },
    success: {
      main: '#00ce54',
    },
  },
});

ReactDOM.render(
  <RecoilRoot>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </RecoilRoot>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
