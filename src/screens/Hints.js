import React from 'react'
const Hint = ({ name, description }) => (
  <div
    style={{
      width: 250,
      borderStyle: 'solid',
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 4,
      padding: 16,
      margin: 8
    }}
  >
    <h3 style={{ fontWeight: 'bold' }}>{name}</h3>
    <p style={{ fontStyle: 'italic', color: 'gray' }}>{description}</p>
  </div>
)

const hintData = [
  {
    name: 'Што е Бруто домашен производ?',
    description:
      'Бруто домашниот производ покажува раст на вкупното производство на економијата.'
  },
  {
    name: 'Што е Инфлација?',
    description:
      'Инфлација преставува раст на цените на производите и услугите во економијата.'
  },
  {
    name: 'Што е Дефицит?',
    description:
      'Дефицит на тековна сметка преставува разлика меѓу стоките, услугите и доходот што се увезува и извезува.'
  }
]

const Hints = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderStyle: 'dashed',
      borderWidth: 0,
      borderBottomWidth: 2,
      borderColor: 'gray',
      padding: 16
    }}
  >
    <h3 style={{ fontWeight: 'bold' }}>Научи повеќе</h3>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      }}
    >
      {hintData.map(e => <Hint {...e} />)}
    </div>
  </div>
)
export default Hints
