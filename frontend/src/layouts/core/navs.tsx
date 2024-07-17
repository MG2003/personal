import { LuGithub, LuLinkedin, LuFileText } from "react-icons/lu";
import { NavLink, useLocation } from "react-router-dom";



export function Nav() {
    return (
      <div className = "font-inter text-3xl flex mb-12  w-full sticky top-0">
        <NavLink to = "/" className = "outline-2 -outline-offset-1 outline rounded-full outline-white px-5 py-2">max guo</NavLink>
        <NavList/>
      </div>
    )
  }


function NavList(){
  const r = "bg-[#ff2200]"
  const b = "bg-[#0000ff]"
  const p = "bg-[#ff00ff]"

  const rest = "outline-2 outline -outline-offset-1 rounded-full outline-white px-5 py-2 transition-colors duration-300 "
  return(

    

    <ul className = "ml-16 flex gap-x-4 items-center">
      <li>
        <NavLink className={({ isActive}) => isActive ? rest + r : rest + "hover:" + r } to = "about">        
          student  
        </NavLink>
      </li>
      <li>
        <NavLink className={({ isActive}) => isActive ? rest + b : rest + "hover:" + b } to = "projects">        
          developer 
        </NavLink>
      </li>          
      <li >
        <NavLink className={({ isActive}) => isActive ? rest + p : rest + "hover:" + p } to = "art">        
          artist
        </NavLink>
      </li>
    </ul>

)
}
  

  export function Footer(){
    return(
      <footer className = "flex w-full justify-end text-xl mt-12">
        <a href = "https://github.com/MG2003" target="_blank" className = "m-4">github</a>
        <a href = "https://www.linkedin.com/in/mg2003/" target="_blank" className = "m-4">linkedin</a>
        <a href = "src/assets/mg_resume.pdf" target="_blank" className = "m-4">resume</a>
      </footer>
    )
  }