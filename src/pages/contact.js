import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import BackgroundHero from "../components/BackgroundHero"

import Title from "../Title"

const ContactPage = ({ data }) => {
  const content = "Do I need an about page????"
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundHero
        img={data.img.childImageSharp.fluid}
        title="Contact us"
        styleClass="contact-background"
      />
      <section className="py-5">
        <div className="container">
          {/* <Title title="Contact Us"></Title> */}
          <div className="row">
            <div className="col-10 col-sm-4 mx-auto text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium voluptas praesentium earum deleniti eaque! Vitae quod
              non quas maiores atque magni et, illum impedit eaque aperiam
              obcaecati maxime, doloribus quis?
            </div>
            <div className="col-10 col-sm-4 mx-auto text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              dolorum architecto ipsam aspernatur placeat odio qui dolores
              beatae ex libero, neque repellat adipisci sapiente nihil eum est,
              ipsa modi? Iure!
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          {/* <Title title="Locate us" /> */}
          <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-center">
              <div className="col-10 col-sm-8 mx-auto text-center">
                <iframe
                  title="Store Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.779741582175!2d103.83133831444053!3d1.307344999046488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1992a6c0228d%3A0x6317278ea6adf692!2sFirst.Eyesimage.Com%20Pte%20Ltd!5e0!3m2!1sen!2ssg!4v1586961107242!5m2!1sen!2ssg"
                  style={{
                    width: "600",
                    height: "450",
                    frameborder: "0",
                    border: "0",
                    allowfullscreen: "",
                  }}
                ></iframe>
              </div>
              <Link to="/">
                <button className="btn text-uppercase btn-yellow">
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

export default ContactPage
