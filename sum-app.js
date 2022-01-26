const numbers = [10, 20, 5, 1, 3, 5, 6, 85]
let sum = 0
let n = '858'
console.log(numbers)
class SumApp {
  // Add you solution here
  constructor(numbers) {
    this.numbers = numbers
    this.n = n
    this.listNumbers()
    this.addNumber()
    this.getSum()
    this.reset()
  }

  listNumbers() {
    console.log(numbers)
  }
  addNumber() {
    const addedNumbers = numbers.push(this.n)
    console.log(addedNumbers)
    console.log(this.addNumber.length)
  }
  getSum() {
    if (isNaN(this.n)) {
      console.log(`${this.n} is not a number number`)
    } else {
      for (let i = 0; i < this.addNumber.length; i++) {
        sum += this.addNumber[i]
        console.log(sum)
      }
    }
  }

  reset() {
    console.log(numbers.pop(this.n))
  }
}

const sumApp2 = new SumApp()
