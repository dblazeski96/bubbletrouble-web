import React, {Component} from 'react'
import posed from 'react-pose'


const AnimatedView = posed.div({
  unMounted: {scale:0, duration: 1000000},
  mounted: {scale:1, duration: 1000000 },
})


class Circle extends Component
{
  state = { mounted: false };
  
  componentDidMount() {
    const {animationDelay = 0} = this.props
    setTimeout( () => {
      this.setState({mounted: true}) }, animationDelay
    )
  }

  render()  {
   const { name, value, radius, top, left, color = 'red', renderName = true} = this.props;
   const {mounted} =this.state
return (
  <AnimatedView pose={mounted ? 'mounted' : 'unMounted'}>
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      height: radius * 2,
      width: radius * 2,
      borderRadius: radius,
      top,
      left,
      background: color,
      color: 'white',
      fontWeight: 'bold',
    }}
  >
    {
      renderName ? <div><div>{name}</div><div>{value}</div></div>: <div>{value}</div>
    }
  </div>
  </AnimatedView>
)}}

export default Circle
