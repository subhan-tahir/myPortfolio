import React, { createContext, useState, useEffect } from "react";

const SidebarToggleContext = createContext();

const SidebarToggleProvider = ({ children }) => {
    const [show, setShow] = useState(false);
    const [icon, setIcon] = useState(false);

    const handleShow = () => {
        setIcon(!icon);
        setShow(!show);
    };

    const handleLinkClick = () => {
        setIcon(false);
        setShow(false);
    };

    // Disable scrolling when the sidebar is open
    useEffect(() => {
        if (show) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [show]);

    return (
        <SidebarToggleContext.Provider value={{ show, icon, handleShow, handleLinkClick,setShow,setIcon }}>
            {children}
        </SidebarToggleContext.Provider>
    );
};

export { SidebarToggleProvider, SidebarToggleContext };
