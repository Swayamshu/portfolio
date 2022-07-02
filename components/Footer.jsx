import React from 'react';
import { GrMail } from "react-icons/gr";
import { ImGithub, ImInstagram, ImFacebook2, ImTwitter, ImLinkedin, ImLink } from "react-icons/im";
import { useStateContext } from '../context/StateContext';

const Footer = () => {
    const { footerSection } = useStateContext();
    
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className="footer" ref={footerSection}>
            <div className="contact-section">
                <div>
                    <div className="contact-me">
                        Contact Me
                    </div>
                    <div id="reach-me">
                        reach out to me.
                    </div>
                </div>

                <div className="contact-details">
                    <div
                        className="social-contact"
                        style={{ cursor: "pointer" }}
                        onClick={() => window.location = "mailto:swayamshu2k@gmail.com"}
                    >
                        <GrMail className="icons"/>
                        <div className="mail-me">
                            swayamshu2k@gmail.com
                        </div>
                    </div>
                    
                    <div
                        className="social-contact"
                        style={{ cursor: "pointer" }}
                        onClick={() => window.open("https://github.com/Swayamshu")}
                    >
                        <ImGithub className="icons"/>
                        <div className="mail-me">
                            @Swayamshu
                        </div>
                    </div>

                    <div
                        className="social-contact"
                        style={{ cursor: "pointer" }}
                        onClick={() => window.open("https://www.linkedin.com/in/swayamshu-swain-bb0227208/")}
                    >
                        <ImLinkedin className="icons"/>
                        <div className="mail-me">
                            @SwayamshuSwain
                        </div>
                    </div>

                    <div
                        className="social-contact"
                        style={{ cursor: "pointer" }}
                        onClick={() => window.open("https://www.instagram.com/swayxtasy/")}
                    >
                        <ImInstagram className="icons"/>
                        <div className="mail-me">
                            @swayxtasy
                        </div>
                    </div>

                    <div
                        className="social-contact"
                        style={{ cursor: "pointer" }}
                        onClick={() => window.open("https://www.instagram.com/sways_palette/")}
                    >
                        <ImInstagram className="icons"/>
                        <div className="mail-me">
                            @sways_palette (Art Page)
                        </div>
                    </div>

                    <div
                        className="social-contact"
                        style={{ cursor: "pointer" }}
                        onClick={() => window.open("https://www.facebook.com/swayamshu.swain/")}
                    >
                        <ImFacebook2 className="icons"/>
                        <div className="mail-me">
                            @SwayamshuSwain
                        </div>
                    </div>

                    <div
                        className="social-contact"
                        style={{ cursor: "pointer" }}
                        onClick={() => window.open("https://twitter.com/SwayamshuS")}
                    >
                        <ImTwitter className="icons"/>
                        <div className="mail-me">
                            @SwayamshuS
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-info">
                {year} © Swayamshu Swain
            </div>
        </div>
    )
}

export default Footer
