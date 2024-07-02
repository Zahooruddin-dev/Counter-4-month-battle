//document.getElementById("count-el").innerText=5
let countVal= document.getElementById("count-el")
let saveVal= document.getElementById("save-el")

let count=0

function increment(){
  count += 1
  countVal.textContent= count
}
function decrement(){
  count -=1
  countVal.textContent= count
}
function save(){
  let countS=  ' ' + count + '-'
saveVal.textContent +=  countS
}
function reset(){
  
saveVal.textContent = 0
  countVal.textContent = 0
}

