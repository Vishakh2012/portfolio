import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { GrGithub} from "react-icons/gr";
import { SiFlask } from "react-icons/si";

interface cardinfo 
{
    title: string;
    desc: string;
    link : string;
    id : string;

}
const  Card: React.FC<cardinfo> = ({title,desc,link,id}):JSX.Element => {
    const [isSelected, setIsSelected] = useState<boolean>(false)
    return (  
      <div >
      
        <motion.div layoutId={id} className="flex mx-auto my-8 rounded-xl sm:w-1/3 w-1/2 h-[100px] bg-white shadow-lg justify-center items-center" onClick = {() => {setIsSelected(true)}} whileHover={{scale: 1.5} }  >
          <motion.p className="bg-clip-text  ">{title}</motion.p>
        </motion.div>
       
      
<div className="fixed  top-[25%] left-[25%]">
<AnimatePresence mode= "wait" >
      {isSelected && (
        
        <>
        <motion.div layoutId={id} className="fixed  top-[25%] left-[25%] w-[50vw] h-[50vh]  my-4 bg-white z-10 rounded-xl" transition={{duration : 1, type :"spring", damping: 8 }  }  >
          
            <motion.h4 className=" font-bold text-md flex justify-center gap-2  "><SiFlask color = "black"/> flask</motion.h4>
            <motion.p className=" font-sans text mx-2">flask is cool so you should make sure to learn it</motion.p>
            <motion.a href = {link} className=""><GrGithub size = {32} color = "white"/></motion.a>

        </motion.div>
        <motion.div className="w-screen h-screen opacity-50 bg-black  fixed top-0 left-0" transition = {{duration : 0.5}} onClick= {() => {setIsSelected(false)}}>

        </motion.div>
        </>
      )}
       </AnimatePresence>
       </div>
      
      </div>

    );
}
 
export default Card ;