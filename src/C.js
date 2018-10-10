import React from 'react'

const converter = (f) => {
  return ((f - 32) * 5 / 9)
}

const C = ({ f, feels }) => (
  <h1>{converter(f)}°C ({feels})</h1>
)

export default C
