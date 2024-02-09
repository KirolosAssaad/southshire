import React from 'react';
import {ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css';
import NavBar from './components/navbar/navbar';
import Admission from './components/Admission/admission';
import Apprenticeship from './components/Apprenticeship/apprenticeship';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Topbar from './components/topbar/Topbar';
import Footer from './components/footer/Footer';

const theme = createTheme({
  palette: {
    primary: {
            // main: '#7FC7D9',
            // variant: '#365486',
            main: '#365486',
            variant: '#7FC7D9',
    },
    secondary: {
      main: '#0F1035',
      variant: '#3a5065',
    },
    background: {
      default: '#DCF2F1',
      paper: '#DCF2F1',
    },
    text: {
      primary: '#0F1035',
      secondary: '#3a5065',
    }

  },
});



function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <NavBar/>
      <Topbar/>
      <Admission/>
      <Apprenticeship/>
      <Testimonials/>
      <Contact/>
      
      <Footer/>
    </div>
    </ThemeProvider>
  );
}

export default App;
