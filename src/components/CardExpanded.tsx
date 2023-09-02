import { motion,AnimatePresence } from "framer-motion";
import React from "react";
import { GrGithub} from "react-icons/gr"
import { SiFlask } from "react-icons/si"
import { CgCloseR  } from "react-icons/cg"


interface cardinfo 
{
    title: string;
    desc: string;
    link : string;

}
const CardExpanded:React.FC<cardinfo> = ({title,desc,link}) => {
    return ( 
        

        <motion.div className=" absolute rounded-xl w-[720px] h-[500px] mx-auto bg-slate-950 ">
          <motion.button className=" bg-red-800 w-[10px] h-[10px] mr-0"><CgCloseR/></motion.button>
          
            <motion.h4 className=" font-bold text-md text-white flex justify-center gap-2"><SiFlask/><motion.p> flask</motion.p></motion.h4>
            <motion.p className=" font-sans text-white mx-2">flask is cool so you should make sure to learn it</motion.p>
            <motion.a href = {link} className=""><GrGithub/></motion.a>

        </motion.div>
    )   
}
 
export default CardExpanded