import { useState } from 'react'

function useTooltip (enable) {
  const [textTooltip, setTextTooltip] = useState('')

  const Tooltip = () => {
    if (!enable) return null
    return (
      <span
        className='devtools-tooltip'
        style={{
          position: 'absolute',
          left: 'calc(100% + 5px)',
          top: '2px',
          boxSizing: 'border-box',
          backgroundColor: 'white',
          border: '1px solid black',
          borderRadius: '3px',
          padding: '3px',
          fontSize: '12px',
          color: 'black',
          whiteSpace: 'nowrap'
        }}
      >{textTooltip}
      </span>
    )
  }

  return { Tooltip, setTextTooltip }
}

export default useTooltip
