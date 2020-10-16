import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./index.module.scss"
import LoadingScreen from "../../pages/loadingScreen"
import useIsMobile from "../../hooks/useIsMobile"
import classnames from "classnames"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "icon.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  const isMobile = useIsMobile()

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <LoadingScreen />
  }

  return (
    <div className={classnames(styles.coverImage, isMobile && styles.mobile)}>
      <Img
        loading="eager"
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    </div>
  )
}

export default Image
