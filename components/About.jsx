import React from 'react';
import Image from 'next/image';
import VD from "../public/VectorDesign.svg";
import { useStateContext } from '../context/StateContext';

const About = () => {
    const { aboutSection } = useStateContext();
    
    return (
        <div ref={aboutSection}>
            <div className="heading">
                <div className="center-content">
                    <div className="titles">SWAYAMSHU SWAIN</div>
                    <div className="sub-titles">i love to code and design!</div>
                </div>
                <div className="crop-heading">
                    <VD className="vector"/>
                </div>
            </div>
        
            <div className="about-info">
                <div id="bio">
                    I’m a mechanical sophomore at IIT (BHU) Varanasi. I’m currently based in New Delhi, India. 
                    <br/><br/>
                    My areas of interest lies in software development and graphic designing.<br/>
                    I’m very passionate about learning new technologies and always try to discover and learn new tech.<br/>
                    I do UI/UX designing. I also love spending time making illustrations, and learning new design styles along the way. 
                </div>
                <div className="display-picture-bg"></div>
                <div className="profile-picture">
                    <Image
                        src={require("../public/about_dp.png")}
                        alt="Profile Picture"
                    />
                </div>
            </div>
        </div>
    )
}

export default About
