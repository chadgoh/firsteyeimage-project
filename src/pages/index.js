import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import BackgroundHero from "../components/BackgroundHero"
import Title from "../Title"
import Alert from "react-bootstrap/Alert"
import { setConfig } from "react-hot-loader"

//https://icetutor.com/question/react-hot-loader-react-%F0%9F%94%A5-dom-patch-is-not-detected/
setConfig({ showReactDomPatchNotification: false })
const IndexPage = ({ data }) => {
  const [hideAlert, setHideAlert] = useState(false)

  const content =
    "Our professional optometrist has more than 40 years of experience. Our services include eye exams, geriatric, paediatric, prescription and sports eyewear and contact lenses. We also stock the latest fashion brands at affordable prices."

  return (
    <>
      <div hidden={hideAlert} className="mt-3 mx-1">
        <div className="container-fluid">
          <Alert
            variant="success"
            className="fontSize: small"
            onClose={() => setHideAlert(true)}
            dismissible
          >
            <div className="row">
              <div className="col col-12 col-sm-6">
                <p>
                  Due to covid-19 and the Circuit Breaker measures, will be
                  rendering our services for sales of contact lenses,
                  prescription glasses, and optometry services by{" "}
                  <strong> appointment only</strong>.
                </p>
                <p>
                  Appointments can be made via{" "}
                  <a href="tel:+65 8799 2893">phone</a> or{" "}
                  <a href="mailto: firsteyesimage@gmail.com">email</a>. You can
                  also drop us a message on{" "}
                  <a
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/FirstEyesimage/"
                    target="_blank"
                  >
                    Facebook
                  </a>
                  .
                </p>
              </div>
              <div className="col col-12 col-sm-6">
                We will also be changing our operating hours to:
                <ul>
                  <li>Monday to Saturday: 11AM to 6PM</li>
                  <li>Closed on Sundays and Public Holidays</li>
                </ul>
                <p>Thank you and may we overcome this together #sgunited</p>
              </div>
            </div>
          </Alert>
        </div>
      </div>
      <Layout>
        <SEO title="Home" />
        <BackgroundHero
          img={data.img.childImageSharp.fluid}
          title="First Eyes Image"
          styleClass="default-background"
          alt="Dog wearing glasses; Image by BBH Singapore On Unsplash.com"
        />
        <section className="py-5">
          <div className="container">
            <Title title="Our story" />
            <div className="row">
              <div className="col-10 col-sm-8 mx-auto text-center">
                <p className="lead text-muted mb-5">{content}</p>
                <Link to="/services">
                  <button className="btn text-uppercase btn-yellow">
                    Our services
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "bbh-singapore.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
