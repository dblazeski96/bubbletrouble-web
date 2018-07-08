import React, { Component } from 'react'
import { Line } from 'react-lineto'
import './App.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Plan from './component/Plan'
import Hints from './screens/Hints'
import Comparation from './screens/Comparation'
import ImportantProjects from './screens/ImportantProjects'
import {
  faCheckSquare,
  faCoffee,
  faHospital,
  faBroadcastTower,
  faHandHoldingUsd,
  faBuilding,
  faBus,
  faLongArrowAltUp,
  faHandsHelping,
  faBriefcase
} from '@fortawesome/free-solid-svg-icons'
import dummyData from './dummyData'
import Circle from './component/Circle'
import CircleLabel from './component/CircleLabel'
import Landing from './screens/Landing'
import LandingSegment from './screens/LandingSegment'
import colors from './colors'

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

const MAX = Math.max(dummyData.income.value, dummyData.expenses.value)

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

library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faHospital,
  faBroadcastTower,
  faHandHoldingUsd,
  faBuilding,
  faBus,
  faLongArrowAltUp,
  faHandsHelping,
  faBriefcase
)

class App extends Component {
  state = {
    selectedIncome: null
  }

  render() {
    const { selectedIncome } = this.state
    return (
      <div>
        <div style={{ backgroundColor: 'white' }}>
          {selectedIncome === null ? (
            <Landing
              onIncome={() => {
                this.setState({ selectedIncome: true })
              }}
              onExpenses={() => {
                this.setState({ selectedIncome: false })
              }}
            />
          ) : selectedIncome ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: 'rgb(17, 41, 74)'
              }}
            >
              <div
                style={{
                  padding: 16,
                  flex: 1,
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'flex-end'
                }}
              >
                <Bar color="rgb(0, 174, 241)" value={dummyData.income.value} />
                <div style={{ textAlign: 'right' }}>
                  <h2 style={{ color: 'white' }}>
                    Приходи
                    <br />
                  </h2>
                  <h1 style={{ color: 'rgb(0, 174, 241' }}>
                    {dummyData.income.value}{' '}
                  </h1>
                  <p style={{ color: 'lightgray', fontStyle: 'italic' }}>
                    {' '}
                    милиони{' '}
                  </p>
                </div>
              </div>,
              <LandingSegment
                color={selectedIncome ? '#081323' : 'rgb(36, 11, 58)'}
                data={
                  selectedIncome ? dummyData.incomeData : dummyData.expensesData
                }
              />
            </div>
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: colors.primary.expenses
              }}
            >
              <LandingSegment />,
              <div
                style={{
                  padding: 16,
                  flex: 1,
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  backgroundColor: colors.primary.expensesDark,
                  color: 'rgb(0, 174, 241)'
                }}
                // onClick={onExpenses}
              >
                <div style={{ textAlign: 'left' }}>
                  <h2 style={{ color: 'white' }}>
                    Расходи
                    <br />
                  </h2>
                  <h1 style={{ color: 'rgb(229, 1, 126)' }}>
                    {dummyData.expenses.value}{' '}
                  </h1>
                  <p style={{ color: 'lightgray', fontStyle: 'italic' }}>
                    {' '}
                    милиони{' '}
                  </p>
                </div>
                <Bar
                  color="rgb(229, 1, 126)"
                  value={dummyData.expenses.value}
                />
              </div>
            </div>
          )}
          <Comparation />
          <Hints />
          <ImportantProjects />
        </div>
      </div>
    )
  }
}

export default App
