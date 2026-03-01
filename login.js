// 🔥 แก้รหัสตรงนี้เอง
const friendPassword = "17052551";  // วันเกิดเพื่อน
const myPassword = "06122550";      // วันเกิดของไกด์

let step = 1; // 1 = เพื่อน | 2 = ไกด์
let input = "";

const dotsContainer = document.getElementById("dots");
const popup = document.getElementById("popup");
const card = document.querySelector(".login-card");
const title = document.querySelector(".login-card h2");

// สร้าง 8 จุด
for(let i=0;i<8;i++){
  let dot=document.createElement("div");
  dot.className="dot";
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".dot");
const keys = document.querySelectorAll(".key");

keys.forEach(key=>{
  key.addEventListener("click",()=>{

    if(key.classList.contains("delete")){
      input=input.slice(0,-1);
      updateDots();
      return;
    }

    if(input.length<8){
      input+=key.textContent;
      updateDots();
    }

    if(input.length===8){
      checkPassword();
    }

  });
});

function updateDots(){
  dots.forEach((dot,i)=>{
    if(i<input.length){
      dot.classList.add("filled");
    }else{
      dot.classList.remove("filled");
    }
  });
}

function resetInput(){
  input="";
  updateDots();
}

function checkPassword(){

  if(step===1){
    if(input===friendPassword){
      step=2;
      resetInput();
      title.textContent="ใส่วันเกิดของไกด์ อิอิ";
      gsap.from(title,{opacity:0,y:-10,duration:0.4});
    }else{
      wrongAction();
    }
  }

  else if(step===2){
    if(input===myPassword){
      gsap.to(card,{
        opacity:0,
        duration:0.5,
        onComplete:()=>{
          window.location.href="quiz.html";
        }
      });
    }else{
      wrongAction();
    }
  }
}

function wrongAction(){
  popup.style.display="block";
  card.classList.add("shake");

  setTimeout(()=>{
    popup.style.display="none";
    card.classList.remove("shake");
  },1500);

  resetInput();
}