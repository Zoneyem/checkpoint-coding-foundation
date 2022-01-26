class SumApp {
  // Add you solution here
  constructor() {
    this.numbers = []
  }

  addNumber(num) {
    if (isNaN(num)) {
      console.log(`${num} is not a number.`)
    } else this.numbers.push(num)
  }

  getSum() {
    if (this.numbers.length === 0) return 0
    {
      let sum = 0
      for (let i = 0; i < this.numbers.length; i++) {
        sum += this.numbers[i]
      }
      
      return sum
    }
  }

  reset() {
    if (this.numbers.length === 0) console.log('Already empty!')
    else {
      const count = this.numbers.length
      for (let i = 0; i < count; i++) {
        this.numbers.pop()
      }
    }
  }
}

const sumApp = new SumApp()

sumApp.addNumber(1)
sumApp.addNumber(2)
sumApp.addNumber(4)
sumApp.addNumber(5)

console.log(sumApp.numbers.length) // 2

console.log(sumApp.getSum()) // 3

sumApp.reset()

console.log(sumApp.numbers.length) // 0
console.log(sumApp.getSum()) // 0
