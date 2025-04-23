import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const MainLayouts = () => {
  return (
    <div className="min-h-[100vh] bg-navyS-800 font-['Poppins']">
         <Header/>
         <main>
            <Outlet/>
         </main>
         <Footer/>
    </div>
  )
}

export default MainLayouts