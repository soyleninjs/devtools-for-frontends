import Icon from './Icon'

const Modal = ({
  isOpen,
  onClose,
  headerText,
  contentText,
  contentAlign,
  showPrimaryButton,
  showSecondaryButton,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick
}) => {
  if (!isOpen) return null

  return (
    <div className="dff-modal">

      <div className="dff-modal-mask" onClick={onClose}></div>

      <div className="dff-window">
        {headerText && headerText !== '' && (
          <div className="dff-window-header">
            <h2 className="dff-window-header-title">{headerText}</h2>
            <button className="dff-button dff-button-icon dff-window-header-button" onClick={onClose}>
              <Icon icon='close' />
            </button>
          </div>
        )}

        <div className={`dff-window-body dff-text-${contentAlign}`}>
          {contentText}
        </div>

        <div className="dff-window-footer center">
          {showPrimaryButton && (
            <button className="dff-button dff-button-confirm" onClick={onPrimaryClick}>
              {primaryButtonText}
            </button>
          )}

          {showSecondaryButton && (
            <button className="dff-button dff-button-cancel" onClick={onSecondaryClick}>
              {secondaryButtonText}
            </button>
          )}
        </div>
      </div>

    </div>
  )
}

export default Modal
