import { useContext } from 'react'
import { DevtoolsContext } from '../context/Devtools'

function useDevtoolsBox () {
  const { boxesList, setBoxesList } = useContext(DevtoolsContext)

  const createBox = () => {
    setBoxesList(prevState => [...prevState, {
      id: window.crypto.randomUUID(),
      name: `Box ${boxesList.length + 1}`,
      x: 100,
      y: 100,
      width: 150,
      height: 150,
      color: '#000000',
      resizable: true,
      draggable: true,
      guides: {
        enable: false,
        dashed: false
      },
      visible: true,
      text: ''
    }]
    )
  }

  const updateBox = (id, options) => {
    setBoxesList(prevState => {
      return prevState.map(box => {
        if (box.id === id) {
          Object.keys(options).forEach(propertie => {
            box[propertie] = options[propertie]
          })
          return box
        }
        return box
      })
    })
  }

  const deleteBox = (id) => {
    setBoxesList(prevState => prevState.filter(box => box.id !== id))
  }

  return { boxesList, createBox, updateBox, deleteBox }
}

export default useDevtoolsBox
