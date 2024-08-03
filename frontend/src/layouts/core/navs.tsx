import { NavLink } from "react-router-dom";



export function Nav() {
    return (
      <div className = "font-inter text-3xl flex mb-12  w-full z-50 bg-transparent justify-between">
        <div>
          <NavLink to = "/" className = "outline-2 -outline-offset-1 outline rounded-full outline-white px-5 py-2">max guo</NavLink>
          <NavList/>
        </div>


      </div>
    )
  }


function NavList(){
  return(
    <ul className = "flex gap-x-4 bg-transparent h-fit  mt-auto font-jmono font-light">
      <li className = "bg-transparent">
        <NavLink className="nav-btn" to = "about" end>        
          about
        </NavLink>
      </li>
      <li className = "bg-transparent">
        <NavLink className="nav-btn" to = "cs">        
          programming
        </NavLink>
      </li>          
      <li className = "bg-transparent">
        <NavLink className="nav-btn" to = "art">        
          art
        </NavLink>
      </li>
    </ul>

)
}
  

  export function Footer(){
    return(
      <footer className = "p-12 bg-secondary text-primary">
                    <ul className = "bg-inherit text-inherit">
                        <li>github</li>
                        <li>resume</li>
                        <li>linkedin</li>

                    </ul>
                </footer>
    )
  }


export function AltNav(){
  return (

      <div className = "flex justify-between text-xl font-inter w-full backdrop-blur-md bg-transparent px-12 py-6">
        <NavLink to = "/" className = "text-4xl font-black bg-inherit font-inter">mg</NavLink>
        <NavList/>
      </div>

  )
}