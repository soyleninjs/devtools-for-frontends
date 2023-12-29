import { useRef, useEffect, useState } from 'react'
import { createElement, cleanText, createTooltip, focusElement } from '../utils/utils'

function useResizable (resizable, enableTooltip = true, getDimentions = false) {
  const elementResizableRef = useRef(null)
  const [dimentions, setDimentions] = useState({})
  const [updateTooltipContent, setUpdateTooltipContent] = useState(() => () => {})

  useEffect(() => {
    const element = elementResizableRef.current
    const tooltipContent = enableTooltip ? createTooltip(element) : () => {}

    const updateTooltip = () => {
      tooltipContent(`${element.style.width} - ${element.style.height}`)
    }

    setUpdateTooltipContent(() => {
      return updateTooltip
    })

    updateTooltip()

    if (resizable) {
      let startX, startY, startWidth, startHeight
      let activeHandle = null

      const removeHandles = () => {
        element.querySelectorAll('& > .resizable-handle')?.forEach(handle => handle.remove())
      }

      const createHandles = () => {
        const handlesAxis = ['top', 'left', 'right', 'bottom', 'top-left', 'top-right', 'bottom-left', 'bottom-right']
        handlesAxis.forEach((handle) => {
          const sizeHandler = 6
          const handleDiv = createElement('div', {
            class: `resizable-handle ${handle}`,
            style: cleanText(`
              position: absolute;
              z-index: 1;
              ${['left', 'right'].includes(handle)
? `
                top: 50%;
                transform: translateY(-50%);
                cursor: ew-resize;
                width: ${sizeHandler}px;
                height: calc(100% - ${sizeHandler}px);
              `
: ''}
              ${['top', 'bottom'].includes(handle)
? `
                left: 50%;
                transform: translateX(-50%);
                cursor: ns-resize;
                width: calc(100% - ${sizeHandler}px);
                height: ${sizeHandler}px;
              `
: ''}
              ${['top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(handle)
? `
                width: ${sizeHandler}px;
                height: ${sizeHandler}px;
              `
: ''}
              ${['top', 'top-left', 'top-right'].includes(handle)
? `
                top: -${sizeHandler / 2}px;
              `
: ''}
              ${['bottom', 'bottom-left', 'bottom-right'].includes(handle)
? `
                bottom: -${sizeHandler / 2}px;
              `
: ''}
              ${['left', 'top-left', 'bottom-left'].includes(handle)
? `
                left: -${sizeHandler / 2}px;
              `
: ''}
              ${['right', 'top-right', 'bottom-right'].includes(handle)
? `
                right: -${sizeHandler / 2}px;
              `
: ''}
              ${['top-left', 'bottom-right'].includes(handle)
? `
                cursor: nwse-resize;
              `
: ''}
              ${['bottom-left', 'top-right'].includes(handle)
? `
                cursor: nesw-resize;
              `
: ''}
            `)
          })

          element.appendChild(handleDiv)
        })

        return element.querySelectorAll('& > .resizable-handle')
      }

      function initResize (event) {
        event.preventDefault()
        event.stopPropagation()
        startX = event.clientX
        startY = event.clientY
        startWidth = parseInt(document.defaultView.getComputedStyle(element).width, 10)
        startHeight = parseInt(document.defaultView.getComputedStyle(element).height, 10)
        activeHandle = this
        focusElement(element)

        document.addEventListener('mousemove', resize)
        document.addEventListener('mouseup', stopResize)
      }

      const resize = (event) => {
        const dx = event.clientX - startX
        const dy = event.clientY - startY

        if (activeHandle.classList.contains('left')) {
          element.style.width = `${startWidth - dx}px`
          element.style.left = `${startX + dx}px`
        }

        if (activeHandle.classList.contains('right')) {
          element.style.width = `${startWidth + dx}px`
        }

        if (activeHandle.classList.contains('top')) {
          element.style.height = `${startHeight - dy}px`
          element.style.top = `${startY + dy}px`
        }

        if (activeHandle.classList.contains('bottom')) {
          element.style.height = `${startHeight + dy}px`
        }

        if (activeHandle.classList.contains('top-left')) {
          element.style.height = `${startHeight - dy}px`
          element.style.top = `${startY + dy}px`
          element.style.width = `${startWidth - dx}px`
          element.style.left = `${startX + dx}px`
        }

        if (activeHandle.classList.contains('top-right')) {
          element.style.height = `${startHeight - dy}px`
          element.style.top = `${startY + dy}px`
          element.style.width = `${startWidth + dx}px`
        }

        if (activeHandle.classList.contains('bottom-left')) {
          element.style.height = `${startHeight + dy}px`
          element.style.width = `${startWidth - dx}px`
          element.style.left = `${startX + dx}px`
        }

        if (activeHandle.classList.contains('bottom-right')) {
          element.style.height = `${startHeight + dy}px`
          element.style.width = `${startWidth + dx}px`
        }

        getDimentions && setDimentions({
          x: parseInt(element.style.left, 10),
          y: parseInt(element.style.top, 10),
          width: parseInt(element.style.width, 10),
          height: parseInt(element.style.height, 10)
        })

        updateTooltip()
      }

      const stopResize = () => {
        activeHandle = null
        document.removeEventListener('mousemove', resize)
        document.removeEventListener('mouseup', stopResize)
      }

      // Limpiar controladores anateriores si existen
      removeHandles()
      // Agregar controladores de redimensionamiento solo en los bordes
      const handles = createHandles()

      // Enlazar controladores de redimensionamiento a eventos
      handles.forEach((handle) => {
        handle.addEventListener('mousedown', initResize)
      })

      updateTooltip()

      return () => {
        handles.forEach((handle) => {
          handle.removeEventListener('mousedown', initResize)
        })
        stopResize()
        removeHandles()
      }
    }
  }, [resizable, enableTooltip])

  return { elementResizableRef, updateTooltipContent, dimentions }
}

export default useResizable
