import React, { useState } from "react";
import Logo from "../images/Logo5.png";
import Button from "./Navbar components/Button";
import NavLinks from "./Navbar components/NavLinks";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="" >
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto text-white w-full flex justify-between">
          {/* <h3 style={{cursor:"pointer"}} >WERA</h3> */}
          <img src={Logo} alt="wera" href="/landingpage" className="md:cursor-pointer h-20 " />
          <div style={{cursor:"pointer"}} className="text-3xl text-white md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}>menu</ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden text-white uppercase items-center gap-6 font-[Poppins]" >
          
         
        </ul>
        <div className="md:block hidden text-white" style={{fontSize:"20px"}}>
        {/* <NavLinks /> */}
        </div>
        
        <ul
          className={`
        md:hidden bg-black fixed w-full text-white top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          {/* <NavLinks /> */}
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;