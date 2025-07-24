

import React, { useRef, useEffect, useState } from 'react';

const TabsBar = ({ setActiveTab, activeTab }) => {
    const techTabs = ['All', 'HTML, CSS & JS', 'React JS', 'Next JS', 'Full Stack', 'Wordpress'];
    const [bgStyle, setBgStyle] = useState({});
    const tabRefs = useRef([]);

    useEffect(() => {
        const activeIndex = techTabs.indexOf(activeTab);
        const activeTabElement = tabRefs.current[activeIndex];
        if (activeTabElement) {
            setBgStyle({
                width: `${activeTabElement.offsetWidth}px`,
                transform: `translateX(${activeTabElement.offsetLeft}px)`,
            });
        }
    }, [activeTab]);

    return (
        <div className="relative flex my-4 justify-center items-center gap-4 py-2 px-4 bg-gray-800 text-white rounded-full">
            {/* Sliding Background */}
            <div className='relative w-full h-full overflow-hidden '>
                <span
                    className="absolute top-0 left-0 h-full bg-white rounded-full transition-all duration-300 ease-in-out"
                    style={bgStyle}
                ></span>

                {techTabs.map((tab, index) => (
                    <button
                        key={index}
                        ref={(el) => (tabRefs.current[index] = el)}
                        onClick={() => setActiveTab(tab)}
                        className={`relative  z-10 px-4 py-2 mx-2 rounded-full  transition-colors ${activeTab === tab ? '!text-black' : 'bg-gray-800 hover:bg-gray-700 text-white'}`}
                    >
                        {tab}
                    </button>
                ))}

            </div>
        </div>
    );
};

export default TabsBar;
