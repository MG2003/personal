import { LuGithub, LuLinkedin, LuFileText } from "react-icons/lu";
import { NavLink, useLocation } from "react-router-dom";


interface NavProp{
    badUrl?: boolean
}
export function Nav({badUrl = false} : NavProp) {
    return (
      <div className = "font-inter text-4xl flex mb-12  w-full sticky top-0">
        <NavLink className = " font-semibold italic" to = "/">max guo</NavLink>
        <ul className = "ml-16">
          <NavList title = "student" link = "about"/>
          <NavList title = "developer" link = "projects"/>
          <NavList title = "artist" link = "art"/>
          <li className = {badUrl ? "": "hidden"}><span className = "font-semibold">*somewhere...</span></li>
        </ul>
      </div>
    )
  }
  
  interface NavListProps{
    title: string,
    link: string
  }
  
  export function NavList({title, link}: NavListProps){
    const currpath = useLocation().pathname == "/";
    const basic_components = "hover:text-orange-500 bg-transparent";
    return(
      <li><NavLink className ={ ({ isActive}) =>
        isActive ? "active" : currpath ? "": "hidden"}     
        to = {link}>
           {({ isActive }) =>           
           (
            <p className = {isActive ? "font-semibold " + basic_components: basic_components}>
             { isActive ? "*" + title : title}
            </p>
          )
          
          }
      </NavLink></li>
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