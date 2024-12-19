// const frame = document.querySelector("#wrap");
// console.log(frame);
// const box1 = document.querySelector("#wrap .box1");
// console.log(box1);
// const title = document.querySelector("#title");
// console.log(title);
// const item = document.querySelector("#wrap article");
// console.log(item);
/*
const items = document.querySelectorAll("#wrap article");
for(let item of items) {
    console.log(item);
}
const items = document.querySelectorAll("#wrap article");
for(let i=0; i<items.length; i++) {
    console.log(items[i]);
}

const list = document.querySelector(".list");
const items = list.children;

console.log(items);
console.log(items[0])
console.log(items[1])
console.log(items[2]);
console.log(items[3]);

const li = document.querySelector("li");
console.log(li.closest("main"));

const item3 = document.querySelector(".item3");
console.log(item3.previousElementSibling);
console.log(item3.nextElementSibling);
*/
// console.log(item3.parentElement);

const box = document.querySelector("#box");
// box Style 처리하기 & 제어하기
// box.style.width = "10%";
/*
<style>
#box {
    width: 10%;
}
</style>    
*/

// box.style.height = "300px";
// box.style.backgroundColor = "hotpink";
// box.style.border = "none";
// box.style.transform = "rotate(10deg)";
/*
box.addEventListener("mouseenter", ()=>{
    box.style.backgroundColor = "hotpink";
});
box.addEventListener("mouseleave", ()=>{
    box.style.backgroundColor = "aqua";
});
*/
/* EcmaScript 5 Version
box.addEventListener("mouseenter", function(){
    this.style.backgroundColor = "hotpink";
});
box.addEventListener("mouseleave", function(){
    this.style.backgroundColor = "aqua";
});

box.addEventListener("mouseenter", e=>{
    e.currentTarget.style.backgroundColor = "hotpink";
});
box.addEventListener("mouseleave", e=>{
    e.currentTarget.style.backgroundColor = "aqua";
});

const link = document.querySelector("a");

link.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("링크를 클릭했습니다.");
});


const list = document.querySelectorAll(".list li");

for (let el of list) {
    el.addEventListener("click", e=>{
        e.preventDefault();
        console.log(e.currentTarget.innerText);
    })
}
*/

const btnPlus = document.querySelector(".btnPlus");
const btnMinus = document.querySelector(".btnMinus");
const numDisplay = document.querySelector(".numDisplay");
let num = 0;

btnPlus.addEventListener("click", e=>{
    e.preventDefault();
    num++;
    // console.log(num);
    // numDisplay.textContent = num;
    // numDisplay.innerHTML = num;
    // console.log(e.currentTarget.innerText);
    e.currentTarget.innerHTML = num;
});
btnMinus.addEventListener("click", e=>{
    e.preventDefault();
    num--;
    // console.log(num);
    numDisplay.textContent = num;
});
const myName = "홍길동";
console.log(`내이름은 ${myName}입니다.`);