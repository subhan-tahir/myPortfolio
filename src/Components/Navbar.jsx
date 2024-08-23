import React,{useState} from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { menu } from "../script"; // Ensure menu is correctly imported from the script
import pdf from "../Muhammad Subhan.pdf";

const Navbar = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <div className="bg-black w-full flex justify-between items-center text-white p-4 relative">
        <div>
          <h1 className="text-[20px] font-[600]">Muhammad Subhan.</h1>
        </div>
        <div>
          <ul className="sm:gap-6 sm:text-[17px] font-[600] font-sans sm:flex hidden">
            {menu.map((item, index) => (
              <a
              className={`relative group ${activeIndex === index ? ' border-b-2' : ''} `}
              href={`${item.link}`} // Assuming item.link contains the id of the target section
              key={index}
              onClick={() => handleClick(index)}
              
            >
              <li
                className="cursor-pointer" 
              >
                {item.li}
              </li>
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-white transition-all ease-in-out duration-300 group-hover:w-full"></span>
            </a>
            ))}
          </ul>
        </div>
        <div className="sm:flex hidden">
          <a href={pdf} download="Muhammad_Subhan_Resume.pdf">
            <button className="bg-white text-black px-7 rounded-[5px] py-2 font-bold flex items-center gap-2">
              RESUME <MdOutlineFileDownload />
            </button>
          </a>
        </div>
        <div
          className="burgerButton sm:hidden flex text-white bg-transparent text-2xl font-extralight cursor-pointer"
          onClick={props.toggleHandler}
        >
          {props.showIcon ? 

(
            <button className="relative h-12 w-12 rounded-full bg-black transition-colors hover:bg-black">
              <span
                className="absolute h-1 w-8 bg-white"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translateX(-50%) translateY(-50%) rotate(45deg)",
                  transition: "transform 0.5s ease-in-out",
                }}
              ></span>
              <span
                className="absolute h-1 w-8 bg-white"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translateX(-50%) translateY(-50%) rotate(-45deg)",
                  transition: "transform 0.5s ease-in-out",
                }}
              ></span>
              <span
                className="absolute h-1 w-3 bg-white"
                style={{
                  bottom: "50%",
                  left: "50%",
                  transform: "translateX(-50%) translateY(50%) rotate(45deg)",
                  transition: "transform 0.5s ease-in-out",
                }}
              ></span>
            </button>
          )
:
(
            <button
              className="relative h-12 w-12 rounded-full bg-black transition-colors hover:bg-gray-800"
            >
              <span
                className="absolute h-1 w-8 bg-white"
                style={{
                  left: "50%",
                  top: "35%",
                  transform: "translateX(-50%) translateY(-50%) rotate(0deg)",
                  transition: "transform 0.5s ease-in-out",
                
                }}
              ></span>
              <span
                className="absolute h-1 w-8 bg-white"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translateX(-50%) translateY(-50%) rotate(0deg)",
                  transition: "transform 0.5s ease-in-out",
                }}
              ></span>
              <span
                className="absolute h-1 w-3 bg-white"
                style={{
                  bottom: "35%",
                  left: "calc(50% + 10px)",
                  transform: "translateX(-50%) translateY(50%) rotate(0deg)",
                  transition: "transform 0.5s ease-in-out",
                }}
              ></span>
            </button>
          )}
        </div>
      </div>

      <div
        className={`bg-white h-screen w-[70%] sm:w-[30%] border fixed shadow-black shadow-xl top-0 transition-all duration-500 ease-in-out z-10 ${
          props.sideBar ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex flex-col items-center justify-around h-full">
          <div>
            <h1 className="font-extrabold text-[25px]">Muhammad Subhan</h1>
          </div>
          <ul className="justify-center items-center flex-col gap-4 text-2xl mt-12 flex">
            {menu.map((item, index) => (
              <a
                href={`${item.link}`} // Assuming item.link contains the id of the target section
                key={index}
                onClick={props.handleClick} // Close the sidebar when a link is clicked
              >
                <li className="cursor-pointer hover:text-gray-400 transition-all font-bold">
                  {item.li}
                </li>
              </a>
            ))}
          </ul>
          <div>
            <a href={pdf} download="Muhammad_Subhan_Resume.pdf">
              <button className="bg-black text-white px-7 rounded-[5px] py-2 font-bold flex items-center gap-2">
                RESUME <MdOutlineFileDownload />
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;






