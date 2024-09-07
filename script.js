
function locoMotive() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from(".line h1", {
    y: 150,
    stagger: 0.28,
    delay: 0.5,
    duration: 0.5,
  });
  tl.from("#line-count,.line h3", {
    opacity: 0,
    onStart: function () {
      var h4timer = document.querySelector("#line-count h4");
      var grow = 0;
      setInterval(function () {
        if (grow < 100) {
          grow++;
          h4timer.innerHTML = grow++;
        } else {
          h4timer.innerHTML = grow;
        }
      }, 38);
    },
  });

  tl.to("#loader", {
   
    opacity: 0,
    duration: 0.4,
    delay: 2.5,

  });
  tl.from("#page1", {
    y: 1400,

    duration: 0.6,
    ease: Power4,

  });
  tl.to("#loader", {
    display: "none",
  });
  tl.from(".elem h1, .elem h2,.elem h3", {
    y: 150,
    stagger: 0.25,
    duration: 0.5,
    delay: 0.5,
  });
  
  tl.from("#video-container", {
    opacity: 0,
  });
}
function mouseAnime() {
  Shery.mouseFollower(".mousefollower", {
    skew: true,
    ease: "cubic-bezier(0.50.-5,-0.400,-5)",
    duration: 1,
  });


var videoContainer = document.querySelector("#video-container")
var video = document.querySelector("#video-container  video")
var videoimg = document.querySelector("#video-container  img")
var videocrsr = document.querySelector("#video-container  #video-crsr")
videoContainer.addEventListener("mouseenter",function(){
 
  videoContainer.addEventListener("mousemove",function(det){
    gsap.to(".mousefollower", {
      opacity: 0,
    });

   gsap.to("#video-crsr",{
    top:det.y - 280,
    left:det.x - 500,
   })
  })
})
videoContainer.addEventListener("mouseleave",function(){
  
  video.pause();
  flag=0
  videoimg.style.opacity = 1;
  videocrsr.innerHTML = `<i class="ri-play-line"></i>`
  gsap.to("#video-crsr",{
    scale:1
  })
  gsap.to(".mousefollower", {
    opacity: 1,
  });

   gsap.to("#video-crsr",{
    top:"-15%",
    left:"70%",
   })
  })
var flag = 0
videoContainer.addEventListener("click",function(){
 if(flag == 0){
  video.play();
  videoimg.style.opacity = 0;
  video.style.opacity=1
  videocrsr.innerHTML = `<i class="ri-pause-line"></i>`
  gsap.to("#video-crsr",{
    scale:0.5
  })
  flag=1;
 }else{
  video.pause();
  videoimg.style.opacity = 1;
  video.style.opacity=0
  videocrsr.innerHTML = `<i class="ri-play-line"></i>`
  gsap.to("#video-crsr",{
    scale:1
  })
  flag=0;
 }
})

document.querySelector("#head3").addEventListener("mousemove",function(ele){
gsap.to("#mu",{
  
  y:ele.y,
  x:ele.x
})
})
document.querySelector("#head3").addEventListener("mouseenter",function(ele){
  gsap.to("#mu",{
  opacity:1,

  
  })
  })
  document.querySelector("#head3").addEventListener("mouseleave",function(ele){
  gsap.to("#mu",{
  opacity:0,
  
  
  })
  })
}
function sheryAnime() {

  Shery.makeMagnet("#nav-part2 h3" /* Element to target.*/, {
  
  });
  Shery.imageEffect(".img-content,.img2-content", {
    style: 5,

    config: {
      a: { value: 0.92, range: [0, 30] },
      b: { value: -1, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7229062574351653 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.76, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 0.38, range: [0, 10] },
      metaball: { value: 0.49, range: [0, 2] },
      discard_threshold: { value: 0.48, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.37, range: [0, 2] },
      noise_scale: { value: 9.92, range: [0, 100] },
    },
    gooey: true,
  });
}


locoMotive();
loadingAnimation();
mouseAnime();
sheryAnime();

