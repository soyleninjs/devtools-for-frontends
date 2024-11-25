import { useState, createContext, useEffect } from 'react'
import Modal from '../components/Modal'

export const DevtoolsContext = createContext()
export function DevtoolsProvider ({ children }) {
  const [dffData, setDffData] = useState(JSON.parse(window.localStorage.getItem('dff-data')) || {
    boxes: {
      data: {},
      order: []
    },
    lateralLines: {
      data: {},
      order: []
    },
    settings: {
      blockScrollPage: false,
      startVisible: false,
      showWindowSize: false,
      showWindowScroll: false,
      hideScrollbarPage: false,
      hideButtonToShowDevtools: false,
      wordToShowDevtools: 'dev',
      css: '',
      javascript: ''
    }
  })

  const modalEmptyState = {
    isOpen: false,
    headerText: '',
    contentText: '',
    contentAlign: 'center',
    showPrimaryButton: false,
    showSecondaryButton: false,
    primaryButtonText: 'Confirm',
    secondaryButtonText: 'Cancel',
    onPrimaryClick: () => {},
    onSecondaryClick: () => {}
  }
  const [modalData, setModalData] = useState(modalEmptyState)

  const handleCloseModal = () => {
    setModalData(modalEmptyState)
  }

  useEffect(() => {
    window.localStorage.setItem('dff-data', JSON.stringify(dffData))
  }, [dffData])

  return (
    <DevtoolsContext.Provider value={{
      dffData,
      setDffData,
      setModalData,
      handleCloseModal
    }}
    >
      {children}
      <Modal
        {...modalData}
        onClose={handleCloseModal}
      />
    </DevtoolsContext.Provider>
  )
}
