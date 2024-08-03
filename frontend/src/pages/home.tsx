import { AltNav } from "../layouts/core/navs";
import Marquee from "react-fast-marquee";
function Home(){
    return(
            <div>
                <div className = " grid-cols-2 grid px-20 mt-6 mb-12">
                    <div className = "text-5xl font-jmono font-black">
                        <p>hi! welcome to my little corner of the internet.
                        <br/><br/>
                        i'm a developer and art enthusiast currently studying at brown university! you can find some of my stuff below {'\u21B4'}        
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className = "min-h-screen  mt-20 py-6 px-12">
                    <div className = "text-8xl font-inter font-black overflow-hidden mb-12">
                        featured work
                    </div>

                    <div className = "font-jmono text-2xl font-extrabold">under construction!</div>
                    <div className = "grid grid-cols-2 outline outline-2 outline-black h-full hidden">
                        <div className = "p-4">h</div>
                        <div className = "p-4">h</div>
                        <div className = "p-4">h</div>
                        <div className = "p-4">h</div>
                    </div>
                </div>
                
                
            </div>
       
    )
}



export default Home;