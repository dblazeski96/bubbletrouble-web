import React from 'react'

import BarHorizontal from '../component/BarHorizontal'
import colors from '../colors'

const styles = {
  BarDetails: {
    alignItems: 'align-start',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colors.primary.incomeDark,
    width: window.innerWidth
  }
}

const BarDetails = ({}) => (
  <div style={styles.BarDetails}>
    <BarHorizontal name='Данок од добивка' color='red' value={600} />
    <BarHorizontal name='ДДВ' color='red' value={500} />
    <BarHorizontal name='Акцизи' color='red' value={430} />
    <BarHorizontal name='Увозни давачки' color='red' value={820} />
  </div>
)


export default BarDetails