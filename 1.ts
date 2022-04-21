/*

   If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
   The sum of these multiples is 23.

   Find the sum of all the multiples of 3 or 5 below 1000.

*/

export const sumTo = (max: number) => {
   
  let count = 0
  let sum = 0

  while (count < max) {
    if (count % 3 === 0 || count % 5 === 0) {
      sum += count 
    }
    count++
  }

  return sum
}

console.log(sumTo(1000))
