import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as styles from "./index.module.scss"
import Section from "../section"
import iconMap from "../iconMap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useIsMobile from "../../hooks/useIsMobile"
import classnames from "classnames"

const ContactItem = ({ value, icon, name }) => {
  const onClick = () => {
    switch (name) {
      case "Email":
        window.open(`mailto:${value}`)
        break
      case "Github":
        window.open(`https://github.com/${value}`, "_blank")
        break
      case "LinkedIn":
        window.open(`https://www.linkedin.com/in/${value}`, "_blank")
        break
      default:
        window.open(`https://${value}`, "_blank")
    }
  }
  return (
    <div className={styles.contactItemContainer} onClick={onClick}>
      <span className={styles.icon}>
        <FontAwesomeIcon icon={iconMap[icon]} />
      </span>
    </div>
  )
}

const ContactWrapper = () => {
  const isMobile = useIsMobile()

  const data = useStaticQuery(graphql`
    query getContactSectionData {
      content {
        contacts {
          name
          value
          icon
        }
      }
    }
  `)
  return (
    <div className={classnames(styles.content, isMobile && styles.mobile)}>
      {data.content.contacts.map(contact => (
        <ContactItem {...contact} />
      ))}
    </div>
  )
}

const ContactSection = () => {
  const isMobile = useIsMobile()

  return (
    <Section
      anchor="contact"
      className={classnames(styles.container, isMobile && styles.mobile)}
    >
      <div className={styles.footer}>
        <div className={styles.logo}> Travis' Homepage</div>
        {isMobile && <ContactWrapper />}
        <div>
          Copyright <FontAwesomeIcon icon={iconMap.copyright} /> 2021 Tang Yiu
          Ting. All rights reserved.
        </div>
      </div>
      {!isMobile && <ContactWrapper />}
    </Section>
  )
}

export default ContactSection
