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
  /**
   * Prepare reducers (computed context value)
   */
  const getNewVisibilitySections = (newSection, isVisible) => {
    if (isVisible) return [newSection]
  }
  const contextValue = {
    ...rawContextValue,
    onChangeVisibileSection: (newSection, isVisible) =>
      setContextValue({
        ...rawContextValue,
        visibileSections: getNewVisibilitySections(newSection, isVisible),
      }),
  }
  return (
    <SectionVisibilityContext.Provider value={contextValue}>
      {children}
    </SectionVisibilityContext.Provider>
  )
}
