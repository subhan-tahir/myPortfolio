import React, { useContext } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { menu } from "../script";
import pdf from "../Muhammad Subhan.pdf";
import Sidebar from "./Sidebar";
import { SidebarToggleContext } from "../context/SidebarToggleProvider";

const Navbar = () => {
  const { show, icon, handleShow } = useContext(SidebarToggleContext);

  return (
    <>
      <div className="bg-black w-full flex justify-between items-center text-white p-4 relative">
        <div className="flex-1">
          <h1 className="text-[20px] font-[600]">Muhammad Subhan.</h1>
        </div>
        <div className="flex-1">
          <ul className="sm:gap-6 sm:text-[17px] font-[600] font-sans sm:flex hidden">
            {menu.map((item, index) => (
              <a href={item.link} key={index}>
                <li className="cursor-pointer  group relative">{item.li}
                <span className="nav-item-underline absolute left-0 bottom-0 w-0 h-[3px] bg-white transition-all origin-right ease-in-out rounded-sm duration-300 transform scale-x-0 group-hover:scale-x-100 group-hover:w-full group-hover:origin-left"></span>

                </li>
              </a>
            ))}
          </ul>
        </div>
        <div className="sm:flex hidden">
          <a href={pdf} download="Muhammad_Subhan_Resume.pdf ">
            <button className="bg-white text-black px-7 rounded-[5px] py-2 font-bold flex items-center gap-2">
              RESUME <MdOutlineFileDownload />
            </button>
          </a>
        </div>

        {/* hanburger Button for Mobile */}
        <div className="burgerButton sm:hidden flex text-white bg-transparent text-2xl font-extralight cursor-pointer" onClick={handleShow}>
         
          {icon ? (
            <button className="relative h-12 w-12 rounded-full bg-black transition-colors hover:bg-black">
              <span className="absolute h-1 w-8 bg-white" style={{ left: "50%", top: "50%", transform: "translateX(-50%) translateY(-50%) rotate(45deg)", transition: "transform 0.5s ease-in-out" }}></span>
              <span className="absolute h-1 w-8 bg-white" style={{ left: "50%", top: "50%", transform: "translateX(-50%) translateY(-50%) rotate(-45deg)", transition: "transform 0.5s ease-in-out" }}></span>
              <span className="absolute h-1 w-3 bg-white" style={{ bottom: "50%", left: "50%", transform: "translateX(-50%) translateY(50%) rotate(45deg)", transition: "transform 0.5s ease-in-out" }}></span>
            </button>
          ) :
            
              (
                <button className="relative h-12 w-12 rounded-full bg-black transition-colors hover:bg-gray-800">
                  <span className="absolute h-1 w-8 bg-white" style={{ left: "50%", top: "35%", transform: "translateX(-50%) translateY(-50%) rotate(0deg)", transition: "transform 0.5s ease-in-out" }}></span>
                  <span className="absolute h-1 w-8 bg-white" style={{ left: "50%", top: "50%", transform: "translateX(-50%) translateY(-50%) rotate(0deg)", transition: "transform 0.5s ease-in-out" }}></span>
                  <span className="absolute h-1 w-3 bg-white" style={{ bottom: "35%", left: "calc(50% + 10px)", transform: "translateX(-50%) translateY(50%) rotate(0deg)", transition: "transform 0.5s ease-in-out" }}></span>
                </button>
              )}
        </div>

        <Sidebar showSidebar={show} />
      </div>
    </>
  );
};

export default Navbar;
