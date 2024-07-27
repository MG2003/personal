import { Outlet } from "react-router-dom";

import { AltNav} from "../layouts/core/navs";

import { useLocation } from 'react-router-dom';

function Root(){

    const path = useLocation().pathname
    console.log(path == "/art")
    return(
      <div className = "root-layout">
        <AltNav/>
        <Outlet/>
      </div>
        
    )
}



export default Root;