const ver = navigator.userAgent;
console.log(ver);

const isIE = /trident/i.test(ver);
console.log(isIE);

if(isIE) {
    alert("익스플로러 브라우저로 접속하셨네요. 이 웹 페이지는 익스플로러를 지원하지 않습니다. 다른 브라우저로 접속해 주세요.");
}

const btns = document.querySelectorAll(".btns li");
const boxs = document.querySelectorAll("section article");

//버튼의 개수만큼 반복을 돌며 클릭 이벤트 연결
for(let i=0; btns.length; i++){

    //각 버튼을 클릭할 때마다
    btns[i].addEventListener("click", e=>{
        //각각 인수를 순서값과 버튼, 박스그룹을 넣어서
        //activation함수 호출
        activation(i, btns);
        activation(i, boxs);
    })
}

//첫 번째 인수로 순서값, 두번째 인수로 그룹을 전달받아
function activation(index, list){
    //인수로 받은 요소의 그룹의 갯수만큼 반복을 돌며 비활성화
    for(let el of list){
        el.classList.remove("on");
    }
    //첫번째 인수로 받은 순서에 해당하는 그룹의 요소만 찾아서 활성화
    list[index].classList.add("on");
}
/*
const wrap = document.querySelector("#wrap");
const box  = wrap.querySelector("article");

wrap.addEventListener("click", ()=>{
    box.style.backgroundColor = "hotpink";
});
*/
/* 자바스크립트로 클래스 제어하기 2
wrap.addEventListener("click", ()=>{
    wrap.classList.add("on");
});
 */
/* 자바스크립트로 클래스 제어하기 3 
wrap.addEventListener("click", ()=>{
    let isOn = wrap.classList.contains("on");
    console.log(isOn);
});
*/
/* 자바스크립트로 클래스 제어하기 4 
wrap.addEventListener("click", ()=>{
    let isOn = wrap.classList.contains("on");
    console.log(isOn);
    wrap.classList.add("on");
});
*/

/* 자바스크립트로 클래스 제어하기 5 */
/* --->
wrap.addEventListener("click", () => { 
  let isOn = wrap.classList.contains("on");
  console.log(isOn); 

  /*
  if(isOn){
      wrap.classList.remove("on");
  }else{
      wrap.classList.add("on");
  }
 */
/* --->
  (isOn)? wrap.classList.remove("on") : wrap.classList.add("on");
});

/* 자바스크립트로 클래스 제어하기 6 */
/*
wrap.addEventListener("click", ()=>{
    wrap.classList.toggle("on");

    let isOn = wrap.classList.contains("on");
    console.log(isOn); 
})
*/
/*
const btnLeft = document.querySelector(".btnLeft");
const btnRight = document.querySelector(".btnRight");
const box = document.querySelector("#box");
const deg = 45; //회전할 각도 값 저장
let num = 0; //증가시킬 값 0으로 초기화

//btnLeft를 클릭할 때마다
btnLeft.addEventListener("click", e=>{
    e.preventDefault();
    //num값을 1씩 감소
    num--;
    //45도 각도에 감소된 num값을 계속 곱한 값을 rotate구문에 삽입
    box.style.transform= `rotate(${num * deg}deg)`;
});

//btnRight를 클릭할 때마다
btnRight.addEventListener("click", e=>{
    e.preventDefault();
    //num값을 1씩 증가
    num++;
    //45도 각도에 증가된 num값을 계속 곱한 값을 rotate구문에 삽입
    box.style.transform= `rotate(${num * deg}deg)`;
});
*/