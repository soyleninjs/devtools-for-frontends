import { useContext } from 'react'
import { DevtoolsContext } from '../context/Devtools'

function useDevtoolsSettings () {
  const { devtoolsSettings, setDevtoolsSettings } = useContext(DevtoolsContext)

  const updateSettings = (options) => {
    setDevtoolsSettings(prevState => {
      return {
        ...prevState,
        ...options
      }
    })
  }

  return { devtoolsSettings, updateSettings }
}

export default useDevtoolsSettings
