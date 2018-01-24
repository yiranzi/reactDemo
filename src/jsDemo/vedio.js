import React from 'react'
import vedio from './final.mp4';
import { Router, Route, Link } from 'react-router'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      veido: undefined
    }
    let a = new Audio(vedio)
    this.setState({
      veido: a
    })
    a.play()
  }
  origin () {
    console.log(vedio)
    return (
      <video style={{width: '100%'}} controls src={vedio} />
    )
  }
  render () {
    return (
      <div>
        <li><Link to="/about">About</Link></li>
        {/*{this.origin()}*/}
        123
      </div>
    )
  }
}