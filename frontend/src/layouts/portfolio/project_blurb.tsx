import { useParams, NavLink } from "react-router-dom"
import { getProjectById } from "../../utils/consts";


function Gallery(){
    return(
        <div>

            <NavLink to = "1" className = "text-5xl p-12 bg-white">hi</NavLink>


        </div>
    )
}

function Project(){

    let { id } = useParams<"id">();

    let project = getProjectById(Number(id));

    return(
        <div className = "px-12">
            <div className = "text-8xl font-inter font-black overflow-hidden mb-12">{id}</div>
        </div>
    )
}



export {Gallery, Project}