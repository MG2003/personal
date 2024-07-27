import { LuGithub, LuLinkedin, LuFileText } from "react-icons/lu";
import { NavLink, useLocation } from "react-router-dom";



export function Nav() {
    return (
      <div className = "font-inter text-3xl flex mb-12  w-full z-50 bg-transparent fixed justify-between">
        <div>
          <NavLink to = "/" className = "outline-2 -outline-offset-1 outline rounded-full outline-white px-5 py-2">max guo</NavLink>
          <NavList/>
        </div>


      </div>
    )
  }


function NavList(){
  return(
    <ul className = "flex gap-x-4 bg-transparent">
      <li className = "bg-transparent">
        <NavLink className={({ isActive}) => isActive ? "nav-btn"     
        : "nav-btn" } to = "about" end>        
          about
        </NavLink>
      </li>
      <li className = "bg-transparent">
        <NavLink className={({ isActive}) => isActive ? "nav-btn":"nav-btn" } to = "cs">        
          programming
        </NavLink>
      </li>          
      <li className = "bg-transparent">
        <NavLink className={({ isActive}) => isActive ? "nav-btn":"nav-btn" } to = "art">        
          art
        </NavLink>
      </li>
    </ul>

)
}
  

  export function Footer(){
    return(
      <footer className = "flex w-full justify-end text-l mt-12">
        <a href = "https://github.com/MG2003" target="_blank" className = "m-4">github</a>
        <a href = "https://www.linkedin.com/in/mg2003/" target="_blank" className = "m-4">linkedin</a>
        <a href = "src/assets/mg_resume.pdf" target="_blank" className = "m-4">resume</a>
      </footer>
    )
  }


export function AltNav(){
  return (

      <div className = "flex justify-between text-xl p-1 sticky top-0 font-inter">
        <NavLink to = "/">mg</NavLink>
        <NavList/>
      </div>

  )
}