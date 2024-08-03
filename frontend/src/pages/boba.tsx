import Marquee from "react-fast-marquee"
import { BlurbItems, BlurbInfo } from "../utils/consts"


export default function Boba(){



    return(
        <div>
            <Marquee autoFill className = "overflow-hidden">
                <div className = "text-8xl mr-12 font-inter font-bold mb-12">BOBA!</div>
            </Marquee>

            <div className = "px-20 text-xl font-jmono">
                as someone who's drank a lot boba in their lifetime i have compiled a comprehensive list of various boba establishments and my <span className = "font-extrabold">*extremely*</span> qualified opinions on them c:

                
            </div>

            <div className = "grid grid-cols-1 px-20 py-12 w-fit m-auto gap-4">
                {
                    BlurbItems.map((blrb: BlurbInfo) =>
                        <BobaBlurb company = {blrb.company} order = {blrb.order} location = {blrb.location} review = {blrb.review}/>
                )
                }
            </div>
        
        </div>
    )
}

function BobaBlurb(props: BlurbInfo){
    return(
        <div className = "p-4 w-full px-6">
            <div className = "text-3xl font-black font-inter mb-2">{props.company}</div>
            <div className = "font-jmono text-lg mx-6">
                <p><span className = "font-bold">location: </span>{props.location}</p>
                <p><span className = "font-bold">my go-to: </span>{props.order}</p>
                <p>{props.review}</p>
            </div>
        </div>
    )
}