var tl = gsap.timeline()

tl.from(".line h1",{
  y:150,
  stagger:0.28,
  delay:0.5,
  duration:0.5
})
tl.from("#line-count,.line h3",{
opacity:0,
onStart:function(){
  var h4timer = document.querySelector("#line-count h4");
  var grow = 0
  setInterval(function(){
  if(grow<100){
    grow++
    h4timer.innerHTML = grow++
  }else{
  h4timer.innerHTML = grow
  }
  },38)
}
})

tl.to("#loader",{
  opacity:0,
  duration:0.2,
  delay:2.8,
})
tl.from("#page1",{
  y:1500,
  /* opacity:1, */
  ease:Power3,
 
  duration:0.5,
  
})
tl.to("#loader",{
  display:"none"
})