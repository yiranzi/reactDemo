/**
 * Created by wuchuck on 2017/10/31.
 */
import React from 'react'

class Main extends React.Component {
  /**
   * 这个demo说明了
   * children里面的内容是立刻执行的。并不是说render了children才会执行。
   * 判断和执行都是
   * @returns {XML}
   */
  render () {
    let RenderFather = renderFather
    console.log(123)
    let a = undefined
    return (<div>
      {a && renderA()}
      {renderB()}
      {false && this.myLog()}
      <RenderFather>
        {console.log('aaaaaa')}
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </RenderFather>
    </div>)
  }


  myLog () {
    console.log('myLog')
    return(<div>myLog</div>)
  }

}

const renderFather = function () {
  if (true) {
    return (<div>true</div>)
  } else {
    return (this.props.children)
  }
}

const renderB = function () {
  console.log('renderB')
  if (true) {
    return (renderC())
  } else {
    return (renderD())
  }

}

const renderA = function () {
  console.log('renderA')
  return(<div>123</div>)

}
const renderC = function () {
  console.log('renderC')
  return(<div>123</div>)

}
const renderD = function () {
  console.log('renderD')
  return(<div>123</div>)

}

export default Main