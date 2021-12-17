import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

export default function SelectCountry() {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }

  return(
      <>
      <div  style={{width: '100%'}}>
      <Select placeholder="Select Country" options={options} value={value} onChange={changeHandler} />
      </div>
      </>
  )
}
{/* <Select options={options} value={value} onChange={changeHandler} /> */}
