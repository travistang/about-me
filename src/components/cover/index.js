import React from "react"
import * as styles from "./index.module.scss"
import Section from "../section"
import Image from "../image"
import Typist from "react-typist"
import useIsMobile from "../../hooks/useIsMobile"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import iconMap from "../iconMap"
import Button from "../button"
import classnames from "classnames"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import { navigate } from "@reach/router"

const Cover = () => {
  const isMobile = useIsMobile()
  return (
    <Section className={classnames(styles.outerContainer)} fullPage>
      <div className={classnames(styles.container, isMobile && styles.mobile)}>
        <Image />
        <div className={styles.greetings}>
          <Typist
            startDelay={2000}
            avgTypingDelay={50}
            cursor={{ show: false }}
          >
            <h1>Hi, I'm Travis!</h1>
            <Typist.Delay ms={500} />
            <h4>Welcome to my homepage!</h4>
          </Typist>
          <Button
            icon="download"
            title="Resume"
            color="primary"
            className={styles.cvButton}
            onClick={() =>
              navigate(
                `${
                  process.env.NODE_ENV === "production" ? "/about-me" : ""
                }/cv/`
              )
            }
          />
        </div>
      </div>
      <div className={styles.furtherActionContainer}>
        <AnchorLink to="/#about">
          <div className={styles.aboutMeContainer}>
            <div className={styles.moreArrow}>
              <FontAwesomeIcon icon={iconMap["moreBelow"]} />
            </div>
            more
          </div>
        </AnchorLink>
      </div>
    </Section>
  )
}

export default Cover
