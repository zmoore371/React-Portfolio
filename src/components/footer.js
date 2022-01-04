import React from 'react'
import '../styles/styles.css'

function Footer() {
    
    return(
    <footer className='footer'>
        <a href="https://github.com/zmoore371">
            <img className='github' src={require("../styles/icons/github.png")}></img>
        </a>
        <a href="https://www.linkedin.com/in/zachary-moore-6894841a3">
            <img className='linkedin' src={require("../styles/icons/linkedin.png")}></img>
        </a>
    </footer>
    )

}



export default Footer
