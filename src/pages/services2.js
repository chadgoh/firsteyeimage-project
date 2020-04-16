import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

import Title from "../Title"
import Card from "react-bootstrap/Card"
import Img from "gatsby-image"

const Services2Page = ({ data }) => {
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
              <Card style={{ width: "18rem" }}>
                <Img fluid={data.img1.childImageSharp.fluid} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-10 col-sm-4 mx-auto text-left">
              <Card style={{ width: "18rem" }}>
                <Img fluid={data.img2.childImageSharp.fluid} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-10 col-sm-4 mx-auto text-left">
              <Card style={{ width: "18rem" }}>
                <Img fluid={data.img3.childImageSharp.fluid} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
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
  }
`

export default Services2Page
