import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./NameSection.module.scss"
const NameSection = () => {
  const data = useStaticQuery(graphql`
    query getNameSectionData {
      content {
        intro {
          name
          title
        }
      }
    }
  `)
  return (
    <div className={styles.container}>
      <div className={styles.name}>{data.content.intro.name}</div>
      <div className={styles.title}>{data.content.intro.title}</div>
    </div>
  )
}

export default NameSection
