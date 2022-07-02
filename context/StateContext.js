import React, { createContext, useContext, useState, useRef } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
    const topSection = useRef();
    const aboutSection = useRef();
    const designsSection = useRef();
    const projectsSection = useRef();
    const footerSection = useRef();
    const [scrollY, setScrollY] = useState(0);
    const [designSelected, setDesignSelected] = useState(false);
    const [selectedDesign, setSelectedDesign] = useState(null);

    return (
        <Context.Provider
            value={{
                topSection,
                aboutSection,
                designsSection,
                projectsSection,
                footerSection,
                scrollY,
                setScrollY,
                designSelected,
                setDesignSelected,
                selectedDesign,
                setSelectedDesign
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);