import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import BackgroundHero from "../components/BackgroundHero"
import { FiPhone, FiMail, FiMapPin, FiFacebook } from "react-icons/fi"

const ContactPage = ({ data }) => {
  const isItSunday = () => {
    if (new Date().getDay() === 0) {
      return true
    } else {
      return false
    }
  }

  return (
    <Layout>
      <SEO title="Contact" />

      <BackgroundHero
        img={data.img.childImageSharp.fluid}
        title="Contact"
        styleClass="contact-background"
        alt="Spectacles Silhouette;Image by Jean Gerber from Unsplash.com"
      />
      <section className="py-5">
        <div className="container">
          {/* <Title title="Get in touch"></Title> */}
          <div className="row">
            <div className="col-10 col-sm-4 mx-auto text-left">
              <p>
                If you have any questions, please feel free to call or drop us
                an email.
              </p>
              <p>
                If you don't get an answer immediately, we might be a little
                busy and we will get back to you as soon as we can!
              </p>
              <p>
                <FiPhone className="mr-2" />
                <a href="tel:+65 6732 3180">+65 6732 3180</a>
              </p>
              <p>
                <FiMail className="mr-2" />
                <a href="mailto: firsteyesimage@gmail.com">
                  firsteyesimage@gmail.com
                </a>
              </p>
              <p>
                <FiFacebook className="mr-2" />
                <a href="https://www.facebook.com/FirstEyesimage/">
                  www.facebook.com/firsteyesimage
                </a>
              </p>
            </div>

            <div className="col-10 col-sm-4 mx-auto text-left">
              <iframe
                title="Store Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.779741582175!2d103.83133831444053!3d1.307344999046488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1992a6c0228d%3A0x6317278ea6adf692!2sFirst.Eyesimage.Com%20Pte%20Ltd!5e0!3m2!1sen!2ssg!4v1586961107242!5m2!1sen!2ssg"
                style={{
                  width: "inherit",
                  frameborder: "",
                  border: "0",
                  allowfullscreen: "",
                }}
              ></iframe>
              <p>
                <FiMapPin className="mr-2" />
                #03-72 Far East Plaza, 14 Scotts Rd, 228213
              </p>

              <div
                className={`row mb-2 ${isItSunday() ? "" : "font-weight-bold"}`}
              >
                <div className="col-12">Monday - Saturday </div>
                <div className="col-12"> 10:30am - 07:50pm</div>
              </div>
              <div className={`row ${isItSunday() ? "font-weight-bold" : ""}`}>
                <div className="col-12 ">Sunday </div>
                <div className="col-12 "> 11:00am - 07:00pm</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10 col-sm-4 mx-auto text-center">
              <Link to="/">
                <button className="btn text-uppercase btn-yellow mt-5">
                  Back to home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "jean-gerber-QRU55nh_4X8-unsplash.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ContactPage
