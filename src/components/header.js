import React from 'react';
import '../styles/styles.css'

// const styles = {
//     header: {
//         display: "flex",
//         flexDirection: "row",
//         width: "100%"
//     },
//     h1: {
//         margin: 0,
//         textAlign: "center",
//         color: "#12263A",
//         paddingTop: "50px"
//     }


// }

function Header(){

    // return (
    //     <header style={styles.header}>
    //         <h1 style={styles.h1}>Zachary Moore</h1>
    //     </header>
    // )

    return (
        <header className="head">
            <h1 className='header h1'>Zachary Moore</h1>
        </header>
    )

}


export default Header;