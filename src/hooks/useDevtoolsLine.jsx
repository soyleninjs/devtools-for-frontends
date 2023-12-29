import { useContext } from 'react'
import { DevtoolsContext } from '../context/Devtools'

function useToolboxLine () {
  const { devtoolsLines, setDevtoolsLines } = useContext(DevtoolsContext)

  const createLine = () => {
    setDevtoolsLines(prevState => [...prevState, {
      id: window.crypto.randomUUID(),
      name: `Line ${devtoolsLines.length + 1}`,
      visible: true,
      draggable: true,
      moveVertical: false,
      offset: 30,
      dashed: false,
      color: '#ff0000'
    }]
    )
  }

  const updateLine = (id, options) => {
    setDevtoolsLines(prevState => {
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

  const deleteLine = (id) => {
    setDevtoolsLines(prevState => prevState.filter(lateralLines => lateralLines.id !== id))
  }

  return { devtoolsLines, createLine, updateLine, deleteLine }
}

export default useToolboxLine
