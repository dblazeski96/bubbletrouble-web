import React, {Component} from 'react'
import posed from 'react-pose'

const AnimatedView1 = posed.div({
  unMounted: {scale:0, duration: 1000000},
  mounted: {scale:1, duration: 1000000 },
})


class CircleLabel extends Component
{
  state = { mounted: false };
  
  componentDidMount() {
    const {animationDelay = 0} = this.props
    setTimeout( () => {
      this.setState({mounted: true}) }, animationDelay
    )
  }

  render()  {
   const { value, top, left } = this.props;
   const {mounted} =this.state
return (
  <AnimatedView1 pose={mounted ? 'mounted' : 'unMounted'}>
  <div
    style={{
      display: 'flex',
      position: 'absolute',
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      top,
      left,
      color: 'white',
      fontWeight: 'bold',
    }}
  >
    <div>{value}</div>
  </div>
  </AnimatedView1>
)}}

export default CircleLabel
