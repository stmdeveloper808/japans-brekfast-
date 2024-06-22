var box = document.querySelector("#box")
var cursur = document.querySelector("#crsur")
box.addEventListener("mousemove",function(dets){
    gsap.to(cursur,{
     x:dets.x,
     y:dets.y,
     duration:1
    })
})