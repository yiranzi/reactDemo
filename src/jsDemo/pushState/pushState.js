import React from 'react'

/**
 *
 * 难怪说和hash很像。的确行为很像。的确可以用hash来做单页。好神奇。
 */
export default class extends React.Component {
  nameArr = ['a','b','c','d']
  constructor (props) {
    super(props)
    this.state = {
      currentAjaxValue: undefined
    }
  }

  componentWillMount = async () => {
    this.enterValue()
  }

  componentDidMount () {
    window.onpopstate = () => {
      this.enterValue()
    }
  }

  enterValue () {
    console.log('enterValue')
    let parmValue = window.location.href.split('?')[1]
    if (!parmValue) {
      parmValue = 0
      window.history.replaceState(null, `title${parmValue}`, `?${parmValue}`)
    }
    console.log('发送请求' + this.nameArr[parmValue])
    this.setState({
      currentAjaxValue: this.nameArr[parmValue]
    })
  }

  pushState (index) {
    console.log('pushState')
    window.history.pushState(null, `title${index}`, `?${index}`)
    this.enterValue()
  }

  render () {
    const liArr = this.nameArr.map((ele, index) => {
      return <li onClick={ (obj) => { this.pushState(index) }} key={index}>
        {ele}
      </li>
    })
    return (
      <div>
        {liArr}
        <div>{this.state.currentAjaxValue}</div>
      </div>
    )
  }
}