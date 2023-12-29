import { useState, useEffect, useRef } from 'react'
import DevtoolsWindowResizeOption from './DevtoolsWindowResizeOption'

const DevtoolsWindowResize = () => {
  const [resizeOptions, setResizeOptions] = useState([])
  const firstRender = useRef(true)

  const handleAddResizeOption = () => {
    setResizeOptions(prevState => {
      return [...prevState, {
        id: crypto.randomUUID(),
        width: 1000,
        height: 1000
      }]
    })
  }

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    chrome?.runtime?.sendMessage({ type: 'configResizes', data: resizeOptions })
  }, [resizeOptions])

  useEffect(() => {
    chrome?.runtime?.sendMessage({ type: 'getResizes' }, (resizes) => {
      setResizeOptions(resizes || [])
    })
  }, [])

  return (
    <>
      <div className='window-section-items'>
        {resizeOptions.length > 0
          ? resizeOptions.map((resizeOption) => {
            return (
              <DevtoolsWindowResizeOption key={resizeOption.id} setResizeOptions={setResizeOptions} {...resizeOption} />
            )
          })
          : 'Add a new resize config.'}
      </div>
      <div className='window-section-button-wrapper'>
        <button name='Add new element' type='button' className='window-section-button window-button window-button-icon' onClick={handleAddResizeOption}>
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

export default DevtoolsWindowResize
