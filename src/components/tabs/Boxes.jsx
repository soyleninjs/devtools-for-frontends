import useDevtoolsBox from '../../hooks/useDevtoolsBox'
import DevtoolsBoxSettings from '../DevtoolsBoxSettings'

const Boxes = () => {
  const { boxesList, createBox } = useDevtoolsBox()

  const handleAddBox = () => {
    createBox()
  }

  return (
    <>
      <div className='window-section-items'>
        {boxesList.length > 0
          ? boxesList.map((box) => {
            return (
              <div key={box.id}>
                <DevtoolsBoxSettings {...box} />
              </div>
            )
          })
          : 'Add a new box.'}
      </div>

      <div className='window-section-button-wrapper'>
        <button name='Add new element' type='button' className='window-section-button dff-button dff-button-icon' onClick={handleAddBox}>
          <svg width='512' height='512' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <g fill='currentColor'>
              <path d='M12 6a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z' />
              <path fillRule='evenodd' d='M5 22a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5Zm-1-3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14Z' clipRule='evenodd' />
            </g>
          </svg>
        </button>
      </div>
    </>
  )
}

export default Boxes