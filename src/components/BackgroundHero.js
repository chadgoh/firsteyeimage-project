import React from "react"
import BackgroundImage from "gatsby-background-image"

function BackgroundHero({ img, styleClass, title, children, alt }) {
  return (
    <BackgroundImage className={styleClass} fluid={img} alt={alt}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  )
}

BackgroundHero.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}

export default BackgroundHero
