import React from 'react';

export default function Resume() {
    return(
        <div>
            <h1 className="rheader">Resume</h1>
            <h2>Professional Experience</h2>
            <h4>Lube Technician: Black's Tire and Auto Service</h4>
            <ul>
                <li>Basic automotive maintenance including oil changes, tire rotations / replacement, battery testing / replacement</li>
                <li>Maintaining a clean work environment</li>
                <li>Upkeep of shop Equipment</li>   
            </ul>
            <h4>Automotive Mechanic: Wilmington Tire and Auto</h4>  
            <ul>
                <li>Communicated with customers to identify vehicle issues and concerns</li>
                <li>Identified vehicle issues, analyzed avaliable information and provided solutions to problems found</li> 
                <li>Produced estimates for repairs</li> 
                <li>Completed vehicle repairs in timely manner with attention to detail</li>
                <li>Attened extra training opportunities provided to improve on the job skills</li>
                <li>Trained new-hires basic skills for lube-tech position</li>
            </ul>
            <h2>Education</h2>
            <h3>High school diploma: East Wake High School</h3>
            
            <h2>Key skills</h2>
            <ul>
                <li>Critical thinking</li>
                <li>Reading comprehension</li>
                <li>Basic mathematics</li>
                <li>Multitasking abilities</li>
            </ul>

            <a href="./resume/resume.pdf" download="resumezacharymoore">click here to download pdf</a>
        </div>
        
    )
}