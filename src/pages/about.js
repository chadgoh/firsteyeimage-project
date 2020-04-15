import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import BackgroundHero from "../components/BackgroundHero"

import Title from "../Title"

const AboutPage = ({ data }) => {
  const content = "Do I need an about page????"
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundHero
        img={data.img.childImageSharp.fluid}
        title="About us"
        styleClass="about-background"
      />
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-center">
              <p className="lead text-muted mb-5">{content}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(
      relativePath: { eq: "julian-hochgesang-whrR1WQMdBE-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
