import { useEffect, useRef } from 'react'
import { Sortable, Plugins } from '@shopify/draggable'
import useDevtoolsLateralLines from '../hooks/useDevtoolsLateralLines'
import DevtoolsLateralLineSettings from './DevtoolsLateralLineSettings'

const ContentLateralLines = () => {
  const $items = useRef(null)
  const { lateralLinesList, lateralLinesOrder, updateOrder, createLateralLine } = useDevtoolsLateralLines()

  const handleAddNewLateralLine = () => {
    createLateralLine()
  }

  useEffect(() => {
    const sortable = new Sortable($items.current, {
      draggable: '.dff-content-item:not(.dff-content-item-button-icon)',
      handle: '[data-handle-reorder]',
      mirror: {
        constrainDimensions: true
      },
      plugins: [Plugins.SortAnimation, Plugins.ResizeMirror]
    })

    sortable.on('drag:stopped', (event) => {
      const newOrder = Array.from($items.current.querySelectorAll('.dff-content-item:not(.dff-content-item-button-icon)')).map($item => $item.id)
      updateOrder(newOrder)
    })

    return () => {
      sortable.destroy()
    }
  }, [])

  return (
    <>
      <div className='dff-content-items' ref={$items}>
        {lateralLinesOrder.length > 0
          ? lateralLinesOrder.map((id) => {
            const box = lateralLinesList[id]
            return (
              <DevtoolsLateralLineSettings key={box.id} {...box} />
            )
          })
          : ''}

        <button name='Add new element' type='button' className='dff-content-item dff-content-item-button-icon' onClick={handleAddNewLateralLine}>
          Add Lateral line
          <svg width='512' height='512' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <g fill='currentColor'>
              <path d='M12 6a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z' />
              <path fillRule='evenodd' d='M5 22a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5Zm-1-3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14Z' clipRule='evenodd' />
            </g>
          </svg>
        </button>
      </div>

    </>
  )
}

export default ContentLateralLines
