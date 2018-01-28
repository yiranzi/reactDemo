import React from 'react'

export default class extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            currenStorageIndex: undefined,
            nbArray: undefined,
            currentInputValue: '在这个区域输入你的'
        }
    }

    componentWillMount = async ()=> {
        // 1 设置最新的存储空间
        let lastIndex = this.initStorage()
        await this.setState({
            currenStorageIndex: lastIndex
        })
        // 2 取出全部数组数据
        this.getArrayFromStorage()

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

    getArrayFromStorage () {
        let max = this.state.currenStorageIndex
        let buffer
        let array = []
        for (let i = 0; i < max; i++) {
            buffer = localStorage.getItem(`nb_${i}`)
            console.log(buffer)
            array.push(buffer)
        }
        this.setState({
            nbArray: array
        })
    }

    renderReadMe () {

    }

    enterValue () {

    }

    finishEnterLine () {
        let {currenStorageIndex, currentInputValue, nbArray} = this.state
        // 保存当前词条
        localStorage.setItem(`nb_${currenStorageIndex}`, currentInputValue)
        nbArray.push(currentInputValue)
        // 更新编号
        let nextIndex = currenStorageIndex + 1
        this.setState({
            currenStorageIndex: nextIndex
        })
        localStorage.setItem('lastIndex', nextIndex)
        this.setState({
            nbArray: nbArray,
            currentInputValue: ''
        })
    }

    handleChange (event) {
        this.setState({
            currentInputValue: event.target.value
        })
    }



    renderEnterDiv () {
        return (
            <div>
                <h3>这是输入文字的区域</h3>
                {/*<p>你现在正在往{this.state.currenStorageIndex}存储区域输入文字</p>*/}
                <input value={`${this.state.currentInputValue}第${this.state.currenStorageIndex}个里程碑计划吧`} onChange={(event) => {this.handleChange(event)}}/>
                <div onClick={() => {this.finishEnterLine()}}>完成</div>
            </div>
        )
    }

    renderViewDiv () {
        let {nbArray} = this.state
        let list
        if (nbArray && nbArray.length > 0) {
            list = nbArray.map((ele, index) => {
                return (
                    <li style={{display: 'flex'}} className={'out-div'} key={index}>
                        <span className={'index'}>{index}</span>
                        <p>{ele}</p>
                        <style jsx>{`
                            .out-div {
                                display: flex;
                                justify-contet: center;
                                align-items: center;
                            }
                            .index {
                                margin-right: 10px;
                            }
                        `}</style>
                    </li>
                )
            })

        }
        return (
            <div>
                <h3>这是输出记事本的区域</h3>
                <ul>
                    {list ? list : '空'}
                </ul>
            </div>
        )
    }

  renderFinishButton () {
      return
  }


    render () {
        return (
            <div>
                {this.renderEnterDiv()}
                {this.renderViewDiv()}
              {this.renderFinishButton()}
            </div>
        )
    }
}