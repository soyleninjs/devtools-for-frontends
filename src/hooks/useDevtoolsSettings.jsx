import { useContext } from 'react'
import { DevtoolsContext } from '../context/Devtools'

function useDevtoolsSettings () {
  const nameId = "settings"
  const { dffData, setDffData } = useContext(DevtoolsContext)
  const devtoolsSettings = dffData[nameId]

  const updateSettings = (options) => {
    setDffData(prevState => ({
      ...prevState,
      [nameId]: {
        ...prevState[nameId],
        ...options,
      }
    }))
  }

  return { devtoolsSettings, updateSettings }
}

export default useDevtoolsSettings
