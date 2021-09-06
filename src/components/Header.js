import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { Row, Col, Image } from 'react-bootstrap'
import ayushprof from './assets/ayush-prof.jpg'
import harshitprof from './assets/harshit-prof.jpg'

const Header = () => {
  return (

    <div className='home' id="Home">
      <Zoom right cascade><div className='wel-text'>Hey, everyone this is team "<strong>Risers</strong>" ;</div></Zoom>
      <div className='container inner-header'>
        <Row>
          <Col>
            <Zoom left>
              <Image className='profilePic' src={ayushprof} roundedCircle />
              <div className='socials'>
                Ayush Som<hr />
                <a
                  href="https://www.linkedin.com/in/ayushsom/"
                  className="linkedin social" target="_blank"
                >
                  <i class="fab fa-linkedin"></i> </a>
                <a
                  href="https://github.com/ayushsom1"
                  className="social" target="_blank"
                >
                  <i class="fab fa-github"></i>                </a>
                <a href="https://twitter.com/AyushSom6" className="twitter social" target="_blank">
                  <i class="fab fa-twitter"></i>                </a>
              </div>
            </Zoom>
          </Col>
          <br />
          <Col>
            <Zoom right>
              <Image className='profilePic' src={harshitprof} roundedCircle />
              <div className='socials'>
                Harshit Sharma<hr />
                <a
                  href="https://www.linkedin.com/in/harshit-sharma-bb36b41b5/"
                  className="social" target="_blank"
                >
                  <i class="fab fa-linkedin"></i> </a>
                <a
                  href="https://github.com/harshit-sharma-gits"
                  className="social" target="_blank"
                >
                  <i class="fab fa-github"></i>                </a>
                <a href="https://twitter.com/Harshit16901106" className="twitter social" target="_blank">
                  <i class="fab fa-twitter"></i>                </a>
              </div>
            </Zoom>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Header
