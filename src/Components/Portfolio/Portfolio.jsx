import React, { Component } from 'react';
import por1 from '../../images/portfolio/cabin.png'
import por2 from '../../images/portfolio/cake.png'
import por3 from '../../images/portfolio/circus.png'
import por4 from '../../images/portfolio/game.png'
import por5 from '../../images/portfolio/safe.png'
import por6 from '../../images/portfolio/submarine.png'

export default class Portfolio extends Component {

  render() {
    return <>
      <section id='portfolio'>
        <div className="container text-center py-5 px-5">
          <div className="row py-5">
            <h1>PORTFOLIO</h1>
            <div className='d-flex justify-content-center'>
              <div className='port_line align-self-center me-2'></div>
              <svg className="port-svg text-black" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
              <div className='port_line align-self-center ms-2'></div>
            </div>
            <div className="row px-5 g-5">
              <div className="col-md-4">
                <div className="item position-relative">
                  <img src={por1} className="w-100 rounded-3" alt="..." />
                  <div className='overlay d-flex justify-content-center align-items-center rounded-3' data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div className='text-white'>
                      <p className='text-white display-1'> + </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item position-relative">
                  <img src={por2} className="w-100 rounded-3" alt=".." />
                  <div className='overlay d-flex justify-content-center align-items-center rounded-3' data-bs-toggle="modal" data-bs-target="#exampleModal1">
                    <div className='text-white'>
                      <p className='text-white display-1'> + </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item position-relative">
                  <img src={por3} className="w-100 rounded-3" alt=".." />
                  <div className='overlay d-flex justify-content-center align-items-center rounded-3' data-bs-toggle="modal" data-bs-target="#exampleModal2">
                    <div className='text-white'>
                      <p className='text-white display-1'> + </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item position-relative">
                  <img src={por4} className="w-100 rounded-3" alt=".." />
                  <div className='overlay d-flex justify-content-center align-items-center rounded-3' data-bs-toggle="modal" data-bs-target="#exampleModal3">
                    <div className='text-white'>
                      <p className='text-white display-1'> + </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item position-relative">
                  <img src={por5} className="w-100 rounded-3" alt=".." />
                  <div className='overlay d-flex justify-content-center align-items-center rounded-3' data-bs-toggle="modal" data-bs-target="#exampleModal4">
                    <div className='text-white'>
                      <p className='text-white display-1'> + </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item position-relative">
                  <img src={por6} className="w-100 rounded-3" alt=".." />
                  <div onClick={this.slider} className='overlay d-flex justify-content-center align-items-center rounded-3' data-bs-toggle="modal" data-bs-target="#exampleModal5">
                    <div className='text-white'>
                      <p className='text-white display-1'> + </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div>
                <div className='text-center pt-3'>
                  <h1>LOG CABIN</h1>
                  <div className='d-flex justify-content-center'>
                    <div className='port_line align-self-center me-2'></div>
                    <svg className="port-svg text-black" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                    <div className='port_line align-self-center ms-2'></div>

                  </div>
                </div>
              </div>
              <div className="modal-body">
                <img src={por1} className='w-100' alt="..." />
                <p className='text-center py-2'>molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">X Close</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div>
                <div className='text-center pt-3'>
                  <h1>TASTY CAKE</h1>
                  <div className='d-flex justify-content-center'>
                    <div className='port_line align-self-center me-2'></div>
                    <svg className="port-svg text-black" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                    <div className='port_line align-self-center ms-2'></div>

                  </div>
                </div>
              </div>
              <div className="modal-body">
                <img src={por2} className='w-100' alt="..." />
                <p className='text-center py-2'>molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">X Close</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
              <div>
                <div className='text-center pt-3'>
                  <h1>CIRCUS TENT</h1>
                  <div className='d-flex justify-content-center'>
                    <div className='port_line align-self-center me-2'></div>
                    <svg className="port-svg text-black" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                    <div className='port_line align-self-center ms-2'></div>

                  </div>
                </div>
              </div>
              <div className="modal-body">
                <img src={por3} className='w-100' alt="..." />
                <p className='text-center py-2'>molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">X Close</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
              <div>
                <div className='text-center pt-3'>
                  <h1>CONTROLLER</h1>
                  <div className='d-flex justify-content-center'>
                    <div className='port_line align-self-center me-2'></div>
                    <svg className="port-svg text-black" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                    <div className='port_line align-self-center ms-2'></div>

                  </div>
                </div>
              </div>
              <div className="modal-body">
                <img src={por4} className='w-100' alt="..." />
                <p className='text-center py-2'>molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">X Close</button>
              </div>
            </div>
          </div>

        </div>

        <div className="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
              <div>
                <div className='text-center pt-3'>
                  <h1>LOCKED SAFE</h1>
                  <div className='d-flex justify-content-center'>
                    <div className='port_line align-self-center me-2'></div>
                    <svg className="port-svg text-black" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                    <div className='port_line align-self-center ms-2'></div>

                  </div>
                </div>
              </div>
              <div className="modal-body">
                <img src={por5} className='w-100' alt="..." />
                <p className='text-center py-2'>molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">X Close</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
              <div>
                <div className='text-center pt-3'>
                  <h1>SUBMARINE</h1>
                  <div className='d-flex justify-content-center'>
                    <div className='port_line align-self-center me-2'></div>
                    <svg className="port-svg text-black" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                    <div className='port_line align-self-center ms-2'></div>

                  </div>
                </div>
              </div>
              <div className="modal-body">
                <img src={por6} className='w-100' alt="..." />
                <p className='text-center py-2'>molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">X Close</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  }
}
