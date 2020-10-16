import React from "react"
import { Icon } from "@iconify/react"
import { IconifyIcons as iconMap } from "../iconMap"
import ReactTooltip from "react-tooltip"
import PropTypes from "prop-types"

const TechIcon = ({ tech }) =>
  iconMap[tech.toLowerCase()] ? (
    <Icon icon={iconMap[tech.toLowerCase()]} data-tip={tech.toUpperCase()} />
  ) : null
TechIcon.propTypes = {
  tech: PropTypes.string,
}

export default TechIcon
