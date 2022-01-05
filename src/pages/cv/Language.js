import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Section from "./Section"
import * as styles from "./Language.module.scss"

const Language = () => {
  const data = useStaticQuery(graphql`
    query getLanguageData {
      content {
        intro {
          languages {
            name
            proficiency
          }
        }
      }
    }
  `)

  return (
    <Section title="Languages">
      {data.content.intro.languages.map(({ name, proficiency }) => (
        <div className={styles.languageItem}>
          <span>{name}</span>
          <span>{proficiency}</span>
        </div>
      ))}
    </Section>
  )
}

export default Language
