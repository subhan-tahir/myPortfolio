import React, { useRef, useEffect, useState } from 'react';

const TabsBar = ({ setActiveTab, activeTab }) => {
    const techTabs = ['All', 'HTML, CSS & JS', 'React JS', 'Next JS', 'Full Stack', 'Wordpress'];
    const [bgStyle, setBgStyle] = useState({});
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const tabRefs = useRef([]);
    const containerRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    // Update sliding background
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

    // Update arrow visibility and ensure initial scroll position
    useEffect(() => {
        const container = containerRef.current;
        // Set initial scroll to 0 to ensure first tab is visible
        container.scrollLeft = 0;
        setShowLeftArrow(false);
        setShowRightArrow(container.scrollWidth > container.clientWidth);

        const handleScroll = () => {
            setShowLeftArrow(container.scrollLeft > 0);
            setShowRightArrow(
                container.scrollLeft < container.scrollWidth - container.clientWidth - 1
            );
        };

        handleScroll();
        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle drag scrolling
    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.pageX - containerRef.current.offsetLeft;
        scrollLeft.current = containerRef.current.scrollLeft;
        containerRef.current.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX.current) * 2;
        containerRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        containerRef.current.style.cursor = 'grab';
    };

    // Handle arrow clicks
    const scrollLeftBy = (amount) => {
        containerRef.current.scrollBy({ left: -amount, behavior: 'smooth' });
    };

    const scrollRightBy = (amount) => {
        containerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    };

    return (
        <div className="relative flex my-4 mx-auto md:w-auto w-full justify-center items-center gap-4 py-2 px-2 sm:px-4 bg-gray-800 text-white rounded-full">
            {/* Left Arrow */}
            {showLeftArrow && (
                <button
                    onClick={() => scrollLeftBy(150)}
                    className="absolute left-0 z-20 p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="white"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
            )}

            {/* Right Arrow */}
            {showRightArrow && (
                <button
                    onClick={() => scrollRightBy(150)}
                    className="absolute right-0 z-20 p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="white"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            )}

            {/* Scrollable Container with Shadows */}
            <div
                className="relative w-full overflow-x-auto"
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{ scrollbarWidth: 'none', cursor: 'grab' }}
            >
                {/* Left Shadow */}
                <div
                    className={`absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-white/20 to-transparent transition-opacity duration-300 pointer-events-none ${
                        showLeftArrow ? 'opacity-100' : 'opacity-0'
                    }`}
                ></div>

                {/* Right Shadow */}
                <div
                    className={`absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-white/20 to-transparent transition-opacity duration-300 pointer-events-none ${
                        showRightArrow ? 'opacity-100' : 'opacity-0'
                    }`}
                ></div>

                <div className="relative flex flex-nowrap">
                    {/* Sliding Background */}
                    <span
                        className="absolute top-0 left-0 h-full bg-white rounded-full transition-all duration-300 ease-in-out"
                        style={bgStyle}
                    ></span>
                    <div className="flex items-center justify-start w-full h-full">
                        {techTabs.map((tab, index) => (
                            <button
                                key={index}
                                ref={(el) => (tabRefs.current[index] = el)}
                                onClick={() => setActiveTab(tab)}
                                className={`relative z-10 px-4 py-2 mx-2 text-nowrap rounded-full transition-colors ${
                                    activeTab === tab
                                        ? '!text-black'
                                        : 'bg-gray-800 hover:bg-gray-700 text-white'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabsBar;