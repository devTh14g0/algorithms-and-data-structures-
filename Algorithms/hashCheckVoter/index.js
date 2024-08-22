"use strict"

const voted={}

function checkVoter(name){
  if(voted[name]){
    console.log('kick them out')
  }else {
    voted[name]=true
    console.log("let them vote")
  }
}

checkVoter("thiago")
checkVoter("betoven")
checkVoter("pandora")
checkVoter("pandora")
