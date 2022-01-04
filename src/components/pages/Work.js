import React from 'react';

export default function Work() {
    return(
        <div className="work" id="work">
            <h2>My Projects</h2>
            <div className="work-main">
                <a href="https://philipbrowning.github.io/project1/" className="large-card" id="card1">
                    <div className="label">
                      <h3>Recipe Planner</h3>
                      <a className="repo-link" href="https://github.com/PhilipBrowning/project1">Link to Repository</a>
                    </div>
                </a>
                {/* <a className="repo-link" href="https://github.com/PhilipBrowning/project1">Link to Repository</a> */}
                <a href="https://zmoore371.github.io/Homework-Week-6/" className="large-card" id="card2">
                    <div className="label">
                      <h3>Weather Dashboard</h3>
                      <a className="repo-link" href="https://github.com/zmoore371/Homework-Week-6">Link to Repository</a>
                    </div>
                </a>
                {/* <a className="repo-link" href="https://github.com/zmoore371/Homework-Week-6">Link to Repository</a> */}
                <a href="https://zmoore371.github.io/Homework-Week-5/" className="large-card" id="card3">
                    <div className="label">
                      <h3>Day Planner</h3>
                      <a className="repo-link" href="https://github.com/zmoore371/Homework-Week-5">Link to Repository</a>
                    </div>
                </a>
                {/* <a className="repo-link" href="https://github.com/zmoore371/Homework-Week-5">Link to Repository</a> */}
                <a href="https://zmoore371.github.io/Homework-Week-4/" className="large-card" id="card4">
                    <div className="label">
                      <h3>Javascript Quiz</h3>
                      <a className="repo-link" href="https://github.com/zmoore371/Homework-Week-4">Link to Repository</a>
                    </div>
                </a>
                {/* <a className="repo-link" href="https://github.com/zmoore371/Homework-Week-4">Link to Repository</a> */}
                <a href="https://zmoore371.github.io/Homework-Week-3/" className="large-card" id="card5">
                    <div className="label">
                      <h3>Password Generator</h3>
                      <a className="repo-link" href="https://github.com/zmoore371/Homework-Week-3">Link to Repository</a>
                    </div>
                </a>  
                {/* <a className="repo-link" href="https://github.com/zmoore371/Homework-Week-3">Link to Repository</a>           */}
            </div>
        </div>
    )
}