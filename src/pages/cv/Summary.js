import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./Summary.module.scss"

const Summary = () => {
  const data = useStaticQuery(graphql`
    query summaryQuery {
      content {
        intro {
          summary
        }
      }
    }
  `)

  return <p className={styles.summary}>{data.content.intro.summary}</p>
}

export default Summary
