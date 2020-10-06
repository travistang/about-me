import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import IconMap from "../../components/iconMap"
import Section from "./Section"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./Contact.module.scss"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query getContactData {
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
    <Section title="Contact" className={styles.container}>
      {data.content.contacts.map(({ value, icon }) => (
        <div className={styles.contactItemContainer}>
          <FontAwesomeIcon icon={IconMap[icon]} />
          {value}
        </div>
      ))}
    </Section>
  )
}

export default Contact
