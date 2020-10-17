import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./index.module.scss"
import Section from "../section"
import PropTypes from "prop-types"
import iconMap from "../iconMap"
import ReactCountryFlag from "react-country-flag"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classnames from "classnames"
import useIsMobile from "../../hooks/useIsMobile"

const Subsection = ({ title, children, className }) => (
  <div className={classnames(styles.subsection, className)}>
    <div className={styles.subtitle}>{title}</div>
    <div className={styles.content}>{children}</div>
  </div>
)
Subsection.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.object,
}

const LanguageItem = ({ flagCode, languageName }) => (
  <div className={styles.languageItem}>
    <ReactCountryFlag svg countryCode={flagCode} />
    <span>{languageName}</span>
  </div>
)
LanguageItem.propTypes = {
  flagCode: PropTypes.string.isRequired,
  languageName: PropTypes.string.isRequired,
}

const InterestItem = ({ interest }) => (
  <div className={styles.languageItem}>
    <FontAwesomeIcon icon={iconMap[interest]} />
    <span>{interest}</span>
  </div>
)
InterestItem.propTypes = {
  interest: PropTypes.string.isRequired,
}

const AboutSection = () => {
  const isMobile = useIsMobile()
  const data = useStaticQuery(graphql`
    query aboutSectionData {
      content {
        intro {
          about
          interests
          languages {
            name
            code
          }
        }
      }
    }
  `)

  return (
    <Section
      title="About me"
      anchor="about"
      className={classnames(styles.container, isMobile && styles.mobile)}
      fullPage
    >
      <Subsection>
        {data.content.intro.about.map(paragraph => (
          <p>{paragraph}</p>
        ))}
      </Subsection>
      <Subsection title="Languages I speak" className={styles.languageSection}>
        {data.content.intro.languages.map(({ name, code }) => (
          <LanguageItem key={code} flagCode={code} languageName={name} />
        ))}
      </Subsection>
      <Subsection title="My Hobbies" className={styles.languageSection}>
        {data.content.intro.interests.map(interest => (
          <InterestItem interest={interest} />
        ))}
      </Subsection>
    </Section>
  )
}

export default AboutSection
