import React from "react"

const initialVisibilityContextValue = {
  visibileSection: "",
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
  const contextValue = {
    ...rawContextValue,
    onChangeVisibileSection: newSection =>
      setContextValue({
        ...rawContextValue,
        visibileSection: newSection,
      }),
  }
  return (
    <SectionVisibilityContext.Provider value={contextValue}>
      {children}
    </SectionVisibilityContext.Provider>
  )
}
