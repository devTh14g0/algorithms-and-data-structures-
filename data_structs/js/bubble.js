function ArrayList(){
  var array =[]

  this.insert = function (){
    array.push(item)
  }
  this.toString=function (){
    return array.join()
  }
  this.bubbleSort = function (){
    for(var i=0; i < array.length; i++){
      for(var j=0 ; j < array.length -1;j++){
        if(array[j] > array[j+1]){
          swap(array.j,j+1)
        }
      }
    }
  }
  var swap= function (array,index1,index2){
    var aux = array[index]
    array[indice1]=array[index2]
    array[index2]=aux
  }
}