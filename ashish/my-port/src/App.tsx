import { createTheme, MantineProvider  } from "@mantine/core";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import './index.css'; 
import '@mantine/core/styles.css';
import MainLayouts from "./MainLayout/MainLayouts";
import Abouts from "./About/Abouts";
import Contacts from "./Contact/Contacts";
import RootLayouts from "./MainLayout/RootLayouts";

function App() {
  const theme=createTheme({
    colors : {
     navyS : ['#E3E8F0', '#C6D1E1', '#A9BAD2', '#8DA3C3', '#708CB4', '#5475A5', '#375E96', '#1B4787', '#0A192F', '#060F1F'],
      mintS : ['#E0FFF8', '#C2FFEF', '#A4FFE7', '#87FFDE', '#69FFD6', '#4CFFCD', '#2EFFC5', '#11FFBC', '#00E6A8', '#00CC96', '#009F77'],
      mineshaft : ['#E8EBF5', '#D1D6EB', '#B8C0E1', '#A0AACD', '#8892B0', '#727C9A', '#5C6684', '#474F6E', '#333959', '#1F2343', '#0F122A'],
      light : ['#F2F5FE', '#E6ECFD', '#D9E2FB', '#CCD6F7', '#B8C2EE', '#A3AEE4', '#8F9ADA', '#7B86CF', '#6772C5', '#535EBB', '#3E4AA6']

    },  
    fontFamily:'poppins,sans-serif',
})

const router =createBrowserRouter([
  {
    path:"/",
    element:<MainLayouts/>,
    children:[
      {
        index:true,element:<RootLayouts/>//act as home page
      },
      
      {
        path:"about",
        element:<Abouts/>
      },{
        path:"contact",
        element:<Contacts/>
      }
    ]
  },{

  }
])
  return (
    <MantineProvider theme={theme} >
        <RouterProvider router={router}/>
    </MantineProvider>
    
      
    
  );
}

export default App;
