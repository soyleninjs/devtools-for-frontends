import { useState } from 'react'

const ContentImages = () => {
  const [reload, setReload] = useState(false)
  
  const randomNumber = (min, max) => {
    return ~~(Math.random() * (max - min + 1)) + min
  }

  const width = randomNumber(600, 1200)
  const height = randomNumber(600, 1200)
  const url = `https://picsum.photos/${width}/${height}`

  const handleChangePhoto = () => {
    setReload(prevState => !prevState)
  }

  const handleCopyUrl = event => {
    const button = event.currentTarget
    navigator.clipboard.writeText(url)

    button.textContent = 'Copied'
    setTimeout(() => {
      button.textContent = 'Copy'
    }, 1500)
  }

  return (
    <div className='dff-images'>
      <div className="dff-images-header">
        <input className='dff-input' type="text" readOnly value={url} />
        <button type='button' className='dff-button dff-button-info' onClick={handleCopyUrl}>Copy</button>
        <button type='button' className='dff-button dff-button-confirm' onClick={handleChangePhoto}>Change</button>
      </div>
      <div className="dff-images-wrapper">
        <div className="dff-image-wrapper">
          <img className='dff-image' src={`${url}?random=0`} />
        </div>
        <div className="dff-image-wrapper">
          <img className='dff-image' src={`${url}?random=1`} />
        </div>
      </div>
    </div>
  )
}

export default ContentImages
