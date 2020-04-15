import React from "react"

function Footer() {
  return (
    <footer className="footer py-3" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto col-md-6 text-yellow text-left text-capitalize">
            <h6>Address</h6>
            <h6>Contact Number</h6>
            <h6>Email Adress</h6>
          </div>
          <div className="col-6 mx-auto col-md-6 text-yellow text-left text-capitalize">
            <h6>
              All rights reserved &copy;{new Date().getFullYear().toString()}
            </h6>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
