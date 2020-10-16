import React from "react"

import Header from "../components/header"
import Cover from "../components/cover"
import { SectionVisibilityContextProvider } from "../contexts/SectionVisibilityContext"
import ReactTooltip from "react-tooltip"

import styles from "./index.module.scss"
import AboutSection from "../components/about"
import ExperienceSection from "../components/experiences"
import EducationSection from "../components/education"
import ProjectSection from "../components/projects"
import ContactSection from "../components/contact"

const IndexPage = () => {
  return (
    <SectionVisibilityContextProvider>
      <ReactTooltip effect="solid" className={styles.tooltip} />
      <div className={styles.container}>
        <Header />
        <Cover />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </SectionVisibilityContextProvider>
  )
}

export default IndexPage
