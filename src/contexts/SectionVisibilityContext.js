import React from "react"

const initialVisibilityContextValue = {
  visibileSections: [],
  onChangeVisibileSection: () => {},
}
export const SectionVisibilityContext = React.createContext(
  initialVisibilityContextValue
)

export const SectionVisibilityContextProvider = ({ children }) => {
  const [rawContextValue, setContextValue] = React.useState(
    initialVisibilityContextValue
  )
  const { visibleSections: previousVisibleSections = [] } = rawContextValue
  /**
   * Prepare reducers (computed context value)
   */
  const contextValue = {
    ...rawContextValue,
    onChangeVisibileSection: (newSection, isVisible) =>
      setContextValue({
        ...rawContextValue,
        visibileSections: isVisible
          ? [...previousVisibleSections, newSection]
          : previousVisibleSections.filter(sec => sec !== newSection),
      }),
  }
  return (
    <SectionVisibilityContext.Provider value={contextValue}>
      {children}
    </SectionVisibilityContext.Provider>
  )
}
