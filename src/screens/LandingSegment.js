import React from 'react'
import dummyData from '../dummyData'

const MAX = Math.max(dummyData.income.value, dummyData.expenses.value)

const Item = ({ name, value }) => (
  <div style={{ padding: 16 }}>
    <h3 style={{ textAlign: 'center', color: 'rgb(229, 1, 126)' }}>{name}</h3>
    <h6 style={{ justifyContent: 'center', display: 'flex', color: 'white' }}>
      {value}
      {'  '}
      <div
        style={{
          display: 'inline',
          color: 'lightgray',
          fontStyle: 'italic',
          paddingLeft: 10
        }}
      >
        {' '}
        милиони
      </div>
    </h6>
  </div>
)

const LandingSegment = ({
  data = [
    { name: 'Пензии и социјално', value: 75 },
    { name: 'Економски Развој', value: 43 },
    { name: 'Здраство', value: 32 },
    {
      name: 'Образование, наука и спорт',
      value: 26
    },
    {
      name: 'Јавен ред',
      value: 12
    },
    { name: 'Градежништво и транспорт', value: 10 },
    { name: 'Земјоделство', value: 10 },
    { name: 'Одбрана', value: 7 },
    {
      name: 'Надворешни работи',
      value: 5
    },
    {
      name: 'Култура',
      value: 4
    },
    {
      name: 'Регионален развој',
      value: 2
    },
    { name: 'Судство', value: 2 }
  ],
  color = 'rgb(17, 41, 74)',
  textColor
}) => (
  <div
    style={{
      display: 'flex',
      backgroundColor: color,
      flexDirection: 'row'
    }}
  >
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '160px 160px 160px 160px',
        gridGap: 16,
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      {data.map(e => <Item name={e.name} value={e.value} />)}
    </div>
  </div>
)

const Bar = ({ color, value }) => (
  <div style={styles.barContainer}>
    <div style={styles.barTop} />
    <div
      style={{
        height: (value / MAX) * 320,
        width: 30,
        backgroundColor: color
      }}
    />
  </div>
)

const styles = {
  barContainer: {
    margin: 16,
    height: 320,
    display: 'flex',
    flexDirection: 'column'
  },
  barTop: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
    opacity: 0.2
  }
}

export default LandingSegment
