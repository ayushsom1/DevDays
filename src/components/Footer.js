import React from 'react';
import moment from 'moment';

const Footer = () => {

  const today = new Date()

  return (
    <div className='footer'>
      <p>
        &copy; Ayush Som & Harshit Sharma | { moment(today).format('YYYY-MM-DD') }
      </p>
    </div>
  )
}

export default Footer
