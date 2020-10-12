import React from "react"

import Header from "../components/header"
import Cover from "../components/cover"
import { SectionVisibilityContextProvider } from "../contexts/SectionVisibilityContext"

import styles from "./index.module.scss"
import AboutSection from "../components/about"

const IndexPage = () => {
  return (
    <SectionVisibilityContextProvider>
      <div className={styles.container}>
        <Header />
        <Cover />
        <AboutSection />
      </div>
    </SectionVisibilityContextProvider>
  )
}

export default IndexPage
