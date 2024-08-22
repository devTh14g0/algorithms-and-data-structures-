const binarySearch=(arr,key)=>{
  let left=0
  let right=arr.length - 1

  while(left <=right){ // esquerda  &&  direita
    let mid=Math.floor((left + right)/2)

    if(arr[mid]===key){
      return mid
    }else if (arr[mid] < key){
      left= mid + 1
    }else {
      right=mid - 1
    }
  }

  return -1 // quando terminar de decorrer o array e nao encontrar a chave,ele vai retornar -1,indicando que a chave nao esta presente no array.
}

const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const key=9
const index=binarySearch(arr,key)
if(index!==-1){
console.log(`the ${key} element was found in the index : ${index}` )
}else {
  console.log(`the ${key} element wanst found in the array `)
}

