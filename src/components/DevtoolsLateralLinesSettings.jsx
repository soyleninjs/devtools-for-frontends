import { useState } from 'react'
import useDevToolsLateralLines from '../hooks/useDevToolsLateralLines'
import Icon from './Icon'

function DevtoolsLateralLinesSettings ({
  id,
  name,
  visible,
  tooltip,
  offset,
  dashed,
  color,
  draggable
}) {
  const [isChangingName, setIsChangingName] = useState(false)
  const [isChangingOffset, setIsChangingOffset] = useState(false)
  const { updateLateralLines, deleteLateralLines } = useDevToolsLateralLines()

  const updateColor = (event) => {
    updateLateralLines(id, {
      color: event.target.value
    })
  }

  const updateOffset = (event) => {
    updateLateralLines(id, {
      offset: event.target.value
    })
  }

  const updateDraggable = () => {
    updateLateralLines(id, {
      draggable: !draggable
    })
  }

  const updateTooltip = () => {
    updateLateralLines(id, {
      tooltip: !tooltip
    })
  }

  const updateVisibility = () => {
    updateLateralLines(id, {
      visible: !visible
    })
  }

  const updateName = (event) => {
    updateLateralLines(id, {
      name: event.target.value
    })
  }

  const updateDashed = () => {
    updateLateralLines(id, {
      dashed: !dashed
    })
  }

  const handleDelete = () => {
    deleteLateralLines(id)
  }

  return (
    <div className='window-section-item'>
      <div className='window-section-item-block'>
        <h3 className='window-section-item-name'>{name}</h3>
        <button title='Name' type='button' className='window-button window-button-icon' onClick={() => setIsChangingName(true)}>
          <Icon icon='name' />
        </button>
        {isChangingName && (
          <div className='window-section-item-inputs-wrapper'>
            <div className='window-section-item-input-wrapper'>
              <input
                name='box-name'
                className='window-section-item-input window-section-item-input-name'
                type='text'
                value={name}
                autoFocus
                onChange={updateName}
                onBlur={(event) => event.target.value.length > 0 ? setIsChangingName(false) : event.target.focus()}
                onKeyDown={(event) => event.key === 'Enter' && event.target.value.length > 0 && setIsChangingName(false)}
              />
            </div>
          </div>
        )}
      </div>
      <div className='window-section-item-block'>
        <h3 className='window-section-item-name'>offset: {offset}px</h3>
        <button title='Offset' type='button' className='window-button window-button-icon' onClick={() => setIsChangingOffset(true)}>
          <Icon icon='line-offset' />
        </button>
        {isChangingOffset && (
          <div className='window-section-item-inputs-wrapper'>
            <div className='window-section-item-input-wrapper'>
              <input
                name='box-width'
                id='box-width'
                className='window-section-item-input window-section-item-input-offset'
                type='number'
                pattern='[0-9]*'
                autoFocus
                value={offset}
                onChange={updateOffset}
                onBlur={(event) => event.target.value.length > 0 ? setIsChangingOffset(false) : event.target.focus()}
                onKeyDown={(event) => event.key === 'Enter' && event.target.value.length > 0 && setIsChangingOffset(false)}
              />
            </div>
          </div>
        )}
      </div>
      <div className='window-section-item-block'>
        <input title='Color' name='box-color' className='window-section-item-color' type='color' value={color} onChange={updateColor} />
        <button title='Lines dashed' type='button' className={`window-button window-button-icon ${dashed && 'active'}`} onClick={updateDashed}>
          <Icon icon='dashed' />
        </button>
        <button title='Drag and drop' type='button' className={`window-button window-button-icon ${draggable && 'active'}`} onClick={updateDraggable}>
          <Icon icon='draggable' />
        </button>
        <button title='Hide Tooltip' type='button' className={`window-button window-button-icon ${tooltip && 'active'}`} onClick={updateTooltip}>
          <Icon icon='tooltip' />
        </button>
        <button title='Hide' type='button' className={`window-button window-button-icon ${visible === false && 'active'}`} onClick={updateVisibility}>
          <Icon icon='visibility' />
        </button>
        <button title='Delete' type='button' className='window-button window-button-icon color-error' onClick={handleDelete}>
          <Icon icon='delete' />
        </button>
      </div>
    </div>
  )
}

export default DevtoolsLateralLinesSettings
