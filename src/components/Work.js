import React from 'react';
import image1 from './assets/img-1.jpg';
import image2 from './assets/img-2.jpg';
import image3 from './assets/img-3.jpg';

const Work = () => {
  return (
    <>
      <div id="work" className='skills'>
        Work:
      </div>

      <div className='work mb-4'>

        <div className='row'>

          <div className='col'>
            <div className='card'>
              <img src={image1} className='card-img-top' alt='img' />
              <div className='card-body'>
                <h5 className='card-title'>Project 1</h5>
                <p className="card-text">A CRUD web app to track and store contracts</p>
                <a href='#a' className='btn btn-success m-1'>Live</a>
                <a href='#a' className='btn btn-success m-1'>Code</a>
              </div>
            </div>
          </div>

          <div className='col'>
            <div className='card'>
              <img src={image2} className='card-img-top' alt='img' />
              <div className='card-body'>
                <h5 className='card-title'>Project 2</h5>
                <p className="card-text">Project 2</p>
                <a href='#aa' className='btn btn-success m-1'>Live</a>
                <a href='#a' className='btn btn-success m-1'>Code</a>
              </div>
            </div>
          </div>

          <div className='col'>
            <div className='card'>
              <img src={image3} className='card-img-top' alt='img' />
              <div className='card-body'>
                <h5 className='card-title'>Project 3</h5>
                <p className="card-text">A CRUD web app to track and store contracts</p>
                <a href='#a' className='btn btn-success m-1'>Live</a>
                <a href='#a' className='btn btn-success m-1'>Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work
