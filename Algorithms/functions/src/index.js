
// sum elements in the array  --recursive
const sum=(...array)=>{
 if (array.length ===0) return ''
 if(array.length===1){
  return array
 }else {
  let sum=array.reduce((accum,num)=>{
    return accum + num
  })
  return sum
 }
}
console.log(`${sum(1,2,3,4,5)}`)

//length array elements --recursive
const arrayElements=(...numbers)=>{
  if(numbers.length===0) return ''
  if(numbers.length===1){
    return numbers
  }else {
    return numbers.length
  }
  }
  console.log(`${arrayElements(1,2,3,4,5)}`)

  //highter element in the list -- recursive
  let list = [1,2,3,4,5]
  const highfunction=(a,b)=> b - a
  list.sort(highfunction)
  console.log(list[0])

  
