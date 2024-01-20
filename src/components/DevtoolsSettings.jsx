import { useEffect, useState } from 'react'
import useDevtoolsSettings from '../hooks/useDevtoolsSettings'
import Checkbox from './Checkbox'
import { disableScroll, enableScroll } from '../utils/removeScroll'
import Icon from './Icon'

const DevtoolsSettings = () => {
  const [isChangingWord, setIsChangingWord] = useState(false)
  const { devtoolsSettings, updateSettings } = useDevtoolsSettings()
  const {
    startVisible,
    showWindowSize,
    showWindowScroll,
    hideScrollbarPage,
    blockScrollPage,
    hideButtonToShowDevtools,
    wordToShowDevtools
  } = devtoolsSettings

  const updateStartVisible = () => {
    updateSettings({
      startVisible: !startVisible
    })
  }

  const updateShowWindowSize = () => {
    updateSettings({
      showWindowSize: !showWindowSize
    })
  }

  const updateShowWindowScroll = () => {
    updateSettings({
      showWindowScroll: !showWindowScroll
    })
  }

  const updateHideScrollbarPage = () => {
    updateSettings({
      hideScrollbarPage: !hideScrollbarPage
    })
  }

  const updateBlockScrollPage = () => {
    updateSettings({
      blockScrollPage: !blockScrollPage
    })
  }

  const updateHideButtonToShowDevtools = () => {
    updateSettings({
      hideButtonToShowDevtools: !hideButtonToShowDevtools
    })
  }

  const updateWordToShowDevtools = (event) => {
    updateSettings({
      wordToShowDevtools: event.target.value
    })
    setIsChangingWord(false)
  }

  useEffect(() => {
    if (blockScrollPage) {
      disableScroll()
    } else {
      enableScroll()
    }
  }, [blockScrollPage])

  return (
    <div className='window-settings'>
      <div className='window-settings-block'>
        <p className='window-section-item-name'>Word for show/hide: &nbsp; <strong>{wordToShowDevtools}</strong></p>
        <button title='Change word to show/hide devtools' type='button' className='window-button window-button-icon' onClick={() => setIsChangingWord(true)}>
          <Icon icon='name' />
        </button>

        {isChangingWord && (
          <div className='window-section-item-inputs-wrapper'>
            <div className='window-section-item-input-wrapper'>
              <input
                name='settings-word-to-show-hide-devtools'
                type='text'
                className='form-input window-section-item-input no-border'
                defaultValue={wordToShowDevtools}
                autoFocus
                onBlur={(event) => event.target.value.length > 0 ? updateWordToShowDevtools(event) : event.target.focus()}
                onKeyDown={(event) => event.key === 'Enter' && event.target.value.length > 0 && updateWordToShowDevtools(event)}
              />
            </div>
          </div>
        )}
      </div>

      <div className='window-settings-block'>
        <Checkbox label='Hide button to show/hide' name='checkbox-button-to-show-devtools' checked={hideButtonToShowDevtools} onChange={updateHideButtonToShowDevtools} />
      </div>

      <div className='window-settings-block'>
        <Checkbox label='Launch on page load' name='checkbox-start-visible' checked={startVisible} onChange={updateStartVisible} />
      </div>

      <div className='window-settings-block'>
        <Checkbox label='Show window size' name='checkbox-show-window-size' checked={showWindowSize} onChange={updateShowWindowSize} />
      </div>

      <div className='window-settings-block'>
        <Checkbox label='Show window scroll' name='checkbox-show-window-scroll' checked={showWindowScroll} onChange={updateShowWindowScroll} />
      </div>

      <div className='window-settings-block'>
        <Checkbox label='Remove scrollbar page' name='checkbox-remove-scrollbar-page' checked={hideScrollbarPage} onChange={updateHideScrollbarPage} />
      </div>

      <div className='window-settings-block'>
        <Checkbox label='Block Scroll page' name='checkbox-block-scroll-page' checked={blockScrollPage} onChange={updateBlockScrollPage} />
      </div>
    </div>
  )
}

export default DevtoolsSettings
