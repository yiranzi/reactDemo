import React from 'react'

export default class extends React.Component {
  componentWillMount () {
    console.log('enter')
    let first = 'abc?dfe'

    this.reg1(first)
    this.reg2()
  }

  reg1 (str) {
    let content
    content = str.replace('dfe', 'def')
    let reg1 = /def/
    let b = reg1.exec(content)
    console.log(content)
    console.log(b)
  }

  reg2 () {
    var myRe = /ab*/g;
    var str = 'abbbcdefabh';
    var myArray;
    while ((myArray = myRe.exec(str)) !== null) {
      console.log(myRe)
      console.log(typeof(myRe))
      var msg = 'Found ' + myArray[0] + '. ';
      msg += 'Next match starts at ' + myRe.lastIndex;
      console.log(msg);
    }
  }

  render () {
    return (
      <div>123123</div>
    )
  }
}

