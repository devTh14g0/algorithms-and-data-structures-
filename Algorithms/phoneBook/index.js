function hashStringToInt(string,tableSize){
  let hash=17;
  for (let i = 0; i < string.length; i++) {
    hash=(13 * hash * string.charCodeAt[i] % tableSize)
    
  }
  return hash
}

//representar um contato na lista telefonica
class Contact{
  constructor(name,phoneNumber){
    this.name=name
    this.phoneNumber=phoneNumber
  }
}


//tabela hash de lista telefonica
class PhoneBook{
  constructor(size){
    this.size=size
    this.table=new Array(size)
  }

  //metodo para adicionar um contato na lista telefonica
  addContact(name,phoneNumber){
    const index=hashStringToInt(name,this.size)
    if(!this.table[index]){
      this.table[index]=[]
    }
    this.table[index].push(new Contact(name,phoneNumber))
  }

  //metodo para procurar um contato na tablea hash
  findContact(name){
    const index=hashStringToInt(name,this.size)
    if(!this.table[index]){
      return null
    }
//procurar contato correspondente ao indice
    for(let contact of this.table[index]){
      if(contact.name===name){
        return contact.phoneNumber
      }
    }
    return null
  }
}

const phoneBook=new PhoneBook(10)

phoneBook.addContact("thiago","828958")
phoneBook.addContact("elma","8397")
phoneBook.addContact("betoven","8164")

console.log(phoneBook.findContact("thiago"))
console.log(phoneBook.findContact("elma"))
console.log(phoneBook.findContact("betoven"))