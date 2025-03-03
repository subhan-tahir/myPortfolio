import React, { useContext } from 'react'
import { menu } from '../script'
import { MdOutlineFileDownload } from "react-icons/md";
import pdf from '../Muhammad Subhan.pdf'
import { SidebarToggleContext } from '../context/SidebarToggleProvider';


const Sidebar = () => {

    const { handleLinkClick, show, handleShow, setShow,setIcon } = useContext(SidebarToggleContext)
    return (
        <>
            <div className='relative'>

                {/*sidebar overlay */}
                <div className={`${show ? 'fixed h-full w-full top-0 left-0 bg-slate-200 opacity-30' : ''}`} onClick={() => (setShow(false), setIcon(false))}></div>

                <div
                    className={`bg-white h-screen w-[70%] sm:w-[30%] border fixed shadow-black shadow-xl top-0 transition-all duration-500 ease-in-out z-10 ${show ? "left-0" : "-left-full"
                        }`}
                >

                    <div className="flex flex-col items-center justify-around h-full">
                        <div>
                            <h1 className="font-extrabold text-[25px] text-black">Muhammad Subhan</h1>
                        </div>
                        <ul className="justify-center items-center flex-col gap-4 text-2xl mt-12 flex">
                            {menu.map((item, index) => (
                                <a
                                    href={`${item.link}`}
                                    key={index}
                                    onClick={handleLinkClick}
                                >
                                    <li className="cursor-pointer hover:text-gray-400 transition-all font-bold text-black">
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
            </div>


        </>
    )
}

export default Sidebar