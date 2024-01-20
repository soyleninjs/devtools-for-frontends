import Icon from './Icon'

const DevtoolsMenu = ({ tabSelected, setTabSelected }) => {
  return (
    <div className='window-menu'>
      <button title='Tab boxes' type='button' className={`window-menu-button ${tabSelected === 'boxes' ? 'active' : ''}`} onClick={() => setTabSelected('boxes')}>
        <Icon icon='boxes' />
      </button>

      <button title='Tab lateral Lines' type='button' className={`window-menu-button ${tabSelected === 'lateral-lines' ? 'active' : ''}`} onClick={() => setTabSelected('lateral-lines')}>
        <Icon icon='lateral-lines' />
      </button>

      <button title='Tab lines' type='button' className={`window-menu-button ${tabSelected === 'lines' ? 'active' : ''}`} onClick={() => setTabSelected('lines')}>
        <Icon icon='lines' />
      </button>

      <button title='Tab tools' type='button' className={`window-menu-button ${tabSelected === 'tools' ? 'active' : ''}`} onClick={() => setTabSelected('tools')}>
        <Icon icon='tools' />
      </button>

      <button title='Tab formats texts' type='button' className={`window-menu-button ${tabSelected === 'format-texts' ? 'active' : ''}`} onClick={() => setTabSelected('format-texts')}>
        <Icon icon='text' />
      </button>

      <button title='Tab css code editor' type='button' className={`window-menu-button ${tabSelected === 'css-editor' ? 'active' : ''}`} onClick={() => setTabSelected('css-editor')}>
        <Icon icon='css-editor' />
      </button>

      <button title='Tab formats texts' type='button' className={`window-menu-button ${tabSelected === 'window-resize' ? 'active' : ''}`} onClick={() => setTabSelected('window-resize')}>
        <Icon icon='resizable' />
      </button>

      <button title='Settings' type='button' className={`window-menu-button ${tabSelected === 'settings' ? 'active' : ''}`} onClick={() => setTabSelected('settings')}>
        <Icon icon='settings' />
      </button>
    </div>
  )
}

export default DevtoolsMenu
