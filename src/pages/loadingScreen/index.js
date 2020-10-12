import React from "react"
import styles from "./index.module.scss"
import ReactLoading from "react-loading"

const LoadingScreen = () => {
  const getAttribute = attrName =>
    getComputedStyle(document.documentElement).getPropertyValue(attrName)
  const componentSize = getAttribute("--loading-component-size")
  const componentColor = getAttribute("--loading-overlay-color")
  return (
    <div className={styles.container}>
      <ReactLoading
        type="cylon"
        color={componentColor}
        height={componentSize}
        width={componentSize}
      />
    </div>
  )
}

export default LoadingScreen
