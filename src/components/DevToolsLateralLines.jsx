import { useEffect } from 'react'
import useTooltip from '../hooks/useTooltip'
import useDraggable from '../hooks/useDraggable'
import useDevToolsLateralLines from '../hooks/useDevToolsLateralLines'
import Icon from './Icon'

function DevToolsLateralLines ({
  id,
  name,
  offset,
  visible,
  tooltip,
  dashed,
  color,
  draggable
}) {
  const { Tooltip, setTextTooltip } = useTooltip(tooltip)
  const { updateLateralLines } = useDevToolsLateralLines()
  const { elementDragRef: lineOneRef, handleDragRef: handleLineOneRef, position: positionLineOne } = useDraggable(draggable, true, 'horizontal', false)

  useEffect(() => {
    setTextTooltip(`${name} - offset: ${offset}px`)
  }, [name, offset])

  useEffect(() => {
    updateLateralLines(id, {
      offset: positionLineOne.x + 1
    })
  }, [positionLineOne])

  return (
    <div
      className='devtools-lines-container'
      style={{
        display: visible ? 'flex' : 'none'
      }}
    >
      <div
        className='devtools-line devtools-line-left'
        name={`${name} left`}
        ref={lineOneRef}
        style={{
          position: 'fixed',
          top: '0',
          left: `${offset - 1}px`,
          zIndex: '9999999999999',
          boxSizing: 'border-box',
          width: '1px',
          height: '100vh',
          borderRight: `1px ${dashed ? 'dashed' : 'solid'} ${color}`
        }}
      >
        <Tooltip />
        {draggable && (
          <div
            className='devtools-line-draggable-handle window-button window-button-icon'
            ref={handleLineOneRef}
            style={{
              top: '50%',
              left: '2px',
              transform: 'translateY(-50%)'
            }}
          >
            <Icon icon='draggable' />
          </div>
        )}
      </div>
      <div
        className='devtools-line devtools-line-right'
        name={`${name} right`}
        style={{
          position: 'fixed',
          top: '0',
          right: `${offset - 1}px`,
          zIndex: '9999999999999',
          boxSizing: 'border-box',
          width: '1px',
          height: '100vh',
          borderRight: `1px ${dashed ? 'dashed' : 'solid'} ${color}`
        }}
      />
    </div>
  )
}

export default DevToolsLateralLines
