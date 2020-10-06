import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styles from "./Education.module.scss"
import Section from "./Section"
import { DateTime } from "luxon"

const formatDate = dateString =>
  DateTime.fromFormat(dateString, "M/yyyy").toFormat("MMM yyyy")

const EducationItem = ({
  institude,
  degree,
  startDate,
  endDate,
  grade,
  description,
  thesis,
}) => (
  <div className={styles.educationItemContainer}>
    <div className={styles.dateContainer}>
      <span>{formatDate(startDate)}</span>
      <span>-</span>
      <span>{endDate ? formatDate(endDate) : "current"}</span>
    </div>
    <div className={styles.contentContainer}>
      <div className={styles.educationHeader}>
        <span>{degree}</span>
        <span>{institude}</span>
      </div>
      {grade && <div className={styles.grade}>{grade}</div>}
      {thesis && (
        <div className={styles.thesisDescription}>
          <b>Thesis: </b>
          {thesis}
        </div>
      )}
    </div>
  </div>
)

const Education = () => {
  const data = useStaticQuery(graphql`
    query getEducationData {
      content {
        education {
          institude
          degree
          startDate
          endDate
          grade
          description
          thesis
        }
      }
    }
  `)
  return (
    <Section title="Education">
      {data.content.education.map(ed => (
        <EducationItem {...ed} />
      ))}
    </Section>
  )
}

export default Education
