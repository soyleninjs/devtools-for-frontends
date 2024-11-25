import { useRef, useState } from 'react'
import { copyTextToClipboard } from '../utils/utils'

const ContentFormatTexts = () => {
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
    <div className='dff-format-texts'>
      <textarea
        ref={inputElement}
        onChange={handleChangeInput}
        className='dff-input'
        name='format-texts-input'
        id='format-texts-input'
        rows='5'
        autoFocus
      />
      <div className='dff-format-buttons-wrapper'>
        <button type='button' onClick={handleCopyClick} className='dff-button dff-button-confirm' id='sentence'>{isCopied ? 'Copied!' : 'Copy'}</button>
        <button type='button' onClick={clearText} className='dff-button dff-button-cancel' id='clear'>Clear</button>
        <button type='button' onClick={sentenceCase} className='dff-button dff-button-text' id='sentence'>Format</button>
        <button type='button' onClick={allLowerCase} className='dff-button dff-button-text' id='lower'>lowercase</button>
        <button type='button' onClick={allUpperCase} className='dff-button dff-button-text' id='upper'>Uppercase</button>
        <button type='button' onClick={capitalizeEachWord} className='dff-button dff-button-text' id='capitalized'>Uppercase Format</button>
        <button type='button' onClick={toAlternatingCase} className='dff-button dff-button-text' id='alternating'>AlTeRnAtE FoRmAt</button>
        <button type='button' onClick={toHandleText} className='dff-button dff-button-text' id='inverse'>kebab-case</button>
        <button type='button' onClick={toCamelCase} className='dff-button dff-button-text' id='inverse'>camelCase</button>
        <button type='button' onClick={toPascalCase} className='dff-button dff-button-text' id='inverse'>PascalCase</button>
        <button type='button' onClick={toSnakeCase} className='dff-button dff-button-text' id='inverse'>snake_case</button>
        <button type='button' onClick={toTrainCase} className='dff-button dff-button-text' id='inverse'>Train-Case</button>
      </div>
    </div>
  )
}

export default ContentFormatTexts