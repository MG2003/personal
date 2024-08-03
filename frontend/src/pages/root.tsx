import { Outlet } from "react-router-dom";

import { AltNav, Footer} from "../layouts/core/navs";

import { useLocation } from 'react-router-dom';

function Root(){

    const path = useLocation().pathname
    console.log(path == "/art")
    return(
      <div className = "root-layout">
        <AltNav/>
        <div className = "m-auto">
            <Outlet/>
         </div>
         <Footer/>

      </div>
        
    )
}



export default Root;