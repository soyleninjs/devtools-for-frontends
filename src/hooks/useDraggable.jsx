import { useRef, useEffect, useState } from 'react'
import { focusElement } from '../utils/utils'

function useDraggable (draggable, getPosition = false, type = 'free', autoControlled = true) {
  const elementDragRef = useRef(null)
  const handleDragRef = useRef(null)
  const [position, setPosition] = useState({})

  useEffect(() => {
    const element = elementDragRef.current
    const handleDrag = handleDragRef.current || element

    getPosition && setPosition({
      x: parseInt(document.defaultView.getComputedStyle(element).left, 10),
      y: parseInt(document.defaultView.getComputedStyle(element).top, 10)
    })

    if (draggable) {
      let offsetX, offsetY
      let isDragging = false

      const initDrag = (event) => {
        event.preventDefault()
        event.stopPropagation()
        isDragging = true
        offsetX = event.clientX - element.getBoundingClientRect().left
        offsetY = event.clientY - element.getBoundingClientRect().top
        focusElement(element)
        handleDrag.style.cursor = 'grabbing'
        document.addEventListener('mousemove', drag)
        document.addEventListener('mouseup', stopDrag)
      }

      const drag = (event) => {
        if (isDragging) {
          let x, y
          if (type === 'vertical') {
            x = element.getBoundingClientRect().left
            y = event.clientY - offsetY
          }

          if (type === 'horizontal') {
            x = event.clientX - offsetX
            y = element.getBoundingClientRect().top
          }

          if (type === 'free') {
            x = event.clientX - offsetX
            y = event.clientY - offsetY
          }

          if (autoControlled) {
            element.style.left = `${x}px`
            element.style.top = `${y}px`
          }

          getPosition && setPosition({
            x,
            y
          })
        }
      }

      const stopDrag = () => {
        isDragging = false
        handleDrag.style.cursor = 'grab'
        document.removeEventListener('mousemove', drag)
        document.removeEventListener('mouseup', stopDrag)
      }

      handleDrag.style.cursor = 'grab'
      handleDrag.addEventListener('mousedown', initDrag)

      return () => {
        handleDrag.style.cursor = 'default'
        handleDrag.removeEventListener('mousedown', initDrag)
        document.removeEventListener('mousemove', drag)
        document.removeEventListener('mouseup', stopDrag)
      }
    }
  }, [draggable, getPosition, type, autoControlled])

  return { position, elementDragRef, handleDragRef }
}

export default useDraggable
