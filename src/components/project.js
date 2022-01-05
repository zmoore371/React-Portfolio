import React, {useState} from 'react';
import Navbar from './navbar';
import About from './pages/About'
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Work from './pages/Work';

export default function Project() {
    const [currentPage, setCurrentPage] = useState("About")

    const renderPage = () => {
        if(currentPage ==="About") {
            return <About />
        }
        if(currentPage ==="Work") {
            return <Work />    
        }
        if(currentPage ==="Contact") {
            return <Contact /> 
        }
        return <Resume />
    }

    const handlePageChange = (page) => setCurrentPage(page)

    return(
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )

}