import Icon from './Icon'

const DevtoolsTabContent = ({ tab, onClose }) => {
  return (
    <div className="dff-window" data-content={tab.title}>
      <div className="dff-window-header">
        <h2 className="dff-window-header-title">{tab.title}</h2>
        <button className="dff-window-header-button dff-button dff-button-icon" onClick={onClose}>
          <Icon icon='close' />
        </button>
      </div>
      <div className="dff-window-body">
        {tab.content}
      </div>
    </div>
  )
}

export default DevtoolsTabContent
