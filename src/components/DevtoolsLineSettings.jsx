import { useState } from 'react'
import useDevtoolsLine from '../hooks/useDevtoolsLine'
import Icon from './Icon'

function ToolboxLineSettings ({
  id,
  name,
  visible,
  draggable,
  moveVertical,
  dashed,
  color
}) {
  const [isChangingName, setIsChangingName] = useState(false)
  const { updateLine, deleteLine } = useDevtoolsLine()

  const updateColor = (event) => {
    updateLine(id, {
      color: event.target.value
    })
  }

  const updateDraggable = () => {
    updateLine(id, {
      draggable: !draggable
    })
  }

  const updateVisibility = () => {
    updateLine(id, {
      visible: !visible
    })
  }

  const updateName = (event) => {
    updateLine(id, {
      name: event.target.value
    })
  }

  const updateDashed = () => {
    updateLine(id, {
      dashed: !dashed
    })
  }

  const updateMoveVertical = () => {
    updateLine(id, {
      moveVertical: !moveVertical
    })
  }

  const handleDelete = () => {
    deleteLine(id)
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
        <input title='Color' name='box-color' className='window-section-item-color' type='color' value={color} onChange={updateColor} />
        <button title='Lines dashed' type='button' className={`window-button window-button-icon ${dashed && 'active'}`} onClick={updateDashed}>
          <Icon icon='dashed' />
        </button>
        <button title='Drag and drop' type='button' className={`window-button window-button-icon ${draggable && 'active'}`} onClick={updateDraggable}>
          <Icon icon='draggable' />
        </button>
        <button title='Orientation' type='button' className='window-button window-button-icon' onClick={updateMoveVertical}>
          {moveVertical ? <Icon icon='move-vertical' /> : <Icon icon='move-horizontal' />}
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

export default ToolboxLineSettings
