import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl';

class Resume extends Component {
    render(){
        return(
            <div>
                <Grid className="resume-grid">
                    <Cell col={12}><h1>Experience</h1></Cell>
                </Grid>
                <Grid className="resume-grid">
                    <Cell col={6} className="job-title">
                        <h3>Junior Programmer</h3>
                    </Cell>
                    <Cell col={6}>
                    <p><b>Screen Industries Research and Training Center</b>, Toronto, ON, Canada</p>
                    <p className="date">Jan 2018 - Aug 2018</p>
                    <p className="date">Apr 2019 - Aug 2019</p>
                    <p>• Developed, tested, and debugged virtual reality applications in C++ and Java</p>
                    <p>• Researched and developed speech-driven animation for 3D characters using machine learning in Python</p>
                    <p>• Developed a face tracking plugin for Adobe After Effects in C++</p>
                    <p>• Created content in Unreal Engine to demo wireless VR technology on the GearVR</p>
                    <p>• Developed a gameplay recording plugin for Unreal Engine in C++</p>
                    <p>• Added support for developing games utilizing EEG headbands in Unreal Engine (C++)</p>
                    <p>• Developed a visualization tool to test and debug a hand tracking application on iOS (Swift/Objective C/C++)</p>
                    </Cell>
                </Grid>
                <Grid className="resume-grid">
                    <Cell col={6} className="job-title">
                        <h3>Research Assistant and Programmer</h3>
                    </Cell>
                    <Cell col={6}>
                        <p><b>Sheridan College</b>, Oakville, ON, Canada</p>
                        <p className="date">Jan 2017 - Jan 2018</p>
                        <p>• Researched methods of indoor location tracking using iBeacons, as part of a research project with SOTI Inc.</p>
                        <p>• Developed iOS location tracking applications in Swift, as well as apps to manage and calibrate the beacons</p>
                        <p>• Wrote technical reports, and participated in weekly meetings</p>
                    </Cell>
                </Grid>
                <Grid className="resume-grid">
                    <Cell col={12}>
                        <hr/>
                        <h1>Education</h1>
                    </Cell>
                </Grid>
                <Grid className="resume-grid">
                    <Cell col={6} className="job-title">
                        <h3>Honours Bachelor of Computer Science - Mobile Computing</h3>
                    </Cell>
                    <Cell col={6}>
                        <p><b>Sheridan College</b>, Oakville, ON, Canada</p>
                        <p className="date">Sep 2015 - Dec 2019</p>
                        <p>• High Honours student, maintaining cumulative GPA: 3.85/4.0 in 4th year</p>
                    </Cell>
                </Grid>
                <Grid className="resume-grid">
                    <Cell col={6}>

                    </Cell>
                    <Cell col={6}>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;