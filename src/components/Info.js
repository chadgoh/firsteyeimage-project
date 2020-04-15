import React from "react"
import { Link } from "gatsby"
import Title from "../Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              rerum, consectetur architecto maiores officiis asperiores deleniti
              voluptate quidem assumenda eos fugit error, debitis voluptates aut
              nesciunt quo iure provident fugiat animi non molestias! Officia,
              quia praesentium nesciunt impedit, a in id distinctio ab cum
              quaerat corporis expedita! Aspernatur, tempora est.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                About Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
