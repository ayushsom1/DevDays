import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import dev from './assets/dev.png'
import camera from './assets/camera.png'
import sofft from './assets/sofft.png'



const Skills = () => {
  return (
    <div className='skills'>


      <Container style={{
        height: '50rem',
        margin: '3rem',
      }}>

        <h1><strong><u><center>Skills</center></u></strong></h1>


        <Row style={{
          margin: '5rem',
        }}>

          <Col sm><Card style={{

          }}>
            <Image src={dev} rounded />
            <Card.Body>
              <h5><strong> Web Development </strong></h5>
              <br />
              <h6>A Learner</h6>
            </Card.Body>
          </Card></Col>

          <Col sm><Card style={{

          }}>
            <Card.Img variant="top" src={sofft} />
            <Card.Body>
              <h5><strong> Software Development </strong></h5>
              <br />
              <h6>A Learner</h6>
            </Card.Body>
          </Card></Col>

          <Col sm><Card style={{

          }}>
            <Card.Img variant="top" src={camera} />
            <Card.Body>
              <h5><strong>Passionate Photographer</strong></h5>
              <br />
              <h6>A Learner</h6>
            </Card.Body>
          </Card></Col>

        </Row>

        <Row style={{
          width: '60em',
          margin: '60px',
        }}>
          <Col md="auto"><h3><u><strong> Technologies Used: </strong></u></h3></Col>

          <Col><i className="fab fa-js"></i></Col>
          <Col><i className="fab fa-html5"></i></Col>
          <Col><i className="fab fa-css3-alt"></i></Col>
          <Col><i className="fab fa-node"></i></Col>
          <Col><i className="fab fa-react"></i></Col>
          <Col><i className="fab fa-sass"></i></Col>
          <Col><i className="fab fa-php"></i></Col>
          <Col><i className="fas fa-database"></i></Col>

        </Row>

      </Container>



    </div>
  )
}

export default Skills
