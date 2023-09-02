import { useState } from "react";
import {  BsInstagram } from "react-icons/bs"
import { CgMail } from "react-icons/cg"
import { TbBrandLinkedin } from "react-icons/tb"
const Contacts = ():JSX.Element => {
    const [li, setLi] = useState<string>("white")
    const [ii, setIi] = useState<string>("white")
    const [mi, setMi] = useState<string>("white")
    return (  
        <div className=" relative w-screen h-screen bg-black flex justify-center items-center gap-8" id="contact" >
            {/* linkedin */}
            <div className=" h-screen flex items-center bg-black hover:bg-[#D4CA5A]" onMouseOver={() => {setLi("black")}} onMouseOut={() => {setLi("white")}}><a href="https://www.linkedin.com/in/vishakhprakash/" className="h-screen flex flex-col justify-center  gap-y-2 w-[32px]" ><span className="flex"><TbBrandLinkedin  color = {li} size = {40}/></span><p className=" flex flex-wrap rotate-90 font-bruno font-bold tracking-widest text-xl ">linkedin</p></a></div>
            {/* instagram */}
            <div className= " h-screen flex items-center bg-black hover:bg-[#D4CA5A]" onMouseOver={() => {setIi("black")}} onMouseOut={() => {setIi("white")}}><a href="https://www.instagram.com/vishakh_pro/" className="h-screen flex flex-col justify-center  gap-y-2 w-[32px]"><span className="flex"><BsInstagram color = {ii} size = {32}/></span><p className=" flex flex-wrap rotate-90 font-bruno font-bold tracking-widest text-xl mx-2 ">instagram</p></a></div>
            {/* mail */}
            <div className="relative h-screen flex items-center bg-black hover:bg-[#D4CA5A]" onMouseOver={() => {setMi("black")}} onMouseOut={() => {setMi("white")}}><a href="mailto:vishakhishere@gmail.com" className="h-screen flex flex-col justify-center  gap-y-2 w-[32px]"><span className="flex"><CgMail color = {mi} size = {50}/></span><p className=" flex flex-wrap rotate-90 font-bruno font-bold tracking-widest text-xl ">mail</p></a></div>
        </div>
    );
}
 
export default Contacts;