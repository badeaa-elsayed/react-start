import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return <>
      <footer id='footer' className='bg_color py-5 text-white'>
        <div className="w-75 m-auto">
          <div className="row">
            <div className="col-md-4 text-center">
              <h2> LOCATION </h2>
              <p> 2215 John Daniel Drive </p>
              <p> Clark, MO 65243 </p>
            </div>
            <div className="col-md-4 text-center">
              <h2 className=''>AROUND THE WEB</h2>
              <div className='bg-bg-success d-flex justify-content-center'>
                <div className='social-icon d-flex justify-content-center align-items-center me-3'>
                  <a href="#!"><i className="fa-brands fa-facebook-f"></i></a>
                </div>
                <div className='social-icon d-flex justify-content-center align-items-center me-3'>
                  <a href="#!"><i className="fa-brands fa-twitter"></i></a>
                </div>
                <div className='social-icon d-flex justify-content-center align-items-center me-3'>
                  <a href="#!"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
                <div className='social-icon d-flex justify-content-center align-items-center'>
                  <a href="#!"><i className="fa-brands fa-dribbble"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <h2>ABOUT FREELANCER</h2>
              <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      </footer>
      <div className='bg-black text-center text-white py-4'>
        <p className='m-0'>Copyright © Your Website 2021</p>
      </div>
    </>
  }
}
