import React from "react"
import Section from "../section"
import { useStaticQuery, graphql } from "gatsby"
import Timeline from "../timeline"
import * as styles from "./index.module.scss"

const Education = () => {
  const data = useStaticQuery(graphql`
    query getEducationTimeline {
      content {
        education {
          courses
          degree
          description
          endDate
          grade
          startDate
          thesis
          institude
        }
      }
    }
  `)

  return (
    <Section title="Education" anchor="education">
      <Timeline
        right
        events={data.content.education.map(exp => ({
          startDate: exp.startDate,
          endDate: exp.endDate,
          title: exp.institude,
          subtitle: (
            <span>
              <b className={styles.degree}>{exp.degree}</b> | {exp.grade}{" "}
            </span>
          ),
          description: exp.description,
        }))}
      />
    </Section>
  )
}

export default Education
