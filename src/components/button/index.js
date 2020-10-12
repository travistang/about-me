import React from "react"
import styles from "./index.module.scss"
import classnames from "classnames"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import iconMap from "../iconMap"
import PropTypes from "prop-types"

const Button = ({ title, onClick, icon, className, type, color = "text" }) => {
  return (
    <div
      className={classnames(
        styles.button,
        color && styles[color],
        type && styles[type],
        className
      )}
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={iconMap[icon]}
        className={icon && title && styles.withPadding}
      />
      {title && <span>{title}</span>}
    </div>
  )
}

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string,
  color: PropTypes.oneOf(["primary", "text", "secondary"]),
}
export default Button
