import React from 'react'
import ModalboxControlled from './modalboxControlled'

export default class extends React.Component {
  origin = [
    {
      id: 0,
      info: [
        {
          date: '1',
          finish: true
        },
        {
          date: '2',
          finish: true
        },
        {
          date: '3',
          finish: null
        }
      ]
    },
    {
      id: 1,
      info: [
        {
          date: '1',
          finish: true
        },
        {
          date: '2',
          finish: true
        },
        {
          date: '3',
          finish: null
        }
      ]
    },
    {
      id: 2,
      info: [
        {
          date: '1',
          finish: true
        },
        {
          date: '2',
          finish: true
        },
        {
          date: '3',
          finish: null
        }
      ]
    },


  ]
  constructor (props) {
    super(props)
    this.state = {
      currenStorageIndex: undefined,
      miletoneNameArray: undefined,
      dateFinishArray: undefined,
      miletoneNameInputValue: undefined,
      currentDate: undefined,
      currentClickIndex: undefined,
      popShow: false
    }
  }

  componentWillMount = async ()=> {
    // 1 设置最新的存储空间
    let lastIndex = this.initStorage()
    let lastDate = this.origin.length
    await this.setState({
      currenStorageIndex: lastIndex,
      currentDate: lastDate
    })
    // 2 取出全部数组数据
    this.getArrayFromStorage('miletoneName')
  }

  initStorage () {
    let lastIndex = localStorage.getItem('lastIndex')
    let result
    if (lastIndex) {
      result = lastIndex
    } else {
      localStorage.setItem('lastIndex', 0)
      result = localStorage.getItem('lastIndex')
    }
    return  parseInt(result)
  }

  // 从指定的存储中读取
  getArrayFromStorage (keyName) {
    console.log('getget')
    let max = this.state.currenStorageIndex
    let buffer
    let array = []
    for (let i = 0; i < max; i++) {
      buffer = localStorage.getItem(`${keyName}_${i}`)
      array.push(buffer)
    }
    let obj = {}
    obj[keyName + 'Array'] = array
    console.log(obj)
    this.setState(obj)
  }

  renderDate () {
    return (
      <div>
        <h1>今天是第{this.state.currentDate}天</h1>
        <style jsx>{`
          h1 {
            text-align: center;
          }
        `}</style>
      </div>
    )
  }


  // 存入指定的存储中
  // 更新对应的state
  // 名称 数值
  finishEnterLine (keyName) {
    let inputValue = this.state[keyName + 'InputValue']
    if (!inputValue) {
      alert('输入有效值')
      return
    }
    let array = this.state[keyName + 'Array']
    let {currenStorageIndex} = this.state
    // 保存当前词条
    localStorage.setItem(`${keyName}_${currenStorageIndex}`, inputValue)
    array.push(inputValue)
    let obj = {}
    obj[keyName + 'Array'] = array
    obj[keyName + 'InputValue'] = ''
    this.setState(obj)
  }


  handleChange (event) {
    this.setState({
      miletoneNameInputValue: event.target.value
    })
  }

  renderEnterDiv () {
    return (
      <div>
        <h3>新建任务</h3>
        {/*<p>你现在正在往{this.state.currenStorageIndex}存储区域输入文字</p>*/}
        <input placeholder={`点击这里输入你的第${this.state.currenStorageIndex}个里程碑吧`}
               style={{width: '100%'}}
               value={this.state.miletoneNameInputValue}
               onChange={(event) => {this.handleChange(event)}}/>
        <span className={'enter-button'} onClick={() => {this.clickHandler('miletoneName')}}>确认输入</span>
        <style jsx>{`
        input {
          margin: 10px;
        }
          .enter-button {
            background-color: yellow;
            border: 1px solid black;
          }
        `}</style>
      </div>
    )
  }

  clickHandler (key) {
    this.finishEnterLine(key)
    // 更新编号
    let {currenStorageIndex} = this.state
    let nextIndex = currenStorageIndex + 1
    this.setState({
      currenStorageIndex: nextIndex
    })
    localStorage.setItem('lastIndex', nextIndex)
  }




  // 从指定的存储中读取
  getArrayFromStorage (keyName) {
    console.log('getget')
    let max = this.state.currenStorageIndex
    let buffer
    let array = []
    for (let i = 0; i < max; i++) {
      buffer = localStorage.getItem(`${keyName}_${i}`)
      array.push(buffer)
    }
    let obj = {}
    obj[keyName + 'Array'] = array
    console.log(obj)
    this.setState(obj)
  }

  renderViewDiv () {
    let {miletoneNameArray} = this.state
    let list
    if (miletoneNameArray && miletoneNameArray.length > 0) {
      list = miletoneNameArray.map((ele, index) => {
        return (
          <div className={'out-div'}>
            <li style={{display: 'flex'}} className={'info-div'} key={index}>
              <span className={'index'}>里程碑{index}</span>
              <p>{ele}</p>
            </li>
            {this.renderProcessPart(index)}
            <style jsx>{`
              .out-div {
                  display: flex;
                  justify-contet: center;
                  align-items: center;
                  flex-wrap: wrap;
                  background-color: red;
                  border: 1px solid black;
                  margin: 5px;
              }
              .info-div {
                  display: flex;
                  justify-contet: center;
                  align-items: center;
                  width: 100%;
              }
              .index {
                  margin-right: 10px;
              }
            `}</style>
          </div>

        )
      })
    }
    return (
      <div>
        <h3>这是所有的里程碑</h3>
        <ul>
          {list ? list : '空'}
        </ul>
        <style jsx>{`
          ul {
            padding: 0px;
          }
        `}</style>
      </div>
    )
  }

  renderProcessPart (index) {
    console.log('renderProcessPart')
    console.log(this.origin)
    let finish = 0
    let unFinish = 0
    let origin = this.origin[index].info
    origin.map((day, index) => {
      if(day.finish) {
        finish++
      } else if (day.finish === false) {
        unFinish++
      }
    })
    return (
      <div className={'process-out-div'}>
        <div className={'left'}>完成进度{this.renderProcess(finish, unFinish)}</div>
        <div className={'right'}>
          <p>今日情况</p>
          <div style={this.getToday(index, true)} onClick={() => {this.clickOneDay(index)}}>{this.getToday(index)}</div>
        </div>
        <style jsx>{`
          .process-out-div {
            display: flex;
            width: 100%;
          }
          .left {
            background-color: green;
            flex: 1;
            margin-right: 10px;
          }
          .right {
            background-color: gray;
            text-align: right;
          }
        `}</style>
      </div>
    )
  }

  renderProcess (finish, unFinish) {
    let total = this.origin.length
    return (
      <div className={'process-div-day'}>
        <div>
          <span>总计</span>
          <span>{total}天</span>
        </div>
        <div>
          <span>已完成</span>
          <span>{finish}天</span>
        </div>
        <div>
          <span>未完成</span>
          <span>{unFinish}天</span>
        </div>
        <style jsx>{`
          .process-div-day {
            display: flex;
          }
          .process-div-day div {
            margin-right: 10px;
          }
        `}</style>
      </div>
    )
  }

  getToday (index, styleType) {
    let result = this.origin[index].info[this.state.currentDate - 1].finish
    console.log(result)
    if (styleType) {
      if (result === true) {
        return {backgroundColor: 'green', color: 'white'}
      } else if (result === false) {
        return {backgroundColor: 'red', color: 'white'}
      } else {
        return {backgroundColor: 'gray', color: 'white'}
      }
    } else {
      if (result === true) {
        return '完成'
      } else if (result === false) {
        return '未完成'
      } else {
        return '未打卡'
      }
    }

  }

  // 点击某一天后弹框
  clickOneDay (index) {
    if (true) {
      this.setState({
        popShow: true,
        currentClickIndex: index
      })
    } else {

    }
  }

  // 更新进度 并且重新刷新当日的
  finishToady(bool) {
    console.log(bool)
    let {currentDate, currentClickIndex} = this.state
    this.origin[currentClickIndex].info[currentDate - 1].finish = bool
    console.log(currentClickIndex)
    console.log(currentDate - 1)
    console.log('被修改了')
    this.setState({
      popShow: false,
      currentClickIndex: undefined
    })
  }

  renderPopButton () {
    if(!this.state.popShow) {
      return null
    }
    let sureDivStyle = {
      position: 'absolute',
      bottom: '0px',
      left: '0px'
    }
    let sureDiv = <span className={'sure-button'}>
      完成了
      <style jsx>{`
        .sure-button {
          color: white;
          background-color: green;
        }
      `}</style>
    </span>
    let cancelDivStyle = {
      position: 'absolute',
      bottom: '0px',
      right: '0px'
    }
    let cancelDiv = <span className={'sure-button'}>
      未完成
      <style jsx>{`
        .sure-button {
          color: white;
          background-color: green;
        }
      `}</style>
    </span>
    let innerDivStyle = {
      width: '80%'
    }
    return (
      <ModalboxControlled
        sureClick={() => {this.finishToady(true)}}
        cancelClick={() => {this.finishToady(false)}}
        sureDivStyle={sureDivStyle}
        sureDiv={sureDiv}
        cancelDiv={cancelDiv}
        cancelDivStyle={cancelDivStyle}>
        <div className={'goal-bg'}>
          <div>今天是否完成目标了呢？</div>
          <style jsx>{`
            .goal-bg {
            height: 300px;
              padding: 20px;
              background-color: black;
              border-radius: 10px;
            }
          `}</style>
        </div>
      </ModalboxControlled>
    )
  }
  render () {
    return (
      <div>
        {this.renderDate()}
        {this.renderEnterDiv()}
        {this.renderViewDiv()}
        {this.renderPopButton()}
        <style jsx>{`
          * {
            margin: 0;
          }
        `}</style>
      </div>
    )
  }
}