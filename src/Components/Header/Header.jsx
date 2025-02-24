import React from "react";
import './Header.css';
import {Link} from "react-scroll";

function Navbar(){
    return(
        <div className="header">
            <div className="header__left">
                <h1>
                    ML Engineer
                </h1>
            </div>
                <div className="header__right">
                    <Link to="about" smooth={true} duration={500}>
                        <h3>About me</h3>
                    </Link>
                    <Link to="skills" smooth={true} duration={500}>
                        <h3>Skills</h3>
                    </Link>
                    <Link to="project" smooth={true} duration={500}>
                        <h3>Project</h3>
                    </Link>
                    <Link to="exp" smooth={true} duration={500}>
                        <h3>Experience</h3>
                    </Link>
                    <Link to="contact" smooth={true} duration={500}>
                    <h3>Contact</h3>
                    </Link>
                    <h3 className="header__rightbutton">Join with me</h3>

                </div>
            

        </div>
    )
    
}
export default Navbar;