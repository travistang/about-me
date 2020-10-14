import React from "react"
import Section from "../section"
import { useStaticQuery, graphql } from "gatsby"
import Timeline from "../timeline"

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
    <Section title="Experiences" fullPage anchor="experience">
      <Timeline
        events={data.content.experiences.map(exp => ({
          startDate: exp.startDate,
          endDate: exp.endDate,
          title: exp.role,
          subtitle: `${exp.company} | ${exp.nature}`,
          description: exp.synopsis,
        }))}
      />
    </Section>
  )
}

export default Experiences
