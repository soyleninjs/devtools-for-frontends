import { useRef, useState } from 'react'
import { copyTextToClipboard } from '../utils/utils'

const DevtoolsFormatTexts = () => {
  const [isCopied, setIsCopied] = useState(false)
  const inputElement = useRef(null)
  let valueInput = ''

  const handleChangeInput = (event) => {
    if (event.target.value === '') {
      valueInput = ''
    }
  }

  const handleText = (text) => {
    return text
      .toLowerCase()
      .replace(/[_-]/g, ' ')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/-$/, '')
      .replace(/^-/, '')
  }

  const toHandleText = () => {
    const text = inputElement.current.value
    if (valueInput === '') {
      valueInput = text
    }
    inputElement.current.value = valueInput
      .toLowerCase()
      .replace(/[_-]/g, ' ')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/-$/, '')
      .replace(/^-/, '')
  }

  const toCamelCase = () => {
    const text = inputElement.current.value
    if (valueInput === '') {
      valueInput = text
    }
    inputElement.current.value = handleText(valueInput).replace(/[-_](\w)/g, (_, char) => char.toUpperCase())
  }

  const toPascalCase = () => {
    const text = inputElement.current.value
    if (valueInput === '') {
      valueInput = text
    }
    const words = handleText(valueInput).split('-')
    const pascalCaseWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    inputElement.current.value = pascalCaseWords.join('')
  }

  const toSnakeCase = () => {
    const text = inputElement.current.value
    if (valueInput === '') {
      valueInput = text
    }
    inputElement.current.value = handleText(valueInput).replace(/[-_]/g, '_')
  }

  const toTrainCase = () => {
    const text = inputElement.current.value
    if (valueInput === '') {
      valueInput = text
    }
    const words = handleText(valueInput).split('-')
    const trainCaseWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    inputElement.current.value = trainCaseWords.join('-')
  }

  const sentenceCase = () => {
    const text = inputElement.current.value
    if (valueInput === '') {
      valueInput = text
    }
    inputElement.current.value = valueInput.charAt(0).toUpperCase() + valueInput.slice(1).toLowerCase()
  }

  const allUpperCase = () => {
    const text = inputElement.current.value
    if (valueInput === '') {
      valueInput = text
    }
    inputElement.current.value = valueInput.toUpperCase()
  }

  const allLowerCase = () => {
    const text = inputElement.current.value
    if (valueInput === '') {
      valueInput = text
    }
    inputElement.current.value = valueInput.toLowerCase()
  }

  const capitalizeEachWord = () => {
    const text = inputElement.current.value
    if (valueInput === '') {
      valueInput = text
    }
    inputElement.current.value = valueInput.toLowerCase().replace(/\b\w/g, match => match.toUpperCase())
  }

  function toAlternatingCase () {
    const text = inputElement.current.value
    if (valueInput === '') {
      valueInput = text
    }
    inputElement.current.value = valueInput.split('').map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('')
  }

  const clearText = () => {
    inputElement.current.value = ''
    valueInput = ''
  }

  const handleCopyClick = () => {
    copyTextToClipboard(inputElement.current.value)
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
    <div className='window-format-texts'>
      <textarea
        ref={inputElement}
        onChange={handleChangeInput}
        className='window-section-item-input window-format-texts-input'
        name='format-texts-input'
        id='format-texts-input'
        rows='5'
        autoFocus
      />
      <div className='window-format-buttons-wrapper'>
        <button onClick={handleCopyClick} className='window-format-button button-green button-col-2' id='sentence'>{isCopied ? 'Copied!' : 'Copy'}</button>
        <button onClick={sentenceCase} className='window-format-button' id='sentence'>Format</button>
        <button onClick={allLowerCase} className='window-format-button' id='lower'>lowercase</button>
        <button onClick={allUpperCase} className='window-format-button' id='upper'>Uppercase</button>
        <button onClick={capitalizeEachWord} className='window-format-button' id='capitalized'>Uppercase Format</button>
        <button onClick={toAlternatingCase} className='window-format-button' id='alternating'>AlTeRnAtE FoRmAt</button>
        <button onClick={toHandleText} className='window-format-button' id='inverse'>kebab-case</button>
        <button onClick={toCamelCase} className='window-format-button' id='inverse'>camelCase</button>
        <button onClick={toPascalCase} className='window-format-button' id='inverse'>PascalCase</button>
        <button onClick={toSnakeCase} className='window-format-button' id='inverse'>snake_case</button>
        <button onClick={toTrainCase} className='window-format-button' id='inverse'>Train-Case</button>
        <button onClick={clearText} className='window-format-button button-red button-col-2' id='clear'>Clear</button>
      </div>
    </div>
  )
}

export default DevtoolsFormatTexts
