

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
}); 
//var a = document.querySelector("elem1")
//var image = a.getAttribute("data-image")
//console.log(image)

var elemc = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemc.addEventListener("mouseenter",function(){
fixed.style.display = "block"

})
elemc.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
    
    })
    var elem1 = document.querySelector("#elem1")
    elem1.addEventListener("mouseenter",function(){
      var image =  elem1.getAttribute("data-image")
      fixed.style.backgroundImage =`url(${image})`
    })