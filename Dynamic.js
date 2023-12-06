var one=document.querySelector('#a');
var two=document.querySelector('#b');
var three=document.querySelector('#c');
console.log("Hi");

one.addEventListener('mouseover',function(){
    one.textContent="Gaymanth is gay nigger";
    one.style.color='red';
})


one.addEventListener('mouseout',function(){
    one.textContent="Hover over me";
    
})

two.addEventListener('click',function(){
    two.textContent="gay mode on";
    two.style.color='yellow';
})

three.addEventListener('dblclick',function(){
    three.textContent="gay mode ulta";
    three.style.color='orange';
})
