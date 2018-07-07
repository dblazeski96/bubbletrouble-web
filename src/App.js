import React, { Component } from 'react'
import './App.css'
import ImportantProjects from './screens/ImportantProjects'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
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
import Plan from './component/Plan'
import Hints from './screens/Hints'
import Comparation from './screens/Comparation'

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
  render() {
    return (
      <div>
        <Comparation />
        <Hints />
        <ImportantProjects />

        <Plan />
      </div>
    )
  }
}

export default App
