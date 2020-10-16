import React from "react"
import styles from "./index.module.scss"
import ReactLoading from "react-loading"

const LoadingScreen = () => {
  const componentSize = "64px"
  const componentColor = "rgba(14, 14, 14, 0.2)"
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
