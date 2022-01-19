import React from 'react';
import snoop from "./aboutpics/dawg.jpg"
import jump from "./aboutpics/jump.gif"

export default function About() {
    return(
        <div className="about-me">
    
            <h2>About Me</h2>
        
            <div className="about-me-main">
                <p>I grew up in a small town in NC and after graduating high school moved to Wilmington NC to be by the beach. I got a job at a local automotive repair facilty and worked my way up the chain to a full time mechanic while also enjoying many of the features that my little coastal town has to offer. After spending many years in the Automotive industry I decided it was time to make a change and sought after further education and stumbled upon a program offerd by UNC for full stack web development. I hope that by completing this course I can rocket myself into a new chapter of my life filled with new challenges and rewards.</p>
                {/* <p><img src={jump} alt="4 Wheeler Jump" className='aboutImg'></img>I enjoy spending my weekends camping and riding ATV's with my friends! </p>
                <p><img src={snoop} alt="My grandma, Snoop Dog, and Myself" className='aboutImg' ></img></p> 
                Just gonna leave this here for now, tired of messing with it for today */}
            </div>
        </div>

    )
}