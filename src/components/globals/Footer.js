import React from "react"
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"
function Footer() {
  return (
    <footer className="footer py-3" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-12 mx-auto col-sm-6 text-yellow text-left text-capitalize">
            <p>
              <FiPhone className="mr-2" />
              <a href="tel:+65 6732 3180" className="footer-link">
                +65 6732 3180
              </a>
            </p>
            <p>
              <FiMail className="mr-2" />
              <a
                href="mailto: firsteyesimage@gmail.com"
                className="footer-link"
              >
                firsteyesimage@gmail.com
              </a>
            </p>
            <p>
              <FiMapPin className="mr-2" />
              #03-72 Far East Plaza, 14 Scotts Rd, 228213
            </p>
          </div>
          <div className="col-12 mx-auto col-sm-6 text-yellow text-left text-capitalize">
            <h6>Copyright &copy; 2020 All Rights Reserved</h6>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
