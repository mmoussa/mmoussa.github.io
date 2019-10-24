import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import profilePic from './IMG_5915.JPG';

class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={profilePic}
                        alt="avatar"
                        className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Mohammad Moussa</h1>
                            <hr/>
                            <p>
                                Hello! <br/> I am a software developer in my 4th year of the Honours Bachelor of Computer Science (Mobile Computing) program at Sheridan College.
                            </p>
                            <hr/>
                            <p>Android (Java) | iOS (Swift) | C C++ C# development | machine learning in Python</p>
                            <div className="social-links">
                                <Cell col={6}>
                                {/* LinkedIn */}
                                    <a href="https://www.linkedin.com/in/moussamo/" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                    </a>
                                </Cell>
                                <Cell col={6}>
                                {/* Github */}
                                    <a href="https://github.com/mmoussa" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-github-square" aria-hidden="true"/>
                                    </a>
                                </Cell>
                                

                                
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;