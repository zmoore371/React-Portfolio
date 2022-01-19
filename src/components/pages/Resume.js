import React from 'react';
import resume from"../resume/resume.pdf"

export default function Resume() {
    return(
        <div className='resume'>
            <h1 className="rheader">Resume</h1>
            <h2>Professional Experience</h2>

            <h4>Automotive Mechanic: Wilmington Tire and Auto</h4>  
            <ul>
                <li>Inspect and troubleshoot electrical issues</li>
                <li>Diagnose, repair, and confirm completed repair solved intial complaint / problem</li> 
                <li>Provide general support to coworkers as needed</li> 
                <li>Completed vehicle repairs in timely manner with attention to detail</li>
                <li>Exercise critical-thinking skills when inspecting, troubleshooting, and diagnosing instrumentation and equipment</li>
                <li>Completed new training courses as required</li>
            </ul>

            <h4>Lube Technician: Black's Tire and Auto Service</h4>
            <ul>
                <li>General lookover of vehicles for suggested preventive maintenance</li>
                <li>Maintaining a clean work environment</li>
                <li>Upkeep of shop Equipment</li>   
            </ul>
            
            <h2>Education</h2>
            <h3>High school diploma: East Wake High School</h3>
            <h3>Certificate in full stack web development: University of Chapel Hill</h3>
            
            <h2>Key skills</h2>
            <ul>
                <li>Critical thinking</li>
                <li>Reading comprehension</li>
                <li>Basic mathematics</li>
                <li>Multitasking abilities</li>
                <li>HTML, CSS, JavaScript</li>
                <li>MYSQL, MongoDB</li>
            </ul>

            <h6>Download PDF resume <a href = {resume}  download="Zachary Moore Resume">here</a></h6>
        </div>
        
    )
}