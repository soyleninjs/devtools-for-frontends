import { useState, createContext, useEffect } from 'react'

export const DevtoolsContext = createContext()
export function DevtoolsProvider ({ children }) {
  const [boxesList, setBoxesList] = useState(JSON.parse(window.localStorage.getItem('boxesList')) || [])
  const [lateralLinesList, setLateralLinesList] = useState(JSON.parse(window.localStorage.getItem('lateralLinesList')) || [])
  const [devtoolsLines, setDevtoolsLines] = useState(JSON.parse(window.localStorage.getItem('devtoolsLines')) || [])
  const [devtoolsSettings, setDevtoolsSettings] = useState(JSON.parse(window.localStorage.getItem('devtoolsSettings')) || {
    blockScrollPage: false,
    startVisible: false,
    showWindowSize: false,
    showWindowScroll: false,
    hideScrollbarPage: false,
    hideButtonToShowDevtools: false,
    wordToShowDevtools: "dev"
  })

  useEffect(() => {
    window.localStorage.setItem('boxesList', JSON.stringify(boxesList))
  }, [boxesList])

  useEffect(() => {
    window.localStorage.setItem('lateralLinesList', JSON.stringify(lateralLinesList))
  }, [lateralLinesList])

  useEffect(() => {
    window.localStorage.setItem('devtoolsLines', JSON.stringify(devtoolsLines))
  }, [devtoolsLines])

  useEffect(() => {
    window.localStorage.setItem('devtoolsSettings', JSON.stringify(devtoolsSettings))
  }, [devtoolsSettings])

  return (
    <DevtoolsContext.Provider value={{
      boxesList,
      setBoxesList,
      lateralLinesList,
      setLateralLinesList,
      devtoolsLines,
      setDevtoolsLines,
      devtoolsSettings,
      setDevtoolsSettings
    }}
    >
      {children}
    </DevtoolsContext.Provider>
  )
}
