import { NavLink } from "react-router-dom";

function BadURL(){
    const fof = []
    //text-[#171717]
    for(let i = 0; i < 4; i++){
        fof.push(<p className = " text-[#ff1100]">404</p>)
    }

    return(
        <div className = "p-12 flex-col flex justify-between h-screen">
            <div className = "m-auto w-fit h-full flex-col flex items-center justify-center text-6xl font-semibold bg-transparent">     
                <p>you seem to be lost</p>
                <NavLink to = "/" className = "flex justify-between w-full my-3 ">
                    <div className = "hover:text-[#ff1100]">go</div> <div  className = "hover:text-[#ff1100]">back</div>      
                </NavLink>
                <p>you seem to be lost</p>   
            </div>
        </div>
      
    )
}


export default BadURL;