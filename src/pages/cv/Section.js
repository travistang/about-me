import React from "react"
import * as styles from "./Section.module.scss"
import classnames from "classnames"

const Section = ({ title, children, className }) => {
  return (
    <div className={classnames(styles.container, className)}>
      <div className={styles.sectionTitle}>
        <div className={styles.title}>{title}</div>
      </div>
      {children}
    </div>
  )
}

export default Section
