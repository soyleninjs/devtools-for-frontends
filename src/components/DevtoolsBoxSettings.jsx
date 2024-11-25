import { useState } from 'react'
import useDevtoolsBox from '../hooks/useDevtoolsBox'
import useDevtoolsModal from '../hooks/useDevtoolsModal'
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
  guides,
}) {
  const [isChangingName, setIsChangingName] = useState(false)
  const [isChangingText, setIsChangingText] = useState(false)
  const [isChangingSize, setIsChangingSize] = useState(false)
  const { updateBox, deleteBox } = useDevtoolsBox()
  const { openModal, closeModal } = useDevtoolsModal()

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
    openModal({
      headerText: "Delete Box",
      contentText: `You want to remove the '${name}' box?`,
      showPrimaryButton: true,
      showSecondaryButton: true,
      onPrimaryClick: () => {
        deleteBox(id)
        closeModal()
      },
      onSecondaryClick: () => {
        closeModal()
      },
    })
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
    <div className='dff-content-item' style={{"--color": color}} id={id}>
      <div className="dff-content-item-sidebar">
        <button type='button' title='Reorder' className='dff-button dff-button-icon border-radius-0 border-0' data-handle-reorder>
          <Icon icon='reorder' />
        </button>
        <button type='button' title='Hide' className={`dff-button dff-button-icon border-radius-0 border-0 ${visible === false && 'active'}`} onClick={updateVisibility}>
          <Icon icon='visibility' />
        </button>
        <button type='button' title='Delete' className='dff-button dff-button-icon color-error border-radius-0 border-0' onClick={handleDelete}>
          <Icon icon='delete' />
        </button>
      </div>

      <div className="dff-content-item-content">
        <div className='dff-content-item-block'>
          <h3 className='dff-content-item-name'>{name}</h3>
          <button type='button' title='Name' className='dff-button dff-button-icon' onClick={() => setIsChangingName(true)}>
            <Icon icon='name' />
          </button>
          <button type='button' title='Text Box' className='dff-button dff-button-icon' onClick={() => setIsChangingText(true)}>
            <Icon icon='text' />
          </button>
          {isChangingName && (
            <div className='dff-content-item-inputs-wrapper'>
              <div className='dff-content-item-input-wrapper'>
                <input
                  name='box-name'
                  className='dff-content-item-input dff-content-item-input-name'
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
            <div className='dff-content-item-inputs-wrapper'>
              <div className='dff-content-item-input-wrapper'>
                <input
                  name='box-text'
                  className='dff-content-item-input dff-content-item-input-text'
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
            <div className='dff-content-item-inputs-wrapper'>
              <div className='dff-content-item-input-wrapper'>
                <label className='dff-content-item-input-label' htmlFor='box-width'>W: </label>
                <input
                  name='box-width'
                  id='box-width'
                  className='dff-content-item-input dff-content-item-input-width'
                  type='number'
                  pattern='[0-9]*'
                  value={width}
                  onChange={updateWidth}
                />
              </div>
              <span className='dff-content-item-input-separator'>-</span>
              <div className='dff-content-item-input-wrapper'>
                <label className='dff-content-item-input-label' htmlFor='box-width'>H: </label>
                <input
                  name='box-height'
                  id='box-height'
                  className='dff-content-item-input dff-content-item-input-height'
                  type='number'
                  pattern='[0-9]*'
                  value={height}
                  onChange={updateHeight}
                />
              </div>
              <button type='button' title='Confirm Size' className='dff-button dff-button-icon' onClick={() => setIsChangingSize(false)}>
                <Icon icon='check' />
              </button>
            </div>
          )}
        </div>
        <div className='dff-content-item-block'>
          <input title='Color' name='box-color' className='dff-content-item-color' type='color' value={color} onChange={updateColor} />
          <button type='button' title='Resize' className={`dff-button dff-button-icon ${resizable && 'active'}`} onClick={updateResizable}>
            <Icon icon='resizable' />
          </button>
          <button type='button' title='Drag and drop' className={`dff-button dff-button-icon ${draggable && 'active'}`} onClick={updateDraggable}>
            <Icon icon='draggable' />
          </button>
          <button type='button' title='Guides' className={`dff-button dff-button-icon ${guides.enable && 'active'}`} onClick={updateGuides}>
            <Icon icon='guides' />
          </button>
          <button type='button' title='Size' className='dff-button dff-button-icon' onClick={() => setIsChangingSize(true)}>
            <Icon icon='size' />
          </button>
          <button type='button' title='Reset position' className='dff-button dff-button-icon' onClick={resetPosition}>
            <Icon icon='location' />
          </button>
          {/* <button type='button' title='Hide' className={`dff-button dff-button-icon ${visible === false && 'active'}`} onClick={updateVisibility}>
            <Icon icon='visibility' />
          </button>
          <button type='button' title='Delete' className='dff-button dff-button-icon color-error' onClick={handleDelete}>
            <Icon icon='delete' />
          </button> */}
        </div>
        {guides.enable && (
          <div className='dff-content-item-block dff-content-item-block-config-guides'>
            <h3 className='dff-content-item-name'>Guides:</h3>
            <button type='button' title='Guide style' className={`dff-button dff-button-icon ${guides.dashed && 'active'}`} onClick={handleGuideDashed}>
              <Icon icon='dashed' />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default DevtoolsBoxSetings
