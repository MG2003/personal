import { NavLink } from "react-router-dom";

function About(){


    return(
        
            <div className = "px-20 mx-auto py-6">
                <div className = "px-20">        
                    <div className = "grid grid-cols-5 py-6 mb-1 gap-10">
                        <div className = "col-span-2">
                            <img src="assets/img/webpage.jpg" className = "rounded-xl"></img>
                            <p className = "text-md font-jmono w-fit m-auto">aquarium :D</p>
                        </div>
                        <div className = "text-lg font-jmono col-span-3">      
                            <div className = "text-5xl font-inter font-black overflow-hidden">about me</div>
                            <div className = "py-6">
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

                    <div className = "text-5xl font-inter font-black">currently</div>
                        <div className = "py-6 bg-transparent font-jmono text-lg flex-col gap-2 flex">
                            <p>
                                <span className = "text-2xl">💻 </span> 
                                interning at <span className = "font-extrabold">anytime ai</span>, a startup building AI tools for lawyers and law students
                                </p>
                            <p>
                                <span className = "text-2xl">📏 </span> 
                                preparing to ta <span className = "font-extrabold">csci1260: compilers and program analysis</span>
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
                                <span className = "text-2xl">🎮 </span> 
                                making my way through <span className = "font-extrabold">
                                    another crab's treasure
                                </span>
                             </p>
                        </div>
                </div>     

           

             
            </div>

           
            
            




   
    )
}


export default About;