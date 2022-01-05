import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import IconMap from "../../components/iconMap"
import * as styles from "./NameSection.module.scss"

const NameSection = () => {
  const data = useStaticQuery(graphql`
    query getNameSectionData {
      content {
        intro {
          name
          title
          home
          location
        }
      }
    }
  `)
  return (
    <div className={styles.container} page-count={2}>
      <div className={styles.nameContainer}>
        <div className={styles.name}>{data.content.intro.name}</div>
        <div className={styles.title}>{data.content.intro.title}</div>
      </div>
      <div className={styles.locationContainer}>
        <div className={styles.locationItem}>
          <FontAwesomeIcon icon={IconMap["home"]} />
          {data.content.intro.home}
        </div>
        <div className={styles.locationItem}>
          <FontAwesomeIcon icon={IconMap["location"]} />
          {data.content.intro.location}
        </div>
      </div>
    </div>
  )
}

export default NameSection
