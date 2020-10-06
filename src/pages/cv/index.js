import React from "react"
import styles from "./index.module.scss"
import { useLocation } from "@reach/router"
import NameSection from "./NameSection"
import Contact from "./Contact"
import Summary from "./Summary"
import Experience from "./Experience"
import Language from "./Language"
import Skills from "./Skills"
import Education from "./Education"

const CVPage = props => {
  const location = useLocation()
  /**
   * Change theme based on query search params
   * - theme: dark | any
   * -
   */
  React.useEffect(() => {
    const theme = new URLSearchParams(location.search).get("theme")
    document.documentElement.setAttribute("data-theme", theme)
  }, [location.search])

  return (
    <div className={styles.container}>
      <NameSection />
      <div className={styles.contentContainer}>
        <div className={styles.leftContainer}>
          <Summary />
          <Experience />
          <Education />
        </div>
        <div className={styles.rightContainer}>
          <Contact />
          <Language />
          <Skills />
        </div>
      </div>
    </div>
  )
}

export default CVPage
