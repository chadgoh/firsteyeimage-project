import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"

import Title from "../Title"
import Card from "react-bootstrap/Card"
import Img from "gatsby-image"

const ServicesPage = ({ data }) => {
  // const content = "Do I need an about page????"
  console.log(data)
  return (
    <Layout>
      <SEO title="Services" />
      {/* <BackgroundHero
        img={data.img.childImageSharp.fluid}
        title="Contact"
        styleClass="contact-background"
      /> */}
      <section className="py-5">
        <div className="container">
          <Title title="Our Services"></Title>
          <div className="row ">
            <div className="col-10 col-sm-4 mx-auto  mb-3 d-flex">
              <Card>
                <Img
                  fluid={data.img2.childImageSharp.fluid}
                  alt="Snellen Chart;Image by Wesley Tingey from Unsplash.com"
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    <strong>Eye Examinations</strong>
                  </Card.Title>
                  <Card.Text>
                    <p className="text-left" style={{ fontSize: "medium" }}>
                      We provide comprehensive eye examinations that include:
                    </p>
                    <ol
                      className="text-left"
                      style={{ fontSize: "medium", paddingLeft: "1rem" }}
                    >
                      <li>Prescription Checks</li>
                      <li>Anterior and Posterior Eye Examinations</li>
                      <li>Geriatric and Pediatric Eye Screenings</li>
                    </ol>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-10 col-sm-4 mx-auto  mb-3 d-flex">
              <Card>
                <Img
                  fluid={data.img3.childImageSharp.fluid}
                  alt="Man wearing glasses; Image by Norbert Kundrak from Unsplash.com"
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    <strong>Spectacle Services </strong>
                  </Card.Title>
                  <Card.Text>
                    <p className="text-left" style={{ fontSize: "medium" }}>
                      We prescribe customized spectacles and lenses to suit your
                      lifestyle needs
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-10 col-sm-4 mx-auto  mb-3 d-flex">
              <Card>
                <Img
                  fluid={data.img1.childImageSharp.fluid}
                  alt="Woman putting on contact lenese; Image by Hubble on Unsplash.com"
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    <strong>
                      Contact Lense <br />
                      Consultation And Fitting{" "}
                    </strong>
                  </Card.Title>
                  <Card.Text>
                    <p className="text-left" style={{ fontSize: "medium" }}>
                      We will provide and recommend the most suitable contact
                      lenses for your eyes and lifestyle
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col-8 col-sm-4 mx-auto text-center">
              <Link to="/contact">
                <button className="btn text-uppercase btn-yellow mt-5">
                  Contact us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 200, maxHeight: 200, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const query = graphql`
  query {
    img1: file(relativePath: { eq: "hubble-ITHqOdrrn0s-unsplash.jpg" }) {
      ...squareImage
    }

    img2: file(relativePath: { eq: "wesley-tingey-0are122T4ho-unsplash.jpg" }) {
      ...squareImage
    }

    img3: file(relativePath: { eq: "scott-van-daalen-unsplash.jpg" }) {
      ...squareImage
    }
  }
`

export default ServicesPage
