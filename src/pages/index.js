import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import BackgroundHero from "../components/BackgroundHero"
import Title from "../Title"

const IndexPage = ({ data }) => {
  const content =
    "Our professional optometrist has more than 40 years of experience. Our services include eye exams, geriatric, paediatric, prescription and sports eyewear and contact lenses. We also stock the latest fashion brands at affordable prices."
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundHero
        img={data.img.childImageSharp.fluid}
        title="First Eye Image"
        styleClass="default-background"
      />
      <section className="py-5">
        <div className="container">
          <Title title="Our story" />
          <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-center">
              <p className="lead text-muted mb-5">{content}</p>
              <Link to="/contact/">
                <button className="btn text-uppercase btn-yellow">
                  Contact Us
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
    img: file(relativePath: { eq: "jamie-street-MoDcnVRN5JU-unsplash.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
