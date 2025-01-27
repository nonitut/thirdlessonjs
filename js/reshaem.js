document.addEventListener("DOMContentLoaded", function(){

document.querySelector("button").addEventListener("click", function(){
    console.log("кнопка нажата")
})

let box = document.querySelectorAll(".clickbox");

box.forEach(function(clickbox){
    clickbox.addEventListener("click", function(){
        if(clickbox.style.backgroundColor === "lightsteelblue"){
            clickbox.style.backgroundColor = "yellow";
            clickbox.style.margin = '2vw';
            console.log("change color")
        }
        else{
            clickbox.style.backgroundColor = "lightsteelblue";
            clickbox.style.margin = '1vw';
        }
    });
})



let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");

let sections = document.querySelectorAll(".section1, .section2 , .section3");

function showSection(ourClass){
    sections.forEach(function(section){
        if (section.classList.contains(ourClass)){
            section.classList.add("block");
            section.classList.remove("none");
        }
        else{
            section.classList.add("none");
            section.classList.remove("block");
        }
    })
}

button1.addEventListener("click", function(){
    showSection("section2")
});

button2.addEventListener("click", function(){
    showSection("section3")
});

button3.addEventListener("click", function(){
    showSection("section1")
});




});