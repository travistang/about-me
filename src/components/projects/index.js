import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Section from "../section"
import ProjectItem from "./projectItem"
import * as styles from "./index.module.scss"
import classnames from "classnames"
import useIsMobile from "../../hooks/useIsMobile"
const ProjectSection = () => {
  const data = useStaticQuery(graphql`
    query getProjectsData {
      content {
        projectSynopsis
        projects {
          date
          onGoing
          synopsis
          name
          tech
          url
        }
      }
    }
  `)
  const isMobile = useIsMobile()
  return (
    <Section title="projects" anchor="projects">
      <p className={styles.projectSynopsis}>{data.content.projectSynopsis}</p>
      <div
        className={classnames(
          styles.projectListContainer,
          isMobile && styles.mobile
        )}
      >
        {data.content.projects.map(project => (
          <ProjectItem {...project} />
        ))}
      </div>
    </Section>
  )
}

export default ProjectSection
