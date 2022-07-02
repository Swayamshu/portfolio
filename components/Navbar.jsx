import React from 'react';
import { useStateContext } from '../context/StateContext';
import { Illustration } from '.';

const Navbar = () => {
    const { topSection, aboutSection, designsSection, projectsSection, footerSection, scrollY, designSelected, setDesignSelected } = useStateContext();
    
    const scrollToSection = (ref) => {
        window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
        })
    }
    
    return (
        <div>
            <div className={scrollY ? "navbar" : "navbar-0"}>
                <div
                    id="logo"
                    onClick={() => scrollToSection(topSection)}
                >
                    Swayamshu
                </div>

                <div className="nav-group">
                    <div 
                        className="nav-elements"
                        onClick={() => scrollToSection(aboutSection)}
                    >
                        ABOUT
                    </div>
                    <div 
                        className="nav-elements"
                        onClick={() => scrollToSection(designsSection)}
                    >
                        DESIGNS
                    </div>
                    <div 
                        className="nav-elements"
                        onClick={() => scrollToSection(projectsSection)}
                    >
                        PROJECTS
                    </div>
                    <div 
                        className="nav-elements"
                        onClick={() => scrollToSection(footerSection)}
                    >
                        CONTACT
                    </div>
                </div>

                </div>
            {designSelected && <Illustration />}
        </div>
    )
}

export default Navbar
