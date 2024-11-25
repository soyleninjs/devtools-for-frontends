const DevtoolsMenu = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className='dff-menu'>
      {
        tabs.map(tab => {
          return (
            <button 
              key={tab.id} 
              type='button'
              title={tab.title} 
              className={`dff-menu-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => onTabClick(tab.id)}
            >
              {tab.icon}
              <span className="dff-menu-button-tooltip">{tab.title}</span>
            </button>
          )
        })
      }
    </div>
  )
}

export default DevtoolsMenu
