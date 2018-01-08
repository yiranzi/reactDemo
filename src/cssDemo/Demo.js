/**
 * Created by wuchuck on 2017/10/31.
 */
import React from 'react'
import a from '../res/img/1.jpg'

class Main extends React.Component {
  render () {
    return (<div className='page-out'>
      {this.renderBoxSizing()}
      <style jsx>{`
      * {
        margin: 0;
      }
      .page-out {
        font-size: 20px;
        line-height: 1.5;
        margin: 10px;
      }
      .div1 {
        font-size: 40px;
      }
      .div2 {
        font-size: 20px;
      }
      .div4 {
        font-size: 10px;
      }
      `}</style>
    </div>)
  }
  // 对于居中 可以巧妙使用padding + border-box来实现。来完成居中对齐。因为先确定的width为100%。
  // 然后 再根据box的类型进行分配
  renderBoxSizing () {
    return (<div className='page-inner'>
      <h1>我是一副美丽的画</h1>
      <div className='wall'>
        <div className='contain1'>
          <img src={a} />
        </div>
        <div className='contain2'>
          <img src={a} />
        </div>
      </div>
      <style jsx>{`
      .page-inner {
        width: 350;
        padding: 10px;
        margin: auto;
      }
      .contain1 img {
        {/*box-sizing: border-box;*/}
        padding: 10px;
        width: 100%;
      }
      .contain2 img {
        {/*box-sizing: content-box;*/}
        padding: 10px;
        width: 100%;
      }
      .contain2 {

      }
      .wall {
        background-color: gray;
      }
      .div1 {
        font-size: 40px;
      }
      .div2 {
        font-size: 20px;
      }
      .div4 {
        font-size: 10px;
      }
      `}</style>
    </div>)
  }

  textLineHeigth () {
    return (<div>
      <h1>这是测试文本</h1>
      <div className="div1">
        <p>1333333,333333,333333,333333,333333,333333,</p>
        <p>1333333,333333,333333,333333,333333,333333,</p>
        <p>1333333,333333,333333,333333,333333,333333,333333,333333,</p>
      </div>
      <div className='div2'>
        <div className='div3'>
          <p>333333,333333,333333,333333,333333,333333,333333,333333,</p>
          <p>3333333,333333,333333,333333,333333,333333,333333,333333,333333,333333,</p>
          <p>3333333,333333,333333,333333,333333,333333,333333,333333,</p>
          <p>3333333,333333,333333,333333,333333,333333,333333,333333,333333,333333,</p>
        </div>
        <div className='div4'>
          <p>4333333,333333,333333,333333,333333,333333,333333,333333,</p>
          <p>4333333,333333,333333,333333,333333,333333,</p>
          <p>4333333,333333,333333,333333,333333,333333,</p>
          <p>4333333,333333,333333,333333,333333,333333,</p>
        </div>
      </div>
      <style jsx>{`
      * {
        margin: 0;
      }
      .page {
        font-size: 20px;
        margin: 0;
        line-height: 1.5;
      }
      .div1 {
        font-size: 40px;
      }
      .div2 {
        font-size: 20px;
      }
      .div4 {
        font-size: 10px;
      }
      `}</style>
    </div>)
  }
}

export default Main