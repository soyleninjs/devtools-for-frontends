import { useEffect } from 'react'
import useDraggable from '../hooks/useDraggable'
import useDevtoolsLine from '../hooks/useDevtoolsLine'
import Icon from './Icon'

function DevToolsLine ({
  id = null,
  name = '',
  visible = true,
  draggable = false,
  moveVertical = false,
  manipulate = true,
  offset,
  dashed,
  color
}) {
  const { updateLine } = useDevtoolsLine()
  const { elementDragRef, handleDragRef, position } = useDraggable(draggable, true, moveVertical ? 'vertical' : 'horizontal', false)

  let cssConfig, handleStyles
  if (moveVertical) {
    cssConfig = {
      top: `${offset}px`,
      left: '0',
      width: '100vw',
      height: '1px',
      borderBottom: `1px ${dashed ? 'dashed' : 'solid'} ${color}`
    }

    handleStyles = {
      bottom: '2px',
      left: '50%',
      transform: 'translateX(-50%)'
    }
  } else {
    cssConfig = {
      left: `${offset}px`,
      top: '0',
      width: '1px',
      height: '100vh',
      borderRight: `1px ${dashed ? 'dashed' : 'solid'} ${color}`
    }

    handleStyles = {
      top: '50%',
      left: '2px',
      transform: 'translateY(-50%)'
    }
  }

  useEffect(() => {
    updateLine(id, {
      offset: moveVertical ? position.y : position.x
    })
  }, [position])

  return (
    <div
      className='devtools-line'
      id={id !== null ? id : window.crypto.randomUUID()}
      ref={elementDragRef}
      name={name}
      style={{
        position: 'fixed',
        zIndex: '9999999999999',
        boxSizing: 'border-box',
        pointerEvents: `${manipulate ? 'unset' : 'none'}`,
        display: visible ? 'flex' : 'none',
        ...cssConfig
      }}
    >
      {draggable && (
        <div
          className='devtools-line-draggable-handle window-button window-button-icon'
          ref={handleDragRef}
          style={handleStyles}
        >
          <Icon icon='draggable' />
        </div>
      )}
    </div>
  )
}

export default DevToolsLine
