import React from 'react';

function Navbar({ currentPage, handlePageChange }) {

    return(
        <nav>
            <a 
                className={currentPage === "About", "reference"}
                href="#About"
                onClick={() => handlePageChange("About")}
            >
                About
            </a>
            <a 
                className={currentPage === "Work" ? "reference active" : "reference" , "reference"}
                href="#Work"
                onClick={() => handlePageChange("Work")}
            >
                Work
            </a>
            <a
                className={currentPage === "Contact", "reference"}
                href="#Contact"
                onClick={() => handlePageChange("Contact")}
            >
                Contact 
            </a>
            <a
                className={currentPage === "Resume", "reference"}
                href="#Resume"
                onClick={() => handlePageChange("Resume")}
            >
                Resume
            </a>
            
        </nav>
    )

}




export default Navbar