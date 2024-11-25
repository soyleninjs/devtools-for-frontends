import { useContext } from 'react'
import { DevtoolsContext } from '../context/Devtools'

function useDevtoolsModal () {
  const { setModalData, handleCloseModal } = useContext(DevtoolsContext)

  const openModal = (options) => {
    setModalData(prevState => ({
      ...prevState,
      isOpen: true,
      ...options
    }))
  }

  const closeModal = () => {
    handleCloseModal()
  }

  return { openModal, closeModal }
}

export default useDevtoolsModal
