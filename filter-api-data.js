'use-strict'
const apiData = [
  { id: 1, name: 'Toyota', year: 2010, status: 'new', price: 12000 },
  { id: 4, name: 'Mazda', year: 2016, status: 'new', price: 14000 },
  { id: 5, name: 'Toyota', year: 2010, status: 'old', price: 1000 },
  { name: 'Toyota', year: 2020, status: 'new' },
  { id: 7, name: 'Toyota', year: 2010, price: 12000 },
  { id: 8, name: 'Nissan', year: 2000, status: 'new', price: 5000 },
  { name: 'Jaguar', year: 2020, status: 'old', price: 19000 },
  { id: 10, name: 'Nissan', year: 2000, price: 5000 },
  { id: 11, name: 'Jaguar', year: 2020, status: 'old' },
]

const mandatoryKeys = ['id', "price", "status"]
const isIncluded = mandatoryKeys.includes("id")
console.log(isIncluded);
const filtered = mandatoryKeys.fill("id")
console.log(filtered);

function filterApiData(apiData, mandatoryKeys) {
  // Add you solution here

 
 //     console.log(`Data does not meet all the requirements`)
 //   }
  //})

}


