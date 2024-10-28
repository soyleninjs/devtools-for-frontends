import Icon from './Icon'

const DevtoolsTabContent = ({ tab, onClose }) => {
  return (
    <div className="dff-tab">
      <div className="dff-tab-header">
        <h2 className="dff-tab-title">{tab.title}</h2>
        <button className="dff-tab-close-button dff-button dff-button-icon" onClick={onClose}>
          <Icon icon='close' />
        </button>
      </div>
      <div className="dff-tab-content">
        {tab.content}
      </div>
    </div>
  )
}

export default DevtoolsTabContent
