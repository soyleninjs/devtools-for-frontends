import { useState, useEffect, useRef } from 'react'

import useDevtoolsSettings from '../hooks/useDevtoolsSettings'
import useDevtoolsBox from '../hooks/useDevtoolsBox'
import useDevtoolsLine from '../hooks/useDevtoolsLine'
import useDevToolsLateralLines from '../hooks/useDevToolsLateralLines'

import Boxes from './tabs/Boxes';

import DevtoolsTabContent from './DevtoolsTabContent';
import DevtoolsMenu from './DevtoolsMenu';
import Icon from './Icon'

const tabs = [
  { 
    id: "boxes", 
    title: 'Boxes', 
    icon: <Icon icon='boxes' />,
    content: <Boxes />
  },
  { id: 'lateral-lines', title: 'Lateral Lines', icon: <Icon icon='lateral-lines' /> },
  { id: 'lines', title: 'Lines', icon: <Icon icon='lines' /> },
  { id: 'tools', title: 'Tools', icon: <Icon icon='tools' /> },
  { id: 'format-texts', title: 'Formats texts', icon: <Icon icon='text' /> },
  { id: 'css-editor', title: 'Code editor', icon: <Icon icon='css-editor' /> },
  { id: 'window-resize', title: 'Resize', icon: <Icon icon='resizable' /> },
  { id: 'settings', title: 'Settings', icon: <Icon icon='settings' /> },
]

const DevtoolsBarMenu = () => {
  const [activeTab, setActiveTab] = useState(null)

  const handleTabClick = (tabId) => {
    setActiveTab(activeTab === tabId ? null : tabId)
  }

  return (
    <div className='dff-bar-menu'>
      {activeTab && (
        <DevtoolsTabContent
          tab={tabs.find((tab) => tab.id === activeTab)}
          onClose={() => setActiveTab(null)}
        />
      )}
      <DevtoolsMenu tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />
    </div>
  )
}

export default DevtoolsBarMenu
