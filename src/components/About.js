import React from 'react';
import { Card, Image } from 'react-bootstrap'
import ayush from './assets/ayush.png'
import harshit from './assets/harshit.png'


const Header = () => {
    return (
        <section id="About" className='About'>
            <div className='navigation'>About</div>
            <div id="wrapper2">
                <div>
                    <Card className='about-card'>
                        <Image src={ayush} rounded />
                        <Card.Body>
                            <h5><strong> Ayush Som </strong></h5>
                            <h7>( Enthusiastic learner )</h7>
                            <br />
                            <hr />
                            <h6>B.Tech.</h6>
                            <h6> H.B.T.U., Kanpur, UP </h6>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className='about-card'>
                        <Image variant="top" src={harshit} rounded />
                        <Card.Body>
                            <h5><strong> Harshit Sharma </strong></h5>
                            <h7>( Alpha M.L.S.A )</h7>
                            <br />
                            <hr />
                            <h6>B.Tech.</h6>
                            <h6> H.B.T.U., Kanpur, UP </h6>                        </Card.Body>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default Header