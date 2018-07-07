import React from 'react'

const Item = ({ color = 'red', value, height, name }) => (
  <div style={{ width: 60, textAlign: 'center' }}>
    <h3>{name}</h3>
    <div
      style={{
        height: 120,
        display: 'flex',
        flexDirection: 'column',
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: 'lightgray'
      }}
    >
      <div style={{ display: 'flex', flex: 1 }} />
      <div
        style={{ background: 'linear-gradient(#e5b2ca, #7028e4)', height }}
      />
    </div>
    <h3>{value} %</h3>
  </div>
)

const Comparation = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
  >
    <div
      style={{
        width: 500
      }}
    >
      <div>
        <h2 style={{ textAlign: 'center' }}> Инфлација </h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around'
          }}
        >
          <Item value={-2.3} height={'50%'} name="2017" />
          <Item value={-2.2} height={'40%'} name="2018" />
        </div>
      </div>
      <div>
        <h2 style={{ textAlign: 'center' }}> Невработеност </h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around'
          }}
        >
          <Item value={-2.3} height={'50%'} name="2017" />
          <Item value={-2.2} height={'40%'} name="2018" />
        </div>
      </div>
    </div>
  </div>
)

export default Comparation
