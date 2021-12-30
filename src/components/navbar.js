import React from 'react';

// const styles = {
//     nav: {
//         textDecoration: "none",
//         display: "flex",
//         flexDirection: "row",
//         alignItems: "center",
//         height: "75px"
//     },
//     reference: {
//         backgroundColor: "#12263A",
//         width: "80%",
//         fontSize: "20px",
//         textDecoration: "none",
//         padding: "10px 0px 10px 0px"
//     }


// }



function Navbar() {

    // return (
    //     <nav style={styles.nav}>
    //         <a style={styles.reference} href="/">About Me</a>
    //         <a style={styles.reference}>Work</a>
    //         <a style={styles.reference}>Contact</a>
    //         <a style={styles.reference}>Resume</a>
    //     </nav>
    // )

    return(
        <nav>
            <a className="reference" href="#about-me">About</a>
            <a className="reference" href="#work">Work</a>
            <a className="reference" href="#contact-me">Contact</a>
            <a className="reference" href="f">Resume</a>
        </nav>
    )

}




export default Navbar