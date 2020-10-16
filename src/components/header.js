import React from "react"
import styles from "./header.module.scss"
import iconMap from "./iconMap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { SectionVisibilityContext } from "../contexts/SectionVisibilityContext"

import useIsMobile from "../hooks/useIsMobile"
import PropTypes from "prop-types"
import classnames from "classnames"

const THEME_KEY = "data-theme"
const LIGHT_THEME = "light"
const DARK_THEME = "dark"

const HeaderLink = ({ title, anchor, onClick }) => {
  // check if the link is selected by accessing the anchor of the url
  const { visibileSections } = React.useContext(SectionVisibilityContext)

  return (
    <AnchorLink
      to={`/#${anchor}`}
      className={classnames(
        styles.headerLinkWrapper,
        anchor === visibileSections?.[0] && styles.active
      )}
    >
      <div onClick={onClick}>
        <span>{title}</span>
        <div className={styles.headerLinkBottomUnder} />
      </div>
    </AnchorLink>
  )
}

/**
 * That sun / moon button
 *
 * it looks for the keys in localStorage initially, and set the theme accordingly
 * Whenever it's clicked the theme is toggled
 */
const ThemeIcon = () => {
  const theme =
    (typeof document !== "undefined"
      ? document.documentElement.getAttribute(THEME_KEY)
      : LIGHT_THEME) || LIGHT_THEME

  const [themeIcon, setThemeIcon] = React.useState(
    theme === LIGHT_THEME ? "moon" : "sun"
  )
  const changeTheme = newTheme => {
    localStorage.setItem(THEME_KEY, newTheme)
    document.documentElement.setAttribute(THEME_KEY, newTheme)
    setThemeIcon(newTheme === LIGHT_THEME ? "moon" : "sun")
  }
  const toggleTheme = () => {
    theme === LIGHT_THEME ? changeTheme(DARK_THEME) : changeTheme(LIGHT_THEME)
  }

  React.useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_KEY)
    if (!storedTheme) {
      changeTheme(LIGHT_THEME)
    } else {
      changeTheme(storedTheme)
    }
  }, [])

  return (
    <div className={styles.themeButton} onClick={toggleTheme}>
      <FontAwesomeIcon icon={iconMap[themeIcon]} />
    </div>
  )
}

const BurgerMenu = ({ opened, onClick }) => {
  return (
    <div className={styles.burgerMenu} onClick={onClick}>
      <FontAwesomeIcon
        icon={opened ? iconMap["burgerClose"] : iconMap["burgerOpen"]}
      />
    </div>
  )
}

BurgerMenu.propTypes = {
  opened: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

const HeaderLinkGroup = ({ opened, onSelected }) => {
  const isMobile = useIsMobile()

  return (
    <div
      className={classnames(
        styles.headerLinkGroup,
        isMobile && styles.mobile,
        opened && styles.opened
      )}
    >
      <HeaderLink onClick={onSelected} title="About" anchor="about" />
      <HeaderLink onClick={onSelected} title="Experience" anchor="experience" />
      <HeaderLink onClick={onSelected} title="Education" anchor="education" />
      <HeaderLink onClick={onSelected} title="Projects" anchor="projects" />
      <HeaderLink onClick={onSelected} title="Contact" anchor="contact" />
    </div>
  )
}

const Header = () => {
  const isMobile = useIsMobile()

  const [burgerOpened, setBurgerOpened] = React.useState(false)

  const closeMenu = () => setBurgerOpened(false)
  return (
    <header className={styles.container}>
      <nav
        className={classnames(styles.navContainer, isMobile && styles.mobile)}
      >
        {isMobile && (
          <BurgerMenu
            opened={burgerOpened}
            onClick={() => setBurgerOpened(!burgerOpened)}
          />
        )}
        <HeaderLinkGroup opened={burgerOpened} onSelected={closeMenu} />
        <div className={styles.rightContainer}>
          <ThemeIcon />
        </div>
        {isMobile && burgerOpened && (
          <div className={styles.overlay} onClick={closeMenu} />
        )}
      </nav>
    </header>
  )
}

export default Header
