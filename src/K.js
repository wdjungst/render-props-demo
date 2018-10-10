import React from 'react'

const converter = (f) => {
  return ((f - 32) * 5 / 9 + 273.15)
}

const K = ({ f, feels }) => (
  <h1>{converter(f)}°K ({feels})</h1>
)

export default K

