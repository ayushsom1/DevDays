import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import dev from './assets/dev.png'
import camera from './assets/camera.png'
import sofft from './assets/sofft.png'



const Skills = () => {
  return (
    <section id="skill-section" >
      <div className='skills'>

        <div className='navigation'>
          <h1><strong>Skills, we have </strong></h1>
        </div>


        <Row style={{
          margin: '2rem',
        }}>

          <Col sm><Card>
            <Card.Img src={dev} rounded />
            <Card.Body>
              <h5><strong> Web Development </strong></h5>
              <br />
              {/* <h6>A Learner</h6> */}
            </Card.Body>
          </Card></Col>

          <Col sm><Card>
            <Card.Img src={sofft} />
            <Card.Body>
              <h5><strong> Software Development </strong></h5>
              <br />
              {/* <h6>A Learner</h6> */}
            </Card.Body>
          </Card></Col>

          <Col sm><Card>
            <Card.Img src={camera} />
            <Card.Body>
              <h5><strong>Photography</strong></h5>
              <br />
              {/* <h6>A Learner</h6> */}
            </Card.Body>
          </Card></Col>

        </Row>
        <hr />
        <div className="navigation">Technologies used</div>
        <div id="wrapper">
          <div className='box'><i className="fab fa-js"></i></div>
          <div className='box'><i className="fab fa-html5"></i></div>
          <div className='box'><i className="fab fa-css3-alt"></i></div>
          <div className='box'><i className="fab fa-node"></i></div>
          <div className='box'><i className="fab fa-react"></i></div>
          <div className='box'><i className="fab fa-bootstrap"></i></div>
        </div>
        <hr />
      </div >
    </section>
  )
}

export default Skills
