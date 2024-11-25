import { useContext } from 'react'
import { DevtoolsContext } from '../context/Devtools'

function useDevtoolsBox() {
  const nameId = "boxes"
  const { dffData, setDffData } = useContext(DevtoolsContext)
  const boxesList = dffData[nameId].data
  const boxesOrder = dffData[nameId].order

  const createBox = () => {
    const newBox = {
      id: window.crypto.randomUUID(),
      name: `Box ${Object.keys(dffData[nameId].data).length + 1}`,
      x: 100,
      y: 100,
      width: 150,
      height: 150,
      color: '#0000ff',
      resizable: true,
      draggable: true,
      guides: {
        enable: false,
        dashed: false
      },
      visible: true,
      text: ''
    };

    setDffData(prevState => ({
      ...prevState,
      [nameId]: {
        ...prevState[nameId],
        data: {
          ...prevState[nameId].data,
          [newBox.id]: newBox
        },
        order: [...prevState[nameId].order, newBox.id],
      }
    }))
  }

  const updateBox = (id, options) => {
    setDffData(prevState => ({
      ...prevState,
      [nameId]: {
        ...prevState[nameId],
        data: {
          ...prevState[nameId].data,
          [id]: {
            ...prevState[nameId].data[id],
            ...options
          }
        },
      }
    }))
  }

  const deleteBox = (id) => {
    setDffData((prevState) => {
      const { [id]: _, ...newData } = prevState[nameId].data;
      const newOrder = prevState[nameId].order.filter((boxId) => boxId !== id);
      return {
        ...prevState,
        [nameId]: {
          ...prevState[nameId],
          data: newData,
          order: newOrder,
        },
      };
    });
  }

  const updateOrder = (newArrayOrder) => {
    setDffData((prevState) => {
      return {
        ...prevState,
        [nameId]: {
          ...prevState[nameId],
          order: newArrayOrder,
        },
      };
    });
  }

  return { boxesList, boxesOrder, updateOrder, createBox, updateBox, deleteBox }
}

export default useDevtoolsBox
