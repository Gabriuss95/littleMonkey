

let closedEyes=document.querySelector(".closed")
let openEyes=document.querySelector(".open")


function check(){
  if(this.classList.contains("closed")){
    this.classList.remove("active");
    this.nextElementSibling.classList.add("active")
  }
  if(this.classList.contains("open")){
    this.classList.remove("active");
    this.previousElementSibling.classList.add("active")
  }
}
openEyes.addEventListener("click",check);
closedEyes.addEventListener("click",check);
