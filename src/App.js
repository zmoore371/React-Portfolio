import React from 'react';
import Header from './components/Header'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import Project from './components/Project';
import './styles/styles.css'

// function App(){
//     return(
//         <div>
//             <Header />
//             <Navbar />
//             <Footer />
//         </div>
//     )
// }

function App() {
    return(
        <div>
            <Header /> 
            <Project />
            <Footer />
        </div>
    )
}

export default App;