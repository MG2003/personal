import { Outlet } from "react-router-dom";

import { Nav, Footer } from "../layouts/core/navs";


function Root(){
    return(
      <div className =  "p-12 flex-col flex justify-between min-h-screen">
        <Nav/>
        <Outlet />
        <Footer/>
      </div>
        
    )
}



export default Root;