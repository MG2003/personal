import { NavLink } from "react-router-dom";

function About(){


    return(
        
            <div className = "px-20 mx-auto md:py-6">
                <div className = "md:px-20">        
                    <div className = "md:grid md:grid-cols-5 inline-block py-6 mb-1 gap-10">
                        <div className = "col-span-2 overflow-hidden mb-6 md:mb-0">
                            <img src="assets/img/webpage.jpg" className = "rounded-xl md:min-w-[300px]"></img>
                            <p className = "text-md font-jmono w-fit m-auto">aquarium :D</p>
                        </div>
                        <div className = "text-lg font-jmono col-span-3">      
                            <div className = "md:text-5xl text-3xl font-inter font-black overflow-hidden">about me</div>
                            <div className = "md:text-lg text-md py-6">
                                hi! i'm max. i'm a junior at brown university, 
                                studying <span className = "font-extrabold">computer science and math</span>. i'm passionate about finding a creative outlet for myself
                                with technology, which currently manifests through my work in game development and computer graphics.
                                <br></br><br></br>
                                i'm currently chilling in the suburbs of <span className = "font-extrabold">holmdel, new jersey</span>, 
                                but i spent a majority of my formative years wandering the streets of <span className = "font-extrabold">san francisco</span> and even lived a year
                                overseas with my grandparents in <span className = "font-extrabold">shanghai</span>. 
                                <br></br><br></br>
                                outside the classroom, you can find me tinkering with my <NavLink to = "../art" className = "font-extrabold" reloadDocument>art</NavLink>
                            , making games with <span className = "font-extrabold">brown risd game developers</span>, 
                            working out at the nelson, or hanging out with my friends and drinking lots of <NavLink to = "boba" className = "font-extrabold" reloadDocument >boba</NavLink>. 
                            </div>

                            </div>
                    </div>
                    <div className = "grid grid-cols-2 mb-6">
                    <div>
                    <div className = "md:text-5xl text-3xl font-inter font-black">present</div>
                        <div className = "py-6 bg-transparent font-jmono md:text-lg text-md flex-col gap-2 flex">
                            <p>
                                <span className = "text-2xl">💻 </span> 
                                interning at <a className = "font-extrabold hover:underline decoration-2" href = "https://www.anytimeai.ai/" target = "_blank">anytime ai</a>
                                </p>
                            <p>
                                <span className = "text-2xl">📏 </span> 
                                preparing to ta <span className = "font-extrabold">compilers and program analysis</span>
                            </p>
                            <p>
                                <span className = "text-2xl">🎮 </span> 
                                organizing <a className = "font-extrabold hover:underline decoration-2" href = "https://brownrisdgames.itch.io/" target = "_blank">brown risd game developers</a>
                            </p>
                            <p>
                                <span className = "text-2xl">📦 </span> 
                                learning <span className= "font-extrabold">blender</span>
                                </p>
                            <p>
                                <span className = "text-2xl">💿 </span> 
                                trying to have a <span className = "hover:bg-[#8ACE00] hover:text-black hover:blur-[0.5px] font-extrabold">
                                    brat summer
                                </span>
                            </p>
                            <p>
                                <span className = "text-2xl">💪 </span> 
                                working out at <span className = "font-extrabold">the local gym</span>
                            </p>
                            <p>
                                <span className = "text-2xl">🦀 </span> 
                                making my way through <span className = "font-extrabold">
                                    another crab's treasure
                                </span>
                             </p>
                        </div>
                        </div>
                        <div>
                            <div className = "md:text-5xl text-3xl font-inter font-black">past</div>
                            <div className = "py-6 bg-transparent font-jmono md:text-lg text-md flex-col gap-2 flex">
                                    <p>
                                        <span className = "text-2xl">💻 </span> 
                                        interned at <a className = "font-extrabold hover:underline decoration-2" href = "https://www.icims.com/" target = "_blank">iCIMS</a>
                                    </p>
                                    <p> <span className = "text-2xl">📐 </span> 
                                ta'd <span className = "font-extrabold">abstract algebra</span>
                                    </p>
                                    <p><span className = "text-2xl">🛠️ </span> built stuff with <a className = "font-extrabold  hover:underline decoration-2" href = "https://www.linkedin.com/company/full-stack-at-brown/" target = "_blank">full stack at brown</a></p>
                                    <p>
                                        <span className = "text-2xl">🦀 </span>
                                        spent a summer learning <span className = "font-extrabold">rust</span>
                                    </p>
                                    <p className = "font-extrabold">
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