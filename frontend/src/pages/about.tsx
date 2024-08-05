import { NavLink } from "react-router-dom";

function About(){


    return(
        
            <div className = "px-20 mx-auto md:py-6">
                <div className = "md:px-20">        
                    <div className = "md:grid md:grid-cols-5 inline-block py-6 mb-1 gap-10">
                        <div className = "col-span-2 overflow-hidden mb-6 md:mb-0">
                            <img src="assets/img/webpage.jpg" className = "rounded-xl md:min-w-[300px]"></img>
                            <p className = "text-md font-inter font-bold w-fit m-auto">aquarium :D</p>
                        </div>
                        <div className = "text-lg font-inter col-span-3">      
                            <div className = "md:text-7xl text-3xl font-jmono font-black overflow-hidden">ABOUT ME</div>
                            <div className = "md:text-xl text-md py-6">
                                hi! i'm max. i'm a junior at brown university, 
                                studying <span className = "font-bold">computer science and math</span>. i'm passionate about finding a creative outlet for myself
                                with technology, which currently manifests through my work in game development and computer graphics.
                                <br></br><br></br>
                                i'm currently chilling in the suburbs of <span className = "font-bold">holmdel, new jersey</span>, 
                                but i spent a majority of my formative years wandering the streets of <span className = "font-bold">san francisco</span> and even lived a year
                                overseas with my grandparents in <span className = "font-bold">shanghai</span>. 
                                <br></br><br></br>
                                outside the classroom, you can find me tinkering with my <NavLink to = "../art" className = "font-bold" reloadDocument>art</NavLink>
                            , making games with <span className = "font-bold">brown risd game developers</span>, 
                            working out at the nelson, or hanging out with my friends and drinking lots of <NavLink to = "boba" className = "font-bold" reloadDocument >boba</NavLink>. 
                            </div>

                            </div>
                    </div>
                    <div className = "grid grid-cols-2 mb-6">
                    <div>
                    <div className = "md:text-5xl text-3xl font-jmono font-black">PRESENT</div>
                        <div className = "py-6 bg-transparent font-inter md:text-xl text-md flex-col gap-2 flex">
                            <p>
                                <span className = "text-2xl">💻  </span> 
                                interning at <a className = "font-bold hover:underline decoration-2" href = "https://www.anytimeai.ai/" target = "_blank">anytime ai</a>
                                </p>
                            <p>
                                <span className = "text-2xl">📏  </span> 
                                preparing to ta <span className = "font-bold">compilers and program analysis</span>
                            </p>
                            <p>
                                <span className = "text-2xl">🎮  </span> 
                                organizing <a className = "font-bold hover:underline decoration-2" href = "https://brownrisdgames.itch.io/" target = "_blank">brown risd game developers</a>
                            </p>
                            <p>
                                <span className = "text-2xl">📦  </span> 
                                learning <span className= "font-bold">blender</span>
                                </p>
                            <p>
                                <span className = "text-2xl">💿  </span> 
                                trying to have a <span className = "hover:bg-[#8ACE00] hover:text-black hover:blur-[0.5px] font-bold">
                                    brat summer
                                </span>
                            </p>
                            <p>
                                <span className = "text-2xl">💪  </span> 
                                working out at <span className = "font-bold">the local gym</span>
                            </p>
                            <p>
                                <span className = "text-2xl">🦀  </span> 
                                making my way through <span className = "font-bold">
                                    another crab's treasure 
                                </span>
                             </p>
                        </div>
                        </div>
                        <div>
                            <div className = "md:text-5xl text-3xl font-jmono font-black">PAST</div>
                            <div className = "py-6 bg-transparent font-inter md:text-xl text-md flex-col gap-2 flex">
                                    <p>
                                        <span className = "text-2xl">💻  </span> 
                                        interned at <a className = "font-bold hover:underline decoration-2" href = "https://www.icims.com/" target = "_blank">iCIMS</a>
                                    </p>
                                    <p> <span className = "text-2xl">📐  </span> 
                                ta'd <span className = "font-bold">abstract algebra</span>
                                    </p>
                                    <p><span className = "text-2xl">🛠️  </span> built stuff with <a className = "font-bold  hover:underline decoration-2" href = "https://www.linkedin.com/company/full-stack-at-brown/" target = "_blank">full stack at brown</a></p>
                                    <p>
                                        <span className = "text-2xl">🦀  </span>
                                        spent a summer learning <span className = "font-bold">rust</span>
                                    </p>
                                    <p className = "font-bold">
                                        ... and a lot more :D
                                    </p>
                                
                            </div>
                        </div>
                    </div>
                </div>    
         
            </div>

           
            
            




   
    )
}


export default About;