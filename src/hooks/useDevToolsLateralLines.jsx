import { useContext } from 'react'
import { DevtoolsContext } from '../context/Devtools'

function useDevToolsLateralLines () {
  const { lateralLinesList, setLateralLinesList } = useContext(DevtoolsContext)

  const createLateralLines = () => {
    setLateralLinesList(prevState => [...prevState, {
      id: window.crypto.randomUUID(),
      name: `Lateral Lines ${lateralLinesList.length + 1}`,
      visible: true,
      tooltip: true,
      offset: 10,
      draggable: false,
      dashed: false,
      color: '#ff0000'
    }]
    )
  }

  const updateLateralLines = (id, options) => {
    setLateralLinesList(prevState => {
      return prevState.map(lateralLines => {
        if (lateralLines.id === id) {
          Object.keys(options).forEach(propertie => {
            lateralLines[propertie] = options[propertie]
          })
          return lateralLines
        }
        return lateralLines
      })
    })
  }

  const deleteLateralLines = (id) => {
    setLateralLinesList(prevState => prevState.filter(lateralLines => lateralLines.id !== id))
  }

  return { lateralLinesList, createLateralLines, updateLateralLines, deleteLateralLines }
}

export default useDevToolsLateralLines
