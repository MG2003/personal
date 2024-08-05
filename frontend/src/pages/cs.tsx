import { useState } from "react";

import { Tags, PROJECTS } from "../utils/consts";

import { Outlet } from "react-router-dom";



function Cs(){
    
    const [active_tags, setTags] = useState<string[]>([]);



    return(<div className = "px-40">
        <div className = "md:text-5xl text-3xl font-inter font-black">projects</div>

        <div id = "tags" className = "flex flex-wrap w-full gap-4 py-8 px-4">
            <div className = "font-jmono text-xl font-extrabold align-middle my-auto">tags: </div>
            {Tags.map((tag) =>
                <div key = {tag.id}
                className = 
                {active_tags.includes(tag.t) ? "tag text-primary bg-secondary" : "tag"} 
                onMouseUp = {() => {
                    if(!active_tags.includes(tag.t)){
                        setTags([...active_tags, tag.t])
                        console.log(active_tags);
                    }
                    else{
                        setTags(active_tags.filter(function(t){
                            return t !== tag.t;
                        }))
                    }         
             }}>{tag.t}</div>
                
            )}
        </div>

        <div className = "p-20">
        <Outlet/>
        </div>

       </div>);
}


export default Cs;