import { motion } from "framer-motion";
import Card from "./Card";

const CardCarousselAlt = ():JSX.Element => {
    
    return ( 
        <motion.div className="gap-4 flex-wrap  w-full items-center justify-center relative m-auto"
        initial = {{opacity: 0}} whileInView = {{opacity: 1}} transition={{delay:1}} viewport = {{once:false}}>
            <Card title = {"flask"} desc = "robin" link = "hi mera dil" id = "0"/>
            <Card title = {"flask"} desc = "robin" link = "hi mera dil" id = "1"/>
            <Card title = {"flask"} desc = "robin" link = "hi mera dil" id = "2"/>
            <Card title = {"flask"} desc = "robin" link = "hi mera dil" id = "3"/>
            
        </motion.div>
     );
}
 
export default CardCarousselAlt;