log('hellow world')

var a
var count = 0
var thisInFuncB
var funcB = () => {
  log(this)
  thisInFuncB = this
  log('b')
}

funcA()

log(thisInFuncB)

function funcA () {
  funcB()
}

function log (log) {
  if (typeof(log) === 'object') {
    console.log(`${count}` + log)
    console.log(log.log)
    // for (let i in log) {
    //   console.log(`${count}`)
    //   console.log(log[i])
    //   count++
    // }
  } else {
    console.log(`${count}` + log)
  }

  count++
}
