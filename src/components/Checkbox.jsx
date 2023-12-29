import { useId } from 'react'

const Checkbox = ({ label, name, ...args }) => {
  const checkboxID = useId()

  return (
    <div className='form-checkbox-wrapper'>
      <label className='form-checkbox-label' htmlFor={checkboxID}>{label}</label>

      <div className='form-checkbox'>
        <input
          id={checkboxID}
          name={name}
          type='checkbox'
          className='form-checkbox-input'
          {...args}
        />
        <svg className='form-group-check' viewBox='0 0 35.6 35.6'>
          <circle className='background' cx='17.8' cy='17.8' r='17.8' />
          <circle className='stroke' cx='17.8' cy='17.8' r='14.37' />
          <polyline className='check' points='11.78 18.12 15.55 22.23 25.17 12.87' />
        </svg>
      </div>

    </div>
  )
}

export default Checkbox
