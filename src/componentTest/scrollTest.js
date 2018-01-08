/**
 * Created by wuchuck on 2017/10/31.
 */
import React from 'react'
import logo from './logo.svg';

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      type: 0
    }
  }

  renderList () {

  }

  test0 () {
    let arr = []
    for (let i = 0; i < 100; i++) {
      arr.push(<p key={i}>{i}</p>)
    }
    return (<div className='scroll'>
      {arr}
      <style>{`
        .scroll {
          height: 300px;
          overflow: scroll;
        }
      `}</style>
    </div>)
  }

  test1 () {
    let arr = []
    for (let i = 0; i < 100; i++) {
      arr.push(<div key={i}>
        <h1>react，听我号令</h1>
        <img src={logo} />
      </div>)
    }
    return (<div className='scroll'>
      {arr}
      <style>{`
        .scroll {
          height: 300px;
          overflow: scroll;
        }
      `}</style>
    </div>)
  }

  test2 () {
    return (<div className='scroll'>
      {this.renderList()}
      <style>{`
        .scroll {
          height: 300px;
          overflow: scroll;
        }
      `}</style>
    </div>)
  }

  imgWithP () {
    console.log('滚屏缓慢的原因究竟是什么呢')
    if (this.state.type === 0) {
      return (this.test0())
    }
    if (this.state.type === 1) {
      return (this.test1())
    }
    if (this.state.type === 2) {
      return (this.test2())
    }

  }

  changeMode () {
    console.log('change')
    if(this.state.type === 0) {
      this.setState({
        type: 1
      })
    } else if(this.state.type === 1) {
      this.setState({
        type: 2
      })
    } else if(this.state.type === 2) {
      this.setState({
        type: 0
      })
    }
  }

  render () {
    return (<div>
      <h1>{this.state.type}</h1>
      <div onClick={() => {this.changeMode()}}>changeMode</div>
      {this.imgWithP()}
    </div>)
  }

}

export default Main