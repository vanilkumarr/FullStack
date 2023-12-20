var box1=document.querySelector("#one");
var box2=document.querySelector("#two");
var box3=document.querySelector("#three");
var box4=document.querySelector("#four");
var box5=document.querySelector("#five");
var box6=document.querySelector("#six");
var box7=document.querySelector("#seven");
var box8=document.querySelector("#eight");
var box9=document.querySelector("#nine");


box1.addEventListener('click',function(){
    box1.textContent="X";
})

box1.addEventListener('dblclick',function(){
    box1.textContent="O";
})

box2.addEventListener('click',function(){
    box2.textContent="X";
})  

box2.addEventListener('dblclick',function(){
    box2.textContent="O";
})
box3.addEventListener('click',function(){
    box3.textContent="X";
})

box3.addEventListener('dblclick',function(){
    box3.textContent="O";
})
box4.addEventListener('click',function(){
    box4.textContent="X";
})

box4.addEventListener('dblclick',function(){
    box4.textContent="O";
})
box5.addEventListener('click',function(){
    box5.textContent="X";
})

box5.addEventListener('dblclick',function(){
    box5.textContent="O";
})
box6.addEventListener('click',function(){
    box6.textContent="X";
})

box6.addEventListener('dblclick',function(){
    box6.textContent="O";
})
box7.addEventListener('click',function(){
    box7.textContent="X";
})

box7.addEventListener('dblclick',function(){
    box7.textContent="O";
})
box8.addEventListener('click',function(){
    box8.textContent="X";
})

box8.addEventListener('dblclick',function(){
    box8.textContent="O";
})
box9.addEventListener('click',function(){
    box9.textContent="X";
})

box9.addEventListener('dblclick',function(){
    box9.textContent="O";
})

var i = document.querySelector("#reset")

arr=[box1,box2,box3,box4,box5,box6,box7,box8,box9];


i.addEventListener('click',function(){
    for (var box of arr) {
        box.textContent = "";
        }})





