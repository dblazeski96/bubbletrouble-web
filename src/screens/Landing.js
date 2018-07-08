import React from 'react'
import dummyData from '../dummyData'

const MAX = Math.max(dummyData.income.value, dummyData.expenses.value)

const Landing = ({ onIncome, onExpenses }) => (
  <div
    style={{
      backgroundColor: 'white',
      display: 'flex',
      height: window.innerHeight
    }}
  >
    <div
      style={{
        padding: 16,
        flex: 1,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: 'rgb(17, 41, 74)'
      }}
      onClick={onIncome}
    >
      <Bar color="rgb(0, 174, 241)" value={dummyData.income.value} />
      <div style={{ textAlign: 'right' }}>
        <h2 style={{ color: 'white' }}>
          Приходи
          <br />
        </h2>
        <h1 style={{ color: 'rgb(0, 174, 241' }}>{dummyData.income.value} </h1>
        <p style={{ color: 'lightgray', fontStyle: 'italic' }}> милиони </p>
      </div>
    </div>
    <div
      style={{
        padding: 16,
        flex: 1,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'flex-start',
        backgroundColor: 'rgb(36, 11, 58)',
        color: 'rgb(0, 174, 241)'
      }}
      onClick={onExpenses}
    >
      <div style={{ textAlign: 'left' }}>
        <h2 style={{ color: 'white' }}>
          Расходи
          <br />
        </h2>
        <h1 style={{ color: 'rgb(229, 1, 126)' }}>
          {dummyData.expenses.value}{' '}
        </h1>
        <p style={{ color: 'lightgray', fontStyle: 'italic' }}> милиони </p>
      </div>
      <Bar color="rgb(229, 1, 126)" value={dummyData.expenses.value} />
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

export default Landing
