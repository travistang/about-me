import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import VisibilitySensor from "react-visibility-sensor"
import styles from "./index.module.scss"

/**
 * Represent a section component that occupies the the whole page
 */

const Section = ({ children, title, fullPage, className, anchor = "" }) => {
  return (
    <div
      id={anchor}
      className={classnames(
        styles.sectionContainer,
        fullPage && styles.fullPage,
        className
      )}
    >
      <VisibilitySensor onChange={() => console.log("anchor seen" + anchor)}>
        <>
          {title && <div className={styles.title}>{title}</div>}
          {children}
        </>
      </VisibilitySensor>
    </div>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  fullPage: PropTypes.bool,
  className: PropTypes.string,
  anchor: PropTypes.string,
}

export default Section
