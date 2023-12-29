chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'resize') {
    chrome.windows.getCurrent({}, function (window) {
      chrome.windows.update(window.id, { width: message.data.width, height: message.data.height })
    })
  }

  if (message.type === 'configResizes') {
    chrome.storage.local.set({ resizeOptions: message.data })
  }

  if (message.type === 'getResizes') {
    chrome.storage.local.get('resizeOptions').then(({ resizeOptions }) => {
      sendResponse(resizeOptions)
    })
    return true
  }
})
