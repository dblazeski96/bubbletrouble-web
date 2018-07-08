import React, {Component} from 'react'
import dummyData from '../dummyData'
import BarDetails from './BarDetails'

const MAX = Math.max(dummyData.income.value, dummyData.expenses.value)

const Item = ({ name, value, handleClick }) => (
  <div style={{ padding: 16 }} 
    // onMouseEnter={}
    onClick={handleClick} >
    <h3 style={{ textAlign: 'center', color: 'rgb(229, 1, 126)', height: 70, fontSize: 20}}>{name}</h3>
    <h6 style={{ justifyContent: 'center', display: 'flex', color: 'white', fontSize: 26  }}>
      {value}
      {'  '}
      <div
        style={{
          display: 'inline',
          color: 'lightgray',
          fontStyle: 'italic',
          paddingLeft: 10,
          fontSize: 16
        }}
      >
        {' '}
        милиони
      </div>
    </h6>
  </div>
)

const Items = ({
  data,
  color,
  textColor,
  onClick
}) => (
  <div
    style={{
      display: 'flex',
      backgroundColor: color,
      flexDirection: 'row',
      width: window.innerWidth,
      justifyContent: 'center'
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
      {data.map(e => <Item name={e.name} value={e.value} handleClick={onClick} />)}
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

class Segment extends Component {
  state = {
    showDetails: false
  }

  render() {
    return(
      this.state.showDetails ? <BarDetails/> : <Items {...this.props} onClick={() => {this.setState({showDetails:true})}}/>
    )
  }
}

export default Segment