// Utils ====================================

export async function copyTextToClipboard (text) {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text)
  } else {
    return document.execCommand('copy', true, text)
  }
}

export function cleanText (string) {
  return string.split('\n').map(s => s.trim()).filter(Boolean).join('')
}

export function focusElement (element) {
  document.querySelectorAll(`.${element.className.split(' ').join('.')}`).forEach(stateElement => stateElement.style.zIndex = '888888')
  element.style.zIndex = '999999'
}

export function createElement (tagName, attributes = {}, childrens = []) {
  const element = document.createElement(tagName)

  if (attributes) {
    for (const key in attributes) {
      if (attributes.hasOwnProperty(key)) {
        if (key.startsWith('on') && typeof attributes[key] === 'function') {
          // Si el atributo comienza con 'on' (por ejemplo, 'onClick') y es una función, asigna el evento
          element.addEventListener(key.substring(2).toLowerCase(), attributes[key])
        } else {
          element.setAttribute(key, attributes[key])
        }
      }
    }
  }

  if (childrens && childrens.length) {
    childrens.forEach(child => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child))
      } else {
        element.appendChild(child)
      }
    })
  }

  return element
}

// Funcionality ====================================

export function createTooltip (element) {
  const tooltip = createElement('span', {
    class: 'devtools-tooltip',
    style: cleanText(`
      position: absolute;
      left: calc(100% + 5px);
      top: 2px;
      box-sizing: border-box;
      background-color: white;
      border: 1px solid black;
      border-radius: 3px;
      padding: 3px;
      font-size: 12px;
      color: black;
      white-space: nowrap;
    `)
  })

  element.querySelectorAll('& > .devtools-tooltip')?.forEach(tooltip => tooltip.remove())
  element.appendChild(tooltip)

  const tooltipContent = (text) => {
    tooltip.textContent = text
  }

  return tooltipContent
}
