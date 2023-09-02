import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";
import { TbVip } from "react-icons/tb";
import {TfiMenu} from "react-icons/tfi"


const Navbar = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <nav className=" bg-transparent flex fixed  py-4 font-semibold top-0 w-full bg-opacity-30 backdrop-filter backdrop-blur-lg z-20  border-gray-300 border-b-[1px] justify-center items-center shadow-md">
        <div className="md:flex md:flex-row flex-column xl:w-1/3 w-full mx-4 md:mx-0">
      <div className="flex w-full">
      <div className="flex justify-start items-center my-auto " >
        <AnchorLink href = "#home"><TbVip size = {50} color = "#D4CA5A" /></AnchorLink></div>
      <div className="md:hidden flex ml-auto my-auto " onClick={() => {setOpen(!open)}}><TfiMenu color = "#D4CA5A" size = {40}/></div>
      </div>
      <div className={ `${ open ?" flex-column" : "hidden" } md:flex flex-grow justify-end item-center gap-4  border-gray-300 `}>
        <div className="flex  text-gray-700 sm:text-2xl text-xl items-center w-full md:w-auto py-2 md:py-0 md:text-center justify-center">
        <span className=" text-[#D4CA5A]"><AnchorLink href ="#projects" >projects</AnchorLink> </span>
          </div>
        <div className="flex items-center text-gray-700 sm:text-2xl text-xl w-full md:w-auto py-2 md:py-0 justify-center">
        <AnchorLink href = "#contact"><span className=" text-[#D4CA5A]">contact</span></AnchorLink></div>
        <div className="flex items-center  text-gray-700 sm:text-2xl text-xl w-full md:w-auto py-2 md:py-0 justify-center"><span className=" text-[#D4CA5A]">Blog</span></div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
