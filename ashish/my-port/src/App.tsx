import { createTheme, MantineProvider  } from "@mantine/core";
import './index.css'; 
import '@mantine/core/styles.css';
import RootLayouts from "./MainLayout/RootLayouts";

import { pdfjs } from 'react-pdf';
import AOS from 'aos'
import 'aos/dist/aos.css';

import { useEffect } from "react";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.mjs',
//   import.meta.url,
// ).toString();
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


function App() {
  useEffect(()=>{
    AOS.init();
    
  },[])

  const theme=createTheme({
    breakpoints:{
      'xs':'320px',
      'sm':'476px',
      'md':'640px',
      'lg':'900px',
      'xl':'1024px',
      '2xl':'1280px',
    },
    colors : {
     navyS : ['#E3E8F0', '#C6D1E1', '#A9BAD2', '#8DA3C3', '#708CB4', '#5475A5', '#375E96', '#1B4787', '#0A192F', '#060F1F'],
      mintS : ['#E0FFF8', '#C2FFEF', '#A4FFE7', '#87FFDE', '#69FFD6', '#4CFFCD', '#2EFFC5', '#11FFBC', '#00E6A8', '#00CC96', '#009F77'],
      mineshaft : ['#E8EBF5', '#D1D6EB', '#B8C0E1', '#A0AACD', '#8892B0', '#727C9A', '#5C6684', '#474F6E', '#333959', '#1F2343', '#0F122A'],
      light : ['#F2F5FE', '#E6ECFD', '#D9E2FB', '#CCD6F7', '#B8C2EE', '#A3AEE4', '#8F9ADA', '#7B86CF', '#6772C5', '#535EBB', '#3E4AA6']

    },  
    fontFamily:'poppins,sans-serif',
})

  return (
    <MantineProvider theme={theme} >
        <RootLayouts/>
    </MantineProvider>
    
      
    
  );
}

export default App;
