import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql, useStaticQuery } from "gatsby"
import iconMap from "../components/iconMap"
import styles from "./404.module.scss"
import Header from "../components/header"
import ContactSection from "../components/contact"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query notFoundData {
      content {
        contacts {
          value
          name
        }
      }
    }
  `)
  const mail = data.content.contacts.filter(({ name }) => name === "Email")?.[0]
    ?.value
  return (
    <>
      <Header />
      <div className={styles.notFoundPageContainer}>
        <div className={styles.innerContainer}>
          <FontAwesomeIcon icon={iconMap.notFound} />
          <div className={styles.info}>Page Not Found</div>
          <div className={styles.description}>
            Please check the URL you gave is correct. But if you followed a link
            and arrived at this page, please tell Travis by writing him{" "}
            <a href={`mailto:${mail}`}>here</a>.
          </div>
        </div>
        <ContactSection />
      </div>
    </>
  )
}

export default NotFoundPage
