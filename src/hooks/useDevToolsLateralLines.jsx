import { useContext } from 'react'
import { DevtoolsContext } from '../context/Devtools'

function useDevtoolsLateralLines () {
  const nameId = "lateralLines"
  const { dffData, setDffData } = useContext(DevtoolsContext)
  const lateralLinesList = dffData[nameId].data
  const lateralLinesOrder = dffData[nameId].order

  const createLateralLine = () => {
    const newLateralLine = {
      id: window.crypto.randomUUID(),
      name: `Lateral Lines ${Object.keys(dffData[nameId].data).length + 1}`,
      visible: true,
      tooltip: true,
      offset: 10,
      draggable: false,
      dashed: false,
      color: '#0000ff'
    };

    setDffData(prevState => ({
      ...prevState,
      [nameId]: {
        ...prevState[nameId],
        data: {
          ...prevState[nameId].data,
          [newLateralLine.id]: newLateralLine
        },
        order: [...prevState[nameId].order, newLateralLine.id],
      }
    }))
  }

  const updateLateralLine = (id, options) => {
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

  const deleteLateralLine = (id) => {
    setDffData((prevState) => {
      const { [id]: _, ...newData } = prevState[nameId].data;
      const newOrder = prevState[nameId].order.filter((lateralLineId) => lateralLineId !== id);
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

  return { lateralLinesList, lateralLinesOrder, updateOrder, createLateralLine, updateLateralLine, deleteLateralLine }
}

export default useDevtoolsLateralLines
