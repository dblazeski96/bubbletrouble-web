import React, { Component } from 'react';
import { Line } from 'react-lineto'
import './App.css';


import dummyData from './dummyData'
import Circle from './component/Circle'
import CircleLabel from './component/CircleLabel'

const RADIUS = 200
const MAIN_TOP = window.innerHeight/1.8 - RADIUS
const MAIN_LEFT = window.innerWidth/2 - RADIUS
const ZERO_LEVEL_COLOR = 'radial-gradient(#b3b3ff, #0000cc )'
const FIRST_LEVEL_COLOR =  'linear-gradient(to right bottom, #654ea3, #eaafc8)'
const SECOUND_LEVEL_COLOR = 'linear-gradient(to right bottom, #005AA7, #FFFDE4)'
const ZERO_LEVEL_DELAY = 100
const FIRST_LEVEL_DELAY = 400
const SECOUND_LEVEL_DELAY = 600

class App extends Component {
  render() {
    return (
  
      <div>
        <Line 
          x0={MAIN_LEFT + 30 + 50} 
          y0={MAIN_TOP - 180 + 58} 
          x1={MAIN_LEFT + 60 + 50} 
          y1={MAIN_TOP - 100 + 10} 
          borderColor='red' 
          borderStyle='dashed'
          borderWidth='2px'
        />
        <Line 
          x0={MAIN_LEFT - 10 + 40} 
          y0={MAIN_TOP - 120 + 35} 
          x1={MAIN_LEFT + 60 + 15} 
          y1={MAIN_TOP - 100 + 40} 
          borderColor='red' 
          borderStyle='dashed'
          borderWidth='2px'
        />
        <Line 
          x0={MAIN_LEFT - 20 + 40} 
          y0={MAIN_TOP - 50 + 20} 
          x1={MAIN_LEFT + 60 + 0} 
          y1={MAIN_TOP - 100 + 72} 
          borderColor='red' 
          borderStyle='dashed'
          borderWidth='2px' 
        />
        <Line 
          x0={MAIN_LEFT - 10 + 40} 
          y0={MAIN_TOP + 15 + 15} 
          x1={MAIN_LEFT + 60 + 0} 
          y1={MAIN_TOP - 100 + 115} 
          borderColor='red' 
          borderStyle='dashed'
          borderWidth='2px' 
        />

        <Circle
          name={dummyData.income.name} 
          value={dummyData.income.value} 
          radius={RADIUS} 
          top={MAIN_TOP}
          left={MAIN_LEFT} 
          color={ZERO_LEVEL_COLOR}
          animationDelay={ZERO_LEVEL_DELAY}
        />
        {/* First level left subs elements
        Empty */}
        <Circle
          name={dummyData.incomeData[0].name} 
          value={dummyData.incomeData[0].value} 
          radius={RADIUS * (0.005  * dummyData.incomeData[0].value)} 
          top={MAIN_TOP + 30} 
          left={MAIN_LEFT + 300} 
          color={FIRST_LEVEL_COLOR}
          animationDelay={FIRST_LEVEL_DELAY}
        />
        <Circle
          name={dummyData.incomeData[1].name} 
          value={dummyData.incomeData[1].value} 
          radius={RADIUS * (0.008  * dummyData.incomeData[1].value)} 
          top={MAIN_TOP - 100} 
          left={MAIN_LEFT + 60} 
          color={FIRST_LEVEL_COLOR}
          animationDelay={FIRST_LEVEL_DELAY}
        />
        <Circle
          name={dummyData.incomeData[2].name} 
          value={dummyData.incomeData[2].value} 
          radius={RADIUS * (0.02    * dummyData.incomeData[2].value)} 
          top={MAIN_TOP + 110} 
          left={MAIN_LEFT - 90} 
          animationDelay={FIRST_LEVEL_DELAY}
          color={FIRST_LEVEL_COLOR}
        />
        <Circle 
          name={dummyData.incomeData[3].name} 
          value={dummyData.incomeData[3].value} 
          radius={RADIUS * (0.02  * dummyData.incomeData[3].value)} 
          top={MAIN_TOP + 310} 
          left={MAIN_LEFT + 20} 
          color={FIRST_LEVEL_COLOR}
          animationDelay={FIRST_LEVEL_DELAY}
        />
        <Circle 
          name={dummyData.incomeData[4].name} 
          value={dummyData.incomeData[4].value} 
          radius={RADIUS * (0.04  * dummyData.incomeData[4].value)} 
          top={MAIN_TOP + 340} 
          left={MAIN_LEFT + 250} 
          color={FIRST_LEVEL_COLOR}
          animationDelay={FIRST_LEVEL_DELAY}
        />
        {/* Second level left subs elements
        First */}
        <CircleLabel value='extra1' top={MAIN_TOP - 180} left={MAIN_LEFT + 30}  />
       <Circle
          value={16} 
          radius={RADIUS * (0.01  * 16)} 
          top={MAIN_TOP - 180} 
          left={MAIN_LEFT + 30} 
          color={SECOUND_LEVEL_COLOR} animationDelay={SECOUND_LEVEL_DELAY}
          // renderName = {true}
        />
        <Circle 
          name='extra2'
          value={12} 
          radius={RADIUS * (0.01  * 12)} 
          top={MAIN_TOP - 120} 
          left={MAIN_LEFT - 10} 
          color={SECOUND_LEVEL_COLOR} animationDelay={SECOUND_LEVEL_DELAY}
        />
        <Circle 
          name='extra3'
          value={10} 
          radius={RADIUS * (0.01  * 10)} 
          top={MAIN_TOP - 50} 
          left={MAIN_LEFT - 20} 
          color={SECOUND_LEVEL_COLOR} animationDelay={SECOUND_LEVEL_DELAY}
        />
        <Circle 
          name='extra4'
          value={10} 
          radius={RADIUS * (0.01  * 10)} 
          top={MAIN_TOP + 15} 
          left={MAIN_LEFT - 10} 
          color={SECOUND_LEVEL_COLOR} animationDelay={SECOUND_LEVEL_DELAY}
        />
                {/* Second */}
      </div>

    );
  }
}


export default App;
