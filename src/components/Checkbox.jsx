import { useId } from 'react'

const Checkbox = ({ label, name, ...args }) => {
  const checkboxID = useId()

  return (
    <div className='dff-checkbox-wrapper'>
      <label className='dff-checkbox-label' htmlFor={checkboxID}>{label}</label>

      <div className='dff-checkbox'>
        <input
          id={checkboxID}
          name={name}
          type='checkbox'
          className='dff-checkbox-input'
          {...args}
        />
        <svg className='dff-group-check' viewBox='0 0 35.6 35.6'>
          <circle className='background' cx='17.8' cy='17.8' r='17.8' />
          <circle className='stroke' cx='17.8' cy='17.8' r='14.37' />
          <polyline className='check' points='11.78 18.12 15.55 22.23 25.17 12.87' />
        </svg>
      </div>

    </div>
  )
}

export default Checkbox
