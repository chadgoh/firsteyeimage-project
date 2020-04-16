import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container">
      <div className="row ">
        <div className="col-10 col-sm-4 mx-auto text-center">
          <h1>PAGE NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... </p>
          <Link to="/">
            <button className="btn text-uppercase btn-yellow my-5">
              Back to home
            </button>
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
