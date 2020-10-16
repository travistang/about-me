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
          fixed(width: 1024, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const isMobile = useIsMobile()

  if (!data?.placeholderImage?.childImageSharp?.fixed) {
    return <LoadingScreen />
  }

  return (
    <div className={classnames(styles.coverImage, isMobile && styles.mobile)}>
      <Img
        loading="eager"
        fixed={data.placeholderImage.childImageSharp.fixed}
      />
    </div>
  )
}

export default Image
