import { useEffect } from 'react'

function useTypeWord (word, callback) {
  useEffect(() => {
    if (word === '') return
    let countKeys = 0
    const wordLength = word.length

    const checkWord = (event) => {
      if (event.key === word.charAt(countKeys)) {
        countKeys++
      } else {
        countKeys = 0
      }

      if (countKeys >= wordLength) {
        callback()
        countKeys = 0
      }
    }

    document.addEventListener('keyup', checkWord)

    return () => {
      document.removeEventListener('keyup', checkWord)
    }
  }, [word, callback])
}

export default useTypeWord
