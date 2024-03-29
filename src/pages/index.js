import React from "react"

import SEO from "../components/seo"
import Header from "../components/header"
import Cover from "../components/cover"
import { SectionVisibilityContextProvider } from "../contexts/SectionVisibilityContext"
import ReactTooltip from "react-tooltip"

import * as styles from "./index.module.scss"
import AboutSection from "../components/about"
import ExperienceSection from "../components/experiences"
import EducationSection from "../components/education"
import ProjectSection from "../components/projects"
import ContactSection from "../components/contact"

const IndexPage = () => {
  return (
    <SectionVisibilityContextProvider>
      <SEO title="Welcome to Travis' website!" />
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
