import React from 'react'

const styles = {
  barContainer: {
    margin: 30,
    height: 30,
    display: 'flex',
    flexDirection: 'row'
  },
  barLabel: {
    marginRight: 16,
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    color: 'white',
    width: 150,
  },
  barGraph: {
    height: 30,
    display: 'flex',
    flexDirection: 'row'
  },
}

const BarHorizontal = ({name, color, value}) => (
  <div style={styles.barContainer}>
    <div style={styles.barLabel}>
      <div style={{fontWeight: 'bold'}}>{name}</div>
    </div>
    <div style={styles.barGraph}>
      <div
        style={{
          height: 30,
          width: value,
          backgroundColor: color,
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center'
        }}
      > {value}<div style={{color: 'lightgrey', fontWeight: 'normal', fontStyle: 'italic'}}>милиони</div> </div>
      
    </div>
  </div>
)


export default BarHorizontal