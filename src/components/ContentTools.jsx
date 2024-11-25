const ContentTools = () => {

  const handleTriggerResizeEvent = () => {
    window.dispatchEvent(new Event('resize'))
  }

  const handleTriggerScrollEvent = () => {
    window.dispatchEvent(new Event('scroll'))
  }

  return (
    <div className='dff-content-items dff-tools'>
      <button title='Trigger resize event' type='button' className='dff-button dff-button-text' onClick={handleTriggerResizeEvent}>
        Trigger Resize
      </button>

      <button title='Trigger scroll event' type='button' className='dff-button dff-button-text' onClick={handleTriggerScrollEvent}>
        Trigger Scroll
      </button>

      <a href='https://ipinfo.io/json' target="_blank" title='Get ip info' className='dff-button dff-button-text'>
        IP info
      </a>

      <a href='https://loripsum.net' target="_blank" title='Get ip info' className='dff-button dff-button-text'>
        Get Lorem ipsum
      </a>

      <a href='https://iconbuddy.com/' target="_blank" title='Get ip info' className='dff-button dff-button-text'>
        Free Icons svg
      </a>

      <a href='https://imgto.xyz/' target="_blank" title='Get ip info' className='dff-button dff-button-text'>
        Image optimizer
      </a>

      <a href='https://lorem-json.com/' target="_blank" title='Get ip info' className='dff-button dff-button-text'>
        JSON API generator
      </a>
    </div>
  )
}

export default ContentTools
