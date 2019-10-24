import React, {Component} from 'react';
import { Card, CardTitle} from 'react-mdl';
import { CardActions, CardText, IconButton, Button, CardMenu} from 'react-mdl';
import travelarLogo from './ic_travelar.svg';

class Projects extends Component {
    render(){
        return(
            <div className="projects-grid">
                {/* Project 1 */}
                <Card className="project-card" shadow={5}>
                    <CardTitle className='card-title' style={{ background:
                    'url(' + travelarLogo + ') center no-repeat', backgroundSize: '30%'}}></CardTitle>
                    <CardTitle>TravelAR</CardTitle>
                    <CardText className='card-text'>A travel mobile app utilizing mobile AR and landmark recognition to provide a better travel/tour experience.</CardText>
                    <CardActions border>
                        <Button href='https://youtu.be/GDemT3E-T2s' target='_blank' colored>Demo</Button>
                    </CardActions>
                </Card>

                {/* Project 2 */}
                <Card className="project-card" shadow={5}>
                    <CardTitle className='card-title' style={{ background:
                    'url(http://pngimg.com/uploads/bluetooth/bluetooth_PNG43.png) center no-repeat', backgroundSize: '30%'}}></CardTitle>
                    <CardTitle>Bluetooth Location Tracking</CardTitle>
                    <CardText className='card-text'>An iOS location tracking app using Bluetooth iBeacons.</CardText>
                    <CardActions border>
                        <Button href='https://drive.google.com/file/d/0B1HoZYxHuroJcTc4ZnI3MllSeTg/view' target='_blank' colored>Demo</Button>
                    </CardActions>
                </Card>

                {/* Project 3 */}
                <Card className="project-card" shadow={5}>
                    <CardTitle className='card-title' style={{ background:
                    'url(https://amp.businessinsider.com/images/5bdc87448c35ab6a120935eb-1536-1152.jpg) top 5% center no-repeat', backgroundSize: '100%'}}></CardTitle>
                    <CardTitle>Real Estate Finder</CardTitle>
                    <CardText className='card-text'>A hybrid mobile app that finds the optimal residential areas based on the user’s criteria.</CardText>
                    <CardActions border>
                        <Button href='https://drive.google.com/file/d/0B1HoZYxHuroJT3RQaVBNckZfbEk/view' target='_blank' colored>Demo</Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default Projects;