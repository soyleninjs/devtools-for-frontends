import { useState } from 'react'
import { copyTextToClipboard } from '../utils/utils'

const DevtoolsTools = () => {
  const [isCopied, setIsCopied] = useState(false)

  const handleTriggerResizeEvent = () => {
    window.dispatchEvent(new Event('resize'))
  }

  const handleTriggerScrollEvent = () => {
    window.dispatchEvent(new Event('scroll'))
  }

  const handleCopyClick = () => {
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    copyTextToClipboard(text)
      .then(() => {
        setIsCopied(true)
        setTimeout(() => {
          setIsCopied(false)
        }, 1500)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className='window-tools'>
      <button title='Trigger resize event' type='button' className='window-tools-button' onClick={handleTriggerResizeEvent}>
        Trigger Resize
      </button>

      <button title='Trigger scroll event' type='button' className='window-tools-button' onClick={handleTriggerScrollEvent}>
        Trigger Scroll
      </button>

      <button title='Lorem impsum on clipboard' type='button' className='window-tools-button' onClick={handleCopyClick}>
        {isCopied ? 'Copied!' : 'Get a Lorem ipsum...'}
      </button>
    </div>
  )
}

export default DevtoolsTools
