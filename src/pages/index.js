import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import BackgroundHero from "../components/BackgroundHero"
import Info from "../components/Info"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundHero
      img={data.img.childImageSharp.fluid}
      title="First Eye Image"
      styleClass="default-background"
    />
    <Info></Info>
  </Layout>
)

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

export default IndexPage
