// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
const keys = { 37: 1, 38: 1, 39: 1, 40: 1 }

function preventDefault (e) {
  e.preventDefault()
}

function preventDefaultForScrollKeys (e) {
  if (keys[e.keyCode]) {
    preventDefault(e)
    return false
  }
}

// modern Chrome requires { passive: false } when adding event
let supportsPassive = false
try {
  window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true }
  }))
} catch (e) {}

const wheelOpt = supportsPassive ? { passive: false } : false
const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'

// call this to Disable
export function disableScroll () {
  document.addEventListener('DOMMouseScroll', preventDefault, false) // older FF
  document.addEventListener(wheelEvent, preventDefault, wheelOpt) // modern desktop
  document.addEventListener('touchmove', preventDefault, wheelOpt) // mobile
  document.addEventListener('keydown', preventDefaultForScrollKeys, false)
}

// call this to Enable
export function enableScroll () {
  document.removeEventListener('DOMMouseScroll', preventDefault, false)
  document.removeEventListener(wheelEvent, preventDefault, wheelOpt)
  document.removeEventListener('touchmove', preventDefault, wheelOpt)
  document.removeEventListener('keydown', preventDefaultForScrollKeys, false)
}
