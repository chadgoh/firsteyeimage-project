import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import BackgroundHero from "../components/BackgroundHero"
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"
import Title from "../Title"
import Carousel from "react-bootstrap/Carousel"
import Img from "gatsby-image"
import Card from "react-bootstrap/Card"

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
          <div className="row">
            <div className="col-10 col-sm-4 mx-auto text-left">
              <Carousel>
                <Carousel.Item>
                  <Img fluid={data.img1.childImageSharp.fluid} />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <Img fluid={data.img3.childImageSharp.fluid} />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Card style={{ width: "fluid" }}>
                    <Img fluid={data.img2.childImageSharp.fluid} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card style={{ width: "fluid" }}>
                    <Img fluid={data.img4.childImageSharp.fluid} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              </Carousel>
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
      fluid(maxWidth: 200, maxHeight: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const query = graphql`
  query {
    img1: file(relativePath: { eq: "jesus-kiteque-wn-KYaHwcis-unsplash.jpg" }) {
      ...squareImage
    }

    img2: file(
      relativePath: { eq: "richard-jaimes-4B6-E8c7t9I-unsplash (1).jpg" }
    ) {
      ...squareImage
    }

    img3: file(relativePath: { eq: "wesley-tingey-0are122T4ho-unsplash.jpg" }) {
      ...squareImage
    }
    img4: file(relativePath: { eq: "sewn-apart-4ytMf8MgJlY-unsplash.jpg" }) {
      ...squareImage
    }
  }
`

export default ServicesPage
