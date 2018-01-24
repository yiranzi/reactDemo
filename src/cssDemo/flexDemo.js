/**
 * Created by wuchuck on 2017/10/31.
 */
import React from 'react'
import logo from './logo.svg';
import book_1 from './book_1.png';
import book_2 from './book_2.png';
import book_3 from './book_3.png';
import book_4 from './book_4.png';
class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      boolWidth: false
    }
  }

  imgFlex () {
    console.log('不同大小的图片和平相处')
    // let bookName = ['时代周刊', '皮克斯的启示', '人类简史', '人性中的善良天使']
    let bookName = [book_1,book_2,book_3,book_4]
    let imgArr = bookName.map((bookName, index) => {
      return (
        <div className='book-img-div' key={index}>
          <img src={bookName} />
          <span>123456456456</span>
          <style jsx>{`
          .book-img-div {
            display: flex;
            flex-wrap: wrap;
          }
          img {
            width: 100%;
            height: 100%;
            // object-fit: contain;
          }
          `}</style>
        </div>
      )
    })
    return (
      <div className='share-gift-div'>
        <div className='book-list'>{imgArr}</div>
        <style jsx>{`
          .share-gift-div {
            border-bottom: 1px solid grey;
            height: 100px;
          }
          .book-list {
            display: flex;
            justify-content: space-around;
          }
        `}</style>
      </div>
    )
  }

  reFlex () {
    console.log('让我么你重温下flex')
    console.log('Question 如何使用space-between')
    return (
      <div className={'test'}>
        <p className={'a-inner'}>一二三四五六七八九零</p>
        <p className={'b-inner'}>一二三四五</p>
        <p className={'c-inner'}>一二三四五</p>
        <style>{`
          .test {
            display: flex;
            background-color: black;
            width: 600px;
            line-height: 15px;
            height: 15px;
            overflow: hidden;
            justify-content: space-between;
          }
          .test * {
            margin: 0;
          }
          .a-inner {
          flex: 1;
          background-color: green;
          }
          .b-inner {
          flex: 1;
          background-color: blue;
          }
          .c-inner {
          flex: 1;
          background-color: red;
          }
        `}</style>
      </div>
    )
  }

  aboutSpace() {
    console.log('如何控制flex的换行呢。。')
    return (
      <div className={'test'}>
          <p className={'a-inner a'}>一二三四五六七八九零</p>
          <p className={'b-inner b'}>一二三四五</p>
        <style>{`
          .test {
            display: flex;
            background-color: red;
            width: 100px;
            line-height: 15px;
            height: 15px;
            overflow: hidden;
          }
          .test * {
            margin: 0;
          }
          .a-inner {
          flex-basis: 200px;
          background-color: green;
          }
          .b-inner {
          flex-basis: 100px;
          background-color: blue;
          }
        `}</style>
      </div>
    )
  }

  imgWithP () {
    console.log('如果img有一个p标签会是怎么样的呢')
    console.log('align-items如果项目未设置高度或设为auto，将占满整个容器的高度。')
    console.log('align-content轴线占满整个交叉轴。')
    return (<div className='flex'>
      <img src={logo} />
      <p>123123</p>
      <style>{`
        .flex {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          background-color: red;
          height: 500px;
          align-content: center;
        }
        .div {
        }

        p {
          width: 100%;

        }
      `}</style>
    </div>)
  }

  render () {
    return (<div>
      {/*{this.renderFlex()}*/}
      {/*{this.flexChildIsWhat()}*/}
      {/*{this.renderAnimation()}*/}
      {/*{this.test3()}*/}
      {/*{this.test1()}*/}
      {/*{this.test2()}*/}
      {/*{this.testHeight()}*/}
      {/*{this.imgWithP()}*/}
      {/*{this.aboutSpace()}*/}
      {/*{this.reFlex()}*/}
      {this.imgFlex()}
    </div>)
  }

  renderFlex() {
    console.log('内部div的block为什么失效了呢？')
    return (<div className='flex'>
      <a>
        <div className='div' style={{width: '300px'}}>1</div>
      </a>
      <a>
        <div className='div'>2</div>
      </a>
      <a>
        <div className='div'>3</div>
      </a>
      <style>{`
        .flex {
          overflow: hidden;
          width: 1000px;
        }
        .div {
          width: 100px;
          background-color: red;
          display: inline-block;
        }
      `}</style>
    </div>)
  }

  renderAnimation () {
    let width = 10;
    let style2 = {}
    if (this.state.boolWidth) {
      style2 = {
        transform: `translateX(100px)`,
        width: '100px',
        backgroundColor: 'blue',
        transition: 'transform 2s'
      }
    } else {
      style2 = {
        transform: `translateX(200px)`,
        width: '100px',
        backgroundColor: 'blue',
        transition: 'transform 2s'
      }
    }
    console.log(`translateX${(width)}px`)
    return (<div style={style2}>
      <div onClick={() => {this.setState({boolWidth: !this.state.boolWidth})}}>
        123123
      </div>
      <div>
        123123
      </div>
    </div>)
  }

  flexChildIsWhat () {
    console.log('flex元素的子组件是什么')
    return (<div className='father'>
      <div className='child'>
        <div>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <div>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
      </div>
      <style>{`
        .father {
          display: flex;
        }
        .child {
        // display: flex;
        }
      `}</style>
    </div>)
  }

  testHeight () {
    console.log('flex 一高一低 高度如何决定呢？ 决定了的高度如何修改 如何居中呢？')
    return (
      <div className='flex'>
        <div className='left'>
          <img style={{width: '100px', height: '30px'}}className='image' src={logo} />
        </div>
        <div className='right'>
          {/*<p className='right-width'>1</p>*/}
          <p style={{height: '20px', backgroundColor: 'green'}}>1</p>
          <p style={{height: '40px', backgroundColor: 'yellow'}}>2</p>
          <p style={{height: '20px', backgroundColor: 'blue'}}>3</p>
        </div>
        <style>{`
          * {
            margin: 0;
          }
          .image {
            {/*width: 50px;*/}
            {/*height: 50px;*/}
          }
          .flex {
            display: flex;
            align-items: center;
          }
          .left {
            flex: 1;
            justify-content: center;
            height: auto;
          }
          .left-width {
            width: 200px;
          }
          .right {
            background-color: red;
            flex: 1;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
          }
          .right > p{
            width: 100%;
          }
          .right-width {
            width: 100px;
          }

        `}</style>
      </div>
    )
  }
  test1 () {
    console.log('测试flex对于子元素长度的约束')
    console.log('1 flex的basis无法压缩小于标准尺寸 最小尺寸 >basis')
    console.log('2 basis > width')
    console.log('2 width可以强行要求缩小尺寸 width > 最小尺寸')
    console.log('4 basis只能覆盖同层的width。对于子元素 无能为力')
    return (
      <div>
        <div className='my'>
          <div className='div'>
            虽然是200呀呀 但是满足最小后 服从bisis
          </div>
          <div className='div' style={{width: '200px'}}>虽然是200呀呀 但是满足最小后 服从bisis</div>
          <div className='div' style={{width: '300px'}}>3</div>
          <div className='div'>
            <div style={{width: '700px'}}>basis只能覆盖同层的width。对于子元素 无能为力知道吗知道吗</div>
          </div>
          <div style={{maxWidth: '200px'}} className='div'>
            <div style={{width: '500px'}}>basis只能覆盖同层的width。只能通过外部的max-width进行控制</div>
          </div>
          <div className='div'>
            <p>null</p>
          </div>
          <div className='div'>
            <p>null</p>
          </div>
          <div className='div'>
            <div >
              <p>123</p>
              <p>123</p>
              <p>123</p>
              <p>123</p>
              <p>123</p>
              <p>123</p>
            </div>

          </div>
          <div className='div'>
            <div style={{backgroundColor: 'green'}}>
              <p>456</p>
            </div>

          </div>

          <style>{`
          .my {
            display: flex;
            overflow: auto;
            flex-wrap: wrap;
          }
          .div {

            margin: 10px;
            background-color: red;
            flex-basis: 50px;
            flex-shrink: 0;
            flex-grow: 0;
          }
          `}</style>
        </div>

      </div>
    )
  }


  test2 () {
    console.log('测试flex长度')
    return (
      <div>
        <div className='my'>
          <div className='div' style={{width: '100px'}}>1</div>
          <div className='div' style={{width: '200px'}}>2</div>
          <div className='div' style={{width: '300px'}}>3</div>
          <div className='div'>
            <div style={{width: '1px'}}>1</div>
          </div>
          <div className='div'>5</div>
          <div className='div'>4</div>
          <div className='div'>4</div>
          <div className='div'>4</div>
          <div className='div'>4</div>
          <style>{`
          .my {
            display: flex;
            overflow: auto;
            flex-wrap: wrap;
          }
          .div {
           margin: 10px;
            background-color: red;
            flex-basis: 100%;
            flex-shrink: 0;
            flex-grow: 1;
          }
          `}</style>
      </div>

    </div>
    )
  }

  test3 () {
    return (
      <div>
        <div className='flex'>
          <div className='testA'>
            {/*<div className='inner' >5</div>*/}
            <img className='inner' src={logo} />
          </div>
          <div className='testB'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>3</p>
            <p>3</p>
            <p>3</p>
            <p>3</p>
            <p>3</p>
          </div>
          <style jsx>{`
            .flex {
              display: flex;
              align-items: center;
            }
            .testA {
              flex: 1;
            }
            .inner {
              width: 100%;
              height: 100%;
              background-color: red;
            }
            .testB {
              flex: 2;
            }
          `}</style>
        </div>

      </div>
    )
  }

}

export default Main