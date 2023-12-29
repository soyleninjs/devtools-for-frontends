import { useState, useEffect, useRef } from 'react'
import useDevtoolsSettings from '../hooks/useDevtoolsSettings'
import useDevtoolsBox from '../hooks/useDevtoolsBox'
import useDevtoolsLine from '../hooks/useDevtoolsLine'
import useDevToolsLateralLines from '../hooks/useDevToolsLateralLines'
import useDraggable from '../hooks/useDraggable'
import useResizable from '../hooks/useResizable'
import useTypeWord from '../hooks/useTypeWord'

import DevtoolsMenu from './DevtoolsMenu'
import DevtoolsSettings from './DevtoolsSettings'
import DevtoolsTools from './DevtoolsTools'
import DevtoolsFormatTexts from './DevtoolsFormatTexts'
import DevtoolsWindowResize from './DevtoolsWindowResize'
import DevtoolsBoxSettings from './DevtoolsBoxSettings'
import DevtoolsLineSettings from './DevtoolsLineSettings'
import DevtoolsLateralLinesSettings from './DevtoolsLateralLinesSettings'

import DevtoolsLine from './DevtoolsLine'
import DevToolsBox from './DevToolsBox'
import DevToolsLateralLines from './DevToolsLateralLines'
import Icon from './Icon'

function Devtools () {
  const { devtoolsSettings, updateSettings } = useDevtoolsSettings()
  const { boxesList, createBox } = useDevtoolsBox()
  const { lateralLinesList, createLateralLines } = useDevToolsLateralLines()
  const { devtoolsLines, createLine } = useDevtoolsLine()
  const { elementDragRef, handleDragRef, position } = useDraggable(true, true, 'free', false)
  const { elementResizableRef } = useResizable(true, false)
  const [showDevtools, setShowDevtools] = useState(devtoolsSettings.startVisible || false)
  const [tabSelected, setTabSelected] = useState(devtoolsSettings.tabSelected || 'boxes')
  const windowSize = useRef(null)
  const windowScroll = useRef(null)

  const setRef = (element) => {
    elementDragRef.current = element
    elementResizableRef.current = element
  }

  useTypeWord(devtoolsSettings.wordToShowDevtools, () => {
    setShowDevtools(prevState => !prevState)
  })

  const handleClickMinimize = () => {
    setShowDevtools(false)
  }

  const handleAddBox = () => {
    createBox()
  }

  const handleAddLateralLines = () => {
    createLateralLines()
  }

  const handleAddLine = () => {
    createLine()
  }

  const resetWindowPosition = () => {
    updateSettings({
      x: 30,
      y: 30
    })
  }

  const handleShowWindowDevtools = () => {
    setShowDevtools(prevState => !prevState)
  }

  useEffect(() => {
    updateSettings({
      ...position
    })
  }, [position])

  useEffect(() => {
    updateSettings({
      tabSelected
    })
  }, [tabSelected])

  useEffect(() => {
    const handleResize = () => {
      if (windowSize.current) {
        windowSize.current.textContent = `${window.innerWidth}px - ${window.innerHeight}px`
      }
    }

    const handleScroll = () => {
      if (windowScroll.current) {
        windowScroll.current.textContent = `${window.scrollY}px`
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div
        className={`window devtools-window ${showDevtools ? 'visible' : ''}`}
        ref={setRef}
        style={{
          top: `${devtoolsSettings.y}px`,
          left: `${devtoolsSettings.x}px`
        }}
      >
        <div className='window-header' ref={handleDragRef}>
          <h2 className='window-header-title'>{tabSelected.replace('-', ' ').toLowerCase().replace(/\b\w/g, match => match.toUpperCase())}</h2>
          <div className='window-header-buttons'>
            <button type='button' className='window-button window-button-icon' onClick={handleClickMinimize}>
              <Icon icon='minimize' />
            </button>
          </div>
        </div>

        <div className='window-body'>
          {tabSelected === 'boxes' && (
            <div className='window-section'>
              <div className='window-section-items'>
                {boxesList.length > 0
                  ? boxesList.map((box) => {
                    return (
                      <div key={box.id}>
                        <DevToolsBox {...box} />
                        <DevtoolsBoxSettings {...box} />
                      </div>
                    )
                  })
                  : 'Add a new box.'}
              </div>
              <div className='window-section-button-wrapper'>
                <button name='Add new element' type='button' className='window-section-button window-button window-button-icon' onClick={handleAddBox}>
                  <svg width='512' height='512' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <g fill='currentColor'>
                      <path d='M12 6a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z' />
                      <path fillRule='evenodd' d='M5 22a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5Zm-1-3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14Z' clipRule='evenodd' />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          )}

          {tabSelected === 'lateral-lines' && (
            <div className='window-section'>
              <div className='window-section-items'>
                {lateralLinesList.length > 0
                  ? lateralLinesList.map((lateralLines) => {
                    return (
                      <div key={lateralLines.id}>
                        <DevToolsLateralLines {...lateralLines} />
                        <DevtoolsLateralLinesSettings {...lateralLines} />
                      </div>
                    )
                  })
                  : 'Add a new lateral lines.'}
              </div>
              <div className='window-section-button-wrapper'>
                <button name='Add new element' type='button' className='window-section-button window-button window-button-icon' onClick={handleAddLateralLines}>
                  <svg width='512' height='512' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <g fill='currentColor'>
                      <path d='M12 6a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z' />
                      <path fillRule='evenodd' d='M5 22a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5Zm-1-3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14Z' clipRule='evenodd' />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          )}

          {tabSelected === 'lines' && (
            <div className='window-section'>
              <div className='window-section-items'>
                {devtoolsLines.length > 0
                  ? devtoolsLines.map((line) => {
                    return (
                      <div key={line.id}>
                        <DevtoolsLine {...line} />
                        <DevtoolsLineSettings {...line} />
                      </div>
                    )
                  })
                  : 'Add a new line.'}
              </div>
              <div className='window-section-button-wrapper'>
                <button name='Add new element' type='button' className='window-section-button window-button window-button-icon' onClick={handleAddLine}>
                  <svg width='512' height='512' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <g fill='currentColor'>
                      <path d='M12 6a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z' />
                      <path fillRule='evenodd' d='M5 22a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5Zm-1-3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14Z' clipRule='evenodd' />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          )}

          {tabSelected === 'tools' && (
            <div className='window-section'>
              <DevtoolsTools />
            </div>
          )}

          {tabSelected === 'format-texts' && (
            <div className='window-section'>
              <DevtoolsFormatTexts />
            </div>
          )}

          {tabSelected === 'window-resize' && (
            <div className='window-section'>
              <DevtoolsWindowResize />
            </div>
          )}

          {tabSelected === 'settings' && (
            <div className='window-section'>
              <DevtoolsSettings />
            </div>
          )}
        </div>

        <DevtoolsMenu tabSelected={tabSelected} setTabSelected={setTabSelected} />

        {/* Settings */}

        <div className='window-blocks'>
          {devtoolsSettings.showWindowSize && (
            <div className='window-block window-block-page-size'>
              <p>Window:</p>
              <p ref={windowSize}>{window.innerWidth}px - {window.innerHeight}px</p>
            </div>
          )}

          {devtoolsSettings.showWindowScroll && (
            <div className='window-block window-block-page-size'>
              <p>Scroll:</p>
              <p ref={windowScroll}>{window.scrollY}px</p>
            </div>
          )}
        </div>
      </div>

      <div className='window-float-ui-buttons-wrapper'>
        {showDevtools && (
          <button title='Reset window position' type='button' className='window-float-ui-button' onClick={resetWindowPosition}>
            <Icon icon='location' />
          </button>
        )}

        {!devtoolsSettings.hideButtonToShowDevtools && (
          <button title='Show window devtools' type='button' className='window-float-ui-button' onClick={handleShowWindowDevtools}>
            {showDevtools ? <Icon icon='close' /> : <Icon icon='window' />}
          </button>
        )}
      </div>

      {(devtoolsSettings.hideScrollbarPage || devtoolsSettings.blockScrollPage) && (
        <style>{`
          html::-webkit-scrollbar,
          body::-webkit-scrollbar {
            width: 0 !important;
            height: 0 !important;
          }  
        `}
        </style>
      )}
    </>
  )
}

export default Devtools
