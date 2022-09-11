
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0;

function increment(){
  count += 1
  console.log(count)
  countEl.textContent = count;
}

function save(){
  
let x = count + " - ";
 saveEl.textContent += x;
 countEl.textContent = count ;
 count = 0;
  
}