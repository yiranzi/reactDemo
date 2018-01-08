/**
 * Created by wuchuck on 2017/10/31.
 */
import React from 'react'
import Carousel from './components/Carousel'

class Main extends React.Component {
  render () {
    return (<div>
      <p>123</p>
      <Carousel auto>
        <div style={{backgroundColor: 'tomato', height: '100%'}}>Frame 1</div>
        <div style={{backgroundColor: 'orange', height: '100%'}}>Frame 2</div>
        <div style={{backgroundColor: 'orchid', height: '100%'}}>Frame 3</div>
      </Carousel>
      <p>123</p>
    </div>)
  }
}

export default Main