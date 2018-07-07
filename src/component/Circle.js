import React from 'react'

const Circle = ({ name, value, radius, top, left, color = 'red' }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: radius * 2,
      width: radius * 2,
      borderRadius: radius,
      top,
      left,
      backgroundColor: color
    }}
  >
    <div>{name}</div>
    <div>{value}</div>
  </div>
)

export default Circle
