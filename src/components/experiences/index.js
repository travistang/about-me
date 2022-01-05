import React from "react"
import Section from "../section"
import { useStaticQuery, graphql } from "gatsby"
import Timeline from "../timeline"
import TechIcon from "../techIcon"
import PropTypes from "prop-types"
import * as styles from "./index.module.scss"

const SubtitleComponent = ({ company, nature, technologies }) => (
  <div className={styles.subtitleContainer}>
    <span>
      <b>{company}</b> | {nature}{" "}
    </span>
    <span className={styles.techs}>
      {technologies.map(tech => (
        <TechIcon tech={tech} />
      ))}
    </span>
  </div>
)
SubtitleComponent.propTypes = {
  company: PropTypes.string.isRequired,
  nature: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string),
}
const Experiences = () => {
  const data = useStaticQuery(graphql`
    query getExperienceTimeline {
      content {
        experiences {
          company
          startDate
          endDate
          nature
          role
          synopsis
          tasks
          technologies
        }
      }
    }
  `)

  return (
    <Section title="Experience" fullPage anchor="experience">
      <Timeline
        events={data.content.experiences.map(exp => ({
          startDate: exp.startDate,
          endDate: exp.endDate,
          title: exp.role,
          subtitle: (
            <SubtitleComponent
              company={exp.company}
              nature={exp.nature}
              technologies={exp.technologies}
            />
          ),
          description: exp.synopsis,
        }))}
      />
    </Section>
  )
}

export default Experiences
