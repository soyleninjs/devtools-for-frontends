import { useState } from 'react'
import Icon from './Icon'

const DevtoolsWindowResizeOption = ({ id, width, height, setResizeOptions }) => {
  const [isChangingSize, setIsChangingSize] = useState(false)

  const setWindowSize = () => {
    chrome?.runtime?.sendMessage({ type: 'resize', data: { width, height } })
  }

  const updateSizeWidth = (event) => {
    setResizeOptions(prevState => {
      return prevState.map(item => {
        if (item.id === id) {
          item.width = Number(event.target.value)
          return item
        }
        return item
      })
    })
  }

  const updateSizeHeight = (event) => {
    setResizeOptions(prevState => {
      return prevState.map(item => {
        if (item.id === id) {
          item.height = Number(event.target.value)
          return item
        }
        return item
      })
    })
  }

  const handleDelete = () => {
    setResizeOptions(prevState => {
      return prevState.filter(item => item.id !== id)
    })
  }

  return (
    <div className='window-resize-option'>
      <button onClick={setWindowSize} className='window-resize-option-handle'>{width}px - {height}px</button>

      {isChangingSize && (
        <div className='window-section-item-inputs-wrapper'>
          <div className='window-section-item-input-wrapper'>
            <label className='window-section-item-input-label' htmlFor='option-width'>W: </label>
            <input
              name='option-width'
              id='option-width'
              className='window-section-item-input window-section-item-input-width'
              type='number'
              pattern='[0-9]*'
              value={width}
              onChange={updateSizeWidth}
            />
          </div>
          <span className='window-section-item-input-separator'>-</span>
          <div className='window-section-item-input-wrapper'>
            <label className='window-section-item-input-label' htmlFor='option-width'>H: </label>
            <input
              name='option-height'
              id='option-height'
              className='window-section-item-input window-section-item-input-height'
              type='number'
              pattern='[0-9]*'
              value={height}
              onChange={updateSizeHeight}
            />
          </div>
          <button title='Confirm Size' type='button' className='window-button window-button-icon' onClick={() => setIsChangingSize(false)}>
            <Icon icon='check' />
          </button>
        </div>
      )}

      <button title='Size' type='button' className='window-button window-button-icon' onClick={() => setIsChangingSize(true)}>
        <Icon icon='name' />
      </button>

      <button title='Delete' type='button' className='window-button window-button-icon color-error' onClick={handleDelete}>
        <Icon icon='delete' />
      </button>
    </div>
  )
}

export default DevtoolsWindowResizeOption
