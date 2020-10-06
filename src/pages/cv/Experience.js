import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Section from "./Section"
import styles from "./Experience.module.scss"
import { useLocation } from "@reach/router"
import { DateTime } from "luxon"

const formatDate = dateString =>
  DateTime.fromFormat(dateString, "M/yyyy").toFormat("MMM yyyy")

const ExperienceItem = ({
  startDate,
  endDate,
  company,
  role,
  synopsis,
  tasks,
}) => (
  <div className={styles.experienceItemContainer}>
    <div className={styles.dateContainer}>
      <span>{formatDate(startDate)}</span>
      <span>-</span>
      <span>{endDate ? formatDate(endDate) : "current"}</span>
    </div>
    <div className={styles.contentContainer}>
      <div className={styles.experienceHeader}>
        <span>{role}</span>
        <span>{company}</span>
      </div>
      <ul className={styles.experienceSynopsis}>
        {tasks?.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
    </div>
  </div>
)

const Experience = () => {
  const data = useStaticQuery(graphql`
    query getExperienceData {
      content {
        experiences {
          nature
          startDate
          endDate
          company
          role
          synopsis
          technologies
          tasks
          categories
        }
      }
    }
  `)
  const location = useLocation()
  // retrieve filters / limits from location
  const { experienceLimit = 3, experienceCategory = "FE" } = Object.fromEntries(
    new URLSearchParams(location.search)
  )
  const includeCategory = experienceCategory.split(",")
  const experiences = data.content?.experiences
    ?.filter(exp =>
      includeCategory.some(
        exp.categories?.includes.bind(exp.categories) || (() => false)
      )
    )
    .sort(
      (exA, exB) =>
        DateTime.fromFormat(exB.startDate, "M/yyyy") -
        DateTime.fromFormat(exA.startDate, "M/yyyy")
    )
    .slice(0, experienceLimit)
  return (
    <Section title="Experience">
      {experiences.map(exp => (
        <ExperienceItem {...exp} />
      ))}
    </Section>
  )
}

export default Experience
