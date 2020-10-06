import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./Skills.module.scss"
import Section from "./Section"

const Skills = () => {
  const data = useStaticQuery(graphql`
    query getSkillsData {
      content {
        intro {
          skills {
            name
            items {
              name
              tools
            }
          }
        }
      }
    }
  `)
  const {
    content: {
      intro: { skills },
    },
  } = data
  return (
    <Section title="Skills">
      {skills.map(({ name, items }) => (
        <div className={styles.skillsContainer}>
          <div className={styles.skillsTitle}>{name}</div>
          <div className={styles.itemList}>
            {items?.map(({ name, tools }) => (
              <span className={styles.skillItem}>
                <b>{name}</b>
                {tools?.length && <span> {`(${tools.join(", ")})`}</span>}
              </span>
            ))}
          </div>
        </div>
      ))}
    </Section>
  )
}

export default Skills
