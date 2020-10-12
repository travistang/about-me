import React from "react"

const initialVisibilityContextValue = {
  visbileSection: "",
  onChangeVisibileSection: () => {},
}
const SectionVisibilityContext = React.createContext(
  initialVisibilityContextValue
)

export const SectionVisibilityContextProvider = ({ children }) => {
  const [rawContextValue, setContextValue] = React.useState(
    initialVisibilityContextValue
  )
  /**
   * Prepare reducers
   */
  const contextValue = {
    ...rawContextValue,
    onChangeVisibileSection: newSection =>
      setContextValue({
        ...rawContextValue,
        visbileSection: newSection,
      }),
  }
  return (
    <SectionVisibilityContext.Provider value={contextValue}>
      {children}
    </SectionVisibilityContext.Provider>
  )
}
