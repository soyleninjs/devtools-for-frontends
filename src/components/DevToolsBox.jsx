import { useEffect, useRef } from 'react'
import useDevtoolsBox from '../hooks/useDevtoolsBox'
import useDraggable from '../hooks/useDraggable'
import useResizable from '../hooks/useResizable'
import DevToolsLine from './DevToolsLine'

function DevToolsBox ({
  id,
  name,
  x,
  y,
  width,
  height,
  color,
  resizable,
  draggable,
  guides,
  visible,
  text
}) {
  const { updateBox } = useDevtoolsBox()
  const firstRender = useRef(true)
  const { elementDragRef, position } = useDraggable(draggable, true)
  const { elementResizableRef, updateTooltipContent, dimentions } = useResizable(resizable, true, true)

  const setRef = (element) => {
    elementDragRef.current = element
    elementResizableRef.current = element
  }

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    updateBox(id, {
      x: position.x,
      y: position.y
    })
  }, [position])

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    updateBox(id, {
      ...dimentions
    })
  }, [dimentions])

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    updateTooltipContent()
  }, [width, height])

  return (
    <div
      className='devtools-box'
      ref={setRef}
      id={id !== null ? id : window.crypto.randomUUID()}
      name={name}
      style={{
        position: 'fixed',
        left: x,
        top: y,
        zIndex: '9999999999999',
        display: visible ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: `${color}33`,
        border: `1px dashed ${color}`,
        boxSizing: 'border-box',
        textAlign: 'center'
      }}
    >
      <span
        className='devtools-box-text'
        style={{
          maxWidth: 'calc(100% - 10px)',
          maxHeight: 'calc(100% - 10px)',
          overflow: 'hidden'
        }}
      >
        {text}
      </span>
      {guides.enable && (
        <>
          <DevToolsLine manipulate={false} color={color} dashed={guides.dashed} offset={x} />
          <DevToolsLine manipulate={false} color={color} dashed={guides.dashed} offset={x + width - 1} />
          <DevToolsLine manipulate={false} moveVertical color={color} dashed={guides.dashed} offset={y} />
          <DevToolsLine manipulate={false} moveVertical color={color} dashed={guides.dashed} offset={y + height - 1} />
        </>
      )}
    </div>
  )
}

export default DevToolsBox
