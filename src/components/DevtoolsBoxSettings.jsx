import { useState } from 'react'
import useDevtoolsBox from '../hooks/useDevtoolsBox'
import Icon from './Icon'

function DevtoolsBoxSetings ({
  id,
  color,
  visible,
  name,
  text,
  width,
  height,
  resizable,
  draggable,
  guides
}) {
  const [isChangingName, setIsChangingName] = useState(false)
  const [isChangingText, setIsChangingText] = useState(false)
  const [isChangingSize, setIsChangingSize] = useState(false)
  const { updateBox, deleteBox } = useDevtoolsBox()

  const updateColor = (event) => {
    updateBox(id, {
      color: event.target.value
    })
  }

  const resetPosition = () => {
    updateBox(id, {
      x: 50,
      y: 50
    })
  }

  const updateResizable = () => {
    updateBox(id, {
      resizable: !resizable
    })
  }

  const updateDraggable = () => {
    updateBox(id, {
      draggable: !draggable
    })
  }

  const updateVisibility = () => {
    updateBox(id, {
      visible: !visible
    })
  }

  const updateName = (event) => {
    updateBox(id, {
      name: event.target.value
    })
  }

  const updateText = (event) => {
    updateBox(id, {
      text: event.target.value
    })
  }

  const updateWidth = (event) => {
    updateBox(id, {
      width: Number(event.target.value)
    })
  }

  const updateHeight = (event) => {
    updateBox(id, {
      height: Number(event.target.value)
    })
  }

  const handleDelete = () => {
    deleteBox(id)
  }

  const updateGuides = () => {
    updateBox(id, {
      guides: {
        ...guides,
        enable: !guides.enable
      }
    })
  }

  const handleGuideDashed = () => {
    updateBox(id, {
      guides: {
        ...guides,
        dashed: !guides.dashed
      }
    })
  }

  return (
    <div className='window-section-item'>
      <div className='window-section-item-block'>
        <h3 className='window-section-item-name'>{name}</h3>
        <button title='Name' type='button' className='dff-button dff-button-icon' onClick={() => setIsChangingName(true)}>
          <Icon icon='name' />
        </button>
        <button title='Text Box' type='button' className='dff-button dff-button-icon' onClick={() => setIsChangingText(true)}>
          <Icon icon='text' />
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
        {isChangingText && (
          <div className='window-section-item-inputs-wrapper'>
            <div className='window-section-item-input-wrapper'>
              <input
                name='box-text'
                className='window-section-item-input window-section-item-input-text'
                type='text'
                value={text}
                autoFocus
                onChange={updateText}
                onBlur={() => setIsChangingText(false)}
                onKeyDown={(event) => { event.key === 'Enter' && setIsChangingText(false) }}
              />
            </div>
          </div>
        )}
        {isChangingSize && (
          <div className='window-section-item-inputs-wrapper'>
            <div className='window-section-item-input-wrapper'>
              <label className='window-section-item-input-label' htmlFor='box-width'>W: </label>
              <input
                name='box-width'
                id='box-width'
                className='window-section-item-input window-section-item-input-width'
                type='number'
                pattern='[0-9]*'
                value={width}
                onChange={updateWidth}
              />
            </div>
            <span className='window-section-item-input-separator'>-</span>
            <div className='window-section-item-input-wrapper'>
              <label className='window-section-item-input-label' htmlFor='box-width'>H: </label>
              <input
                name='box-height'
                id='box-height'
                className='window-section-item-input window-section-item-input-height'
                type='number'
                pattern='[0-9]*'
                value={height}
                onChange={updateHeight}
              />
            </div>
            <button title='Confirm Size' type='button' className='dff-button dff-button-icon' onClick={() => setIsChangingSize(false)}>
              <Icon icon='check' />
            </button>
          </div>
        )}
      </div>
      <div className='window-section-item-block'>
        <input title='Color' name='box-color' className='window-section-item-color' type='color' value={color} onChange={updateColor} />
        <button title='Resize' type='button' className={`dff-button dff-button-icon ${resizable && 'active'}`} onClick={updateResizable}>
          <Icon icon='resizable' />
        </button>
        <button title='Drag and drop' type='button' className={`dff-button dff-button-icon ${draggable && 'active'}`} onClick={updateDraggable}>
          <Icon icon='draggable' />
        </button>
        <button title='Guides' type='button' className={`dff-button dff-button-icon ${guides.enable && 'active'}`} onClick={updateGuides}>
          <Icon icon='guides' />
        </button>
        <button title='Size' type='button' className='dff-button dff-button-icon' onClick={() => setIsChangingSize(true)}>
          <Icon icon='size' />
        </button>
        <button title='Reset position' type='button' className='dff-button dff-button-icon' onClick={resetPosition}>
          <Icon icon='location' />
        </button>
        <button title='Hide' type='button' className={`dff-button dff-button-icon ${visible === false && 'active'}`} onClick={updateVisibility}>
          <Icon icon='visibility' />
        </button>
        <button title='Delete' type='button' className='dff-button dff-button-icon color-error' onClick={handleDelete}>
          <Icon icon='delete' />
        </button>
      </div>
      {guides.enable && (
        <div className='window-section-item-block window-section-item-block-config-guides'>
          <h3 className='window-section-item-name'>Guides:</h3>
          <button title='Guide style' type='button' className={`dff-button dff-button-icon ${guides.dashed && 'active'}`} onClick={handleGuideDashed}>
            <Icon icon='dashed' />
          </button>
        </div>
      )}
    </div>
  )
}

export default DevtoolsBoxSetings
