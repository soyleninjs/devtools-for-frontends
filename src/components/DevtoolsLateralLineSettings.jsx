import { useState } from 'react'
import useDevtoolsLateralLines from '../hooks/useDevtoolsLateralLines'
import useDevtoolsModal from '../hooks/useDevtoolsModal'
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
  const { updateLateralLine, deleteLateralLine } = useDevtoolsLateralLines()
  const { openModal, closeModal } = useDevtoolsModal()

  const updateColor = (event) => {
    updateLateralLine(id, {
      color: event.target.value
    })
  }

  const updateOffset = (event) => {
    updateLateralLine(id, {
      offset: event.target.value
    })
  }

  const updateDraggable = () => {
    updateLateralLine(id, {
      draggable: !draggable
    })
  }

  const updateTooltip = () => {
    updateLateralLine(id, {
      tooltip: !tooltip
    })
  }

  const updateVisibility = () => {
    updateLateralLine(id, {
      visible: !visible
    })
  }

  const updateName = (event) => {
    updateLateralLine(id, {
      name: event.target.value
    })
  }

  const updateDashed = () => {
    updateLateralLine(id, {
      dashed: !dashed
    })
  }

  const handleDelete = () => {
    openModal({
      headerText: "Delete lateral line",
      contentText: `You want to remove the '${name}' lateral line?`,
      showPrimaryButton: true,
      showSecondaryButton: true,
      onPrimaryClick: () => {
        deleteLateralLine(id)
        closeModal()
      },
      onSecondaryClick: () => {
        closeModal()
      },
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
          <button title='Name' type='button' className='dff-button dff-button-icon' onClick={() => setIsChangingName(true)}>
            <Icon icon='name' />
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
        </div>
        <div className='dff-content-item-block'>
          <h3 className='dff-content-item-name'>offset: {offset}px</h3>
          <button title='Offset' type='button' className='dff-button dff-button-icon' onClick={() => setIsChangingOffset(true)}>
            <Icon icon='line-offset' />
          </button>
          {isChangingOffset && (
            <div className='dff-content-item-inputs-wrapper'>
              <div className='dff-content-item-input-wrapper'>
                <input
                  name='box-width'
                  id='box-width'
                  className='dff-content-item-input dff-content-item-input-offset'
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
        <div className='dff-content-item-block'>
          <input title='Color' name='box-color' className='dff-content-item-color' type='color' value={color} onChange={updateColor} />
          <button title='Lines dashed' type='button' className={`dff-button dff-button-icon ${dashed && 'active'}`} onClick={updateDashed}>
            <Icon icon='dashed' />
          </button>
          <button title='Drag and drop' type='button' className={`dff-button dff-button-icon ${draggable && 'active'}`} onClick={updateDraggable}>
            <Icon icon='draggable' />
          </button>
          <button title='Hide Tooltip' type='button' className={`dff-button dff-button-icon ${tooltip && 'active'}`} onClick={updateTooltip}>
            <Icon icon='tooltip' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default DevtoolsLateralLinesSettings
