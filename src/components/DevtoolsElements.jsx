import useDevtoolsBox from '../hooks/useDevtoolsBox'

import DevToolsBox from './DevToolsBox'

const DevtoolsElements = () => {
  const { boxesList, createBox } = useDevtoolsBox()

  return (
    <div className='items'>
      {boxesList.length > 0
        ? boxesList.map((box) => {
          return (
            <div key={box.id}>
              <DevToolsBox {...box} />
            </div>
          )
        })
        : 'Add a new box.'}
    </div>
  )
}

export default DevtoolsElements