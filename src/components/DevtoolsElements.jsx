import useDevtoolsBox from '../hooks/useDevtoolsBox'
import useDevtoolsLateralLines from '../hooks/useDevtoolsLateralLines'

import DevtoolsBox from './DevtoolsBox'
import DevtoolsLateralLine from './DevtoolsLateralLine'

const DevtoolsElements = () => {
  const { boxesList, boxesOrder } = useDevtoolsBox()
  const { lateralLinesList, lateralLinesOrder } = useDevtoolsLateralLines()

  return (
    <div className='dff-rendered-elements'>
      {boxesOrder.length > 0 && (
        boxesOrder.map((id) => {
          const box = boxesList[id]
          return (
            <DevtoolsBox key={box.id} {...box} />
          )
        })
      )}

      {lateralLinesOrder.length > 0 && (
        lateralLinesOrder.map((id) => {
          const box = lateralLinesList[id]
          return (
            <DevtoolsLateralLine key={box.id} {...box} />
          )
        })
      )}
    </div>
  )
}

export default DevtoolsElements