import { useState, useEffect, useRef } from 'react'

import useTypeWord from '../hooks/useTypeWord'
import useDevtoolsSettings from '../hooks/useDevtoolsSettings'

import ContentBoxes from './ContentBoxes'
import ContentLateralLines from './ContentLateralLines'
import ContentFormatTexts from './ContentFormatTexts'
import ContentTools from './ContentTools'
import ContentImages from './ContentImages'
import ContentCssEditor from './ContentCssEditor'
import ContentSettings from './ContentSettings'

import DevtoolsTabContent from './DevtoolsTabContent'
import DevtoolsMenu from './DevtoolsMenu'
import Icon from './Icon'

const tabs = [
  {
    id: 'boxes',
    title: 'Boxes',
    icon: <Icon icon="boxes" />,
    content: <ContentBoxes />
  },
  {
    id: 'lateral-lines',
    title: 'Lateral Lines',
    icon: <Icon icon="lateral-lines" />,
    content: <ContentLateralLines />
  },
  {
    id: 'format-texts',
    title: 'Formats texts',
    icon: <Icon icon="text" />,
    content: <ContentFormatTexts />
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: <Icon icon="tools" />,
    content: <ContentTools />
  },
  {
    id: 'images',
    title: 'Images Generator',
    icon: <Icon icon="image" />,
    content: <ContentImages />
  },
  {
    id: 'css-editor',
    title: 'Css editor',
    icon: <Icon icon="css-editor" />,
    content: <ContentCssEditor />
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: <Icon icon="settings" />,
    content: <ContentSettings />
  }
]

const DevtoolsBarMenu = () => {
  const { devtoolsSettings } = useDevtoolsSettings()
  const [showDevtools, setShowDevtools] = useState(devtoolsSettings.startVisible || false)
  const [activeTab, setActiveTab] = useState(null)
  const windowSize = useRef(null)
  const windowScroll = useRef(null)

  useTypeWord(devtoolsSettings.wordToShowDevtools, () => {
    setShowDevtools((prevState) => !prevState)
  })

  const handleClickShowDevtools = () => {
    setShowDevtools((prevState) => !prevState)
  }

  const handleTabClick = (tabId) => {
    setActiveTab(activeTab === tabId ? null : tabId)
  }

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
      <div className={`dff-bar-menu ${showDevtools ? 'visible' : ''}`}>
        {activeTab && <DevtoolsTabContent tab={tabs.find((tab) => tab.id === activeTab)} onClose={() => setActiveTab(null)} />}

        <div className="dff-stats">
          {devtoolsSettings.showWindowSize && (
            <div className="dff-stat dff-stats-window-size">
              <p>Window:</p>
              <p ref={windowSize}>
                {window.innerWidth}px - {window.innerHeight}px
              </p>
            </div>
          )}

          {devtoolsSettings.showWindowScroll && (
            <div className="dff-stat dff-stats-scroll">
              <p>Scroll:</p>
              <p ref={windowScroll}>{window.scrollY}px</p>
            </div>
          )}
        </div>

        <DevtoolsMenu tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />
      </div>

      <div className="dff-float-ui-buttons-wrapper">
        {!devtoolsSettings.hideButtonToShowDevtools && (
          <button title="Show window devtools" type="button" className="dff-float-ui-button" onClick={handleClickShowDevtools}>
            {showDevtools ? <Icon icon="close" /> : <Icon icon="window" />}
          </button>
        )}
      </div>

      {(devtoolsSettings.hideScrollbarPage || devtoolsSettings.blockScrollPage) && (
        <style>
          {`
          html::-webkit-scrollbar,
          body::-webkit-scrollbar {
            width: 0 !important;
            height: 0 !important;
          }  
        `}
        </style>
      )}

      {devtoolsSettings.css !== '' && <style>{devtoolsSettings.css}</style>}
    </>
  )
}

export default DevtoolsBarMenu
