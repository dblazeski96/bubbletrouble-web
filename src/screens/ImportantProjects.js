import React from 'react'
import dummyData from '../dummyData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import gradient from 'random-gradient'

const Item = ({ name, value, icon, radius, color }) => (
  <div
    style={{
      width: 200,
      display: 'flex',
      flexDirection: 'column'
    }}
  >
    <div
      style={{
        alignSelf: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: radius * 2,
        width: radius * 2,
        borderRadius: radius,
        background: 'radial-gradient(#330867, #30cfd0)',
        flexDirection: 'column'
      }}
    >
      <div>
        <FontAwesomeIcon style={{ fontSize: 48, color: 'white' }} icon={icon} />
      </div>
      <div
        style={{
          paddingTop: 10,
          fontSize: 24,
          color: 'white',
          alignSelf: 'center'
        }}
      >
        {value} m
      </div>
    </div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      <div>{name}</div>
    </div>
  </div>
)

const ImportantProjects = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    }}
  >
    <div style={{ textAlign: 'center', fontSize: 24, padding: 25 }}>
      Најбитни проекти 2018
    </div>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '160px 160px 160px',
        gridGap: 78
      }}
    >
      {dummyData.importantProjects.map(e => <Item {...e} radius={100} />)}
    </div>
  </div>
)

export default ImportantProjects
