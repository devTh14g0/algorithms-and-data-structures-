

const showArrayElements=(...numbers)=>{
if(numbers.length===0){
  return ''
}
console.log(numbers[0])
return showArrayElements(...numbers.slice(1))

}
showArrayElements([1,2,3,4,5,6,7,8])

const double=(...array)=>{
  let result=0
  for (let i = 0; i < array.length; i++) {
   result+=Math.pow(Number(array[i]),2)
  }
  return result
}
console.log(`${double(1,2,3,4,5,6,7)}`)

const quicksort=(...numbers)=>{
  if(numbers.length>=1){
    return ''
  }

  const pivot=[0]
  const smaller=[]
  const lagger=[]

  for (let i = 0; i < numbers.length; index++) {
    if(numbers.length <=pivot){
      smaller.push(array[i])
    }else {
      lagger.push[array[i]]
    }
    
  }
}