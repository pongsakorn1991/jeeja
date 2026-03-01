const questions = [
{q:"เรารู้จักกันมากี่ปี",a:["2","3","4"],correct:1},
{q:"กีฬาที่คิดว่าไกด์ชอบที่สุด",a:["แบดมินตัน","ฟุตบอล","วอลเล่บอล"],correct:0},
{q:"สีที่ไกด์ชอบ",a:["ชมพู","ฟ้า","ดำ"],correct:0},
{q:"กิจกรรมที่ทำด้วยกันแล้วคิดว่าไกด์ชอบ",a:["เต้นลีลาศ","เล่นแบดมินตัน","งานกลุ่ม"],correct:0},
{q:"คิดว่าตอนนี้ไกด์รูัสึกไรอยู่",a:["คิดถึง","เศร้า","ดีใจ"],correct:0},
{q:"คิดว่าไกด์รู้วันเกิดแกได้ไง",a:["เพื่อนแก","สืบเอง","ถามแก"],correct:1},
{q:"รักและคิดถึงเสมอนะ",a:["ok"],correct:0}
];

let score = 0;
let answeredCount = 0;

const container = document.getElementById("quizContainer");

questions.forEach((item,index)=>{

  let card = document.createElement("div");
  card.className = "card";

  let title = document.createElement("h3");
  title.textContent = (index+1)+". "+item.q;
  card.appendChild(title);

  let answered = false;

  item.a.forEach((choice,i)=>{

    let btn = document.createElement("button");
    btn.textContent = choice;

    btn.onclick = ()=>{

      if(answered) return;

      answered = true;
      answeredCount++;

      if(i === item.correct){
        btn.classList.add("correct");
        score++;
      } else {
        btn.classList.add("wrong");
      }

      const allBtns = card.querySelectorAll("button");
      allBtns.forEach(b => b.disabled = true);

      checkFinished();
    };

    card.appendChild(btn);
  });

  container.appendChild(card);
});

function checkFinished(){

  if(answeredCount === questions.length){

    let resultCard = document.createElement("div");
    resultCard.className = "card";

    let message = "";

    if(score === 7){
      message = "เอาดี รักนะถูกหมดเลย";
    } else if(score >= 5){
      message = "แอบผิดอยู่แต่รักนะ";
    } else {
      message = "เริ่ด เริ่ด เริ่ด";
    }

    resultCard.innerHTML = `
      <h3>${message}</h3>
      <p>คะแนนรวม: ${score}/7</p>
      <button id="nextBtn">ถัดไป 💗</button>
    `;

    container.appendChild(resultCard);

    resultCard.scrollIntoView({behavior:"smooth"});

    document.getElementById("nextBtn").onclick = ()=>{
      window.location.href="quiz2.html";
    };
  }
}