import React from "react"
import styles from "./projectItem.module.scss"
import PropTypes from "prop-types"
import { IconifyIcons as iconMap } from "../iconMap"
import TechIcon from "../techIcon"
import useIsMobile from "../../hooks/useIsMobile"
import classnames from "classnames"

const ProjectItem = ({ name, date, onGoing, tech, url, synopsis }) => {
  const isMobile = useIsMobile()
  return (
    <div
      className={classnames(styles.container, isMobile && styles.mobile)}
      onClick={() => window.open(url, "_blank")}
    >
      <div className={styles.name}>
        {name} {onGoing && <span className={styles.onGoing}>on going</span>}
      </div>
      <div className={styles.date}>{date}</div>
      <div className={styles.techStack}>
        {tech
          .filter(tec => !!iconMap[tec.toLowerCase()])
          .map(tec => (
            <span className={styles.tech}>
              <TechIcon tech={tec} />
            </span>
          ))}
      </div>
      <div className={styles.synopsis}>{synopsis}</div>
    </div>
  )
}
ProjectItem.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onGoing: PropTypes.bool,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  url: PropTypes.string,
  synopsis: PropTypes.string.isRequired,
}
export default ProjectItem
