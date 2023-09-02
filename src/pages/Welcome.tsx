import Semi from "../components/Semi";

const Welcome = ():JSX.Element=> {
    return ( 
        <>
        <div className="w-screen h-screen font-bruno text-8xl absolute t-0">
           <p className=" font-bruno text-6xl sm:text-8xl relative top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] 2xl:whitespace-nowrap whitespace-pre-wrap z-[-1] text-center">Hi, I am Vishakh Prakash</p> 
            <Semi/> 
        </div >
        </>
     );
}
 
export default Welcome;