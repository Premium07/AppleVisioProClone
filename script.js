function locomotiveScroll() {
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

locomotiveScroll();


videoAnimation = () => {
  gsap.to(".page1>video", {
    scrollTrigger: {
      trigger: ".page1>video",
      start: "5% top",
      end: "bottom top",
      // markers: true,
      scroller: "#main",
    },
    onStart: () => {
      document.querySelector(".page1>video").play();
    },
  });

  gsap.to(".page1", {
    scrollTrigger: {
      trigger: ".page1",
      start: "top top",
      end: "bottom top",
      scroller: "#main",
      pin: true,
    },
  });

  gsap.to(".page1-bottom", {
    scrollTrigger: {
      trigger: ".page1",
      start: "5% top",
      end: "bottom top",
      scroller: "#main",
    },
    opacity: 0,
  });
};

videoAnimation();

scrollPageAnimation = () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page2",
      start: "top top",
      scrub: 1,
      scroller: "#main",
      // markers: true,
      pin: true,
    },
  });

  tl.to(".page2>h2", {
    top: "-50%",
  });

  // tl.to(".page2>.overlay ", {
  //   top: "-100%",
  // });

  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page3",
      start: "top top",
      scrub: 1,
      scroller: "#main",
      // markers: true,
      pin: true,
    },
  });

  tl2.to(".page3>h2", {
    top: "-50%",
  });

  // tl2.to(".page3>.overlay ", {
  //   top: "-100%",
  // });

  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page4",
      start: "top top",
      scrub: 1,
      scroller: "#main",
      // markers: true,
      pin: true,
    },
  });

  tl3.to(".page4>h2", {
    top: "-50%",
  });

  // tl3.to(".page4>.overlay ", {
  //   top: "-100%",
  // });

  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page5",
      start: "top top",
      scrub: 1,
      scroller: "#main",
      // markers: true,
      pin: true,
      delay: 2,
    },
  });

  tl4.to(".page5>h2", {
    top: "-50%",
  });

  // tl4.to(".page5>.overlay ", {
  //   top: "-100%",
  // });

  let tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page7",
      start: "top top",
      scrub: 1,
      scroller: "#main",
      // markers: true,
      pin: true,
      // delay: 2,
    },
  });

  tl5.to(".page7>.center-p7", {
    top: "-50%",
  });

  tl5.to(".page7>.overlay ", {
    top: "-100%",
  });
};

scrollPageAnimation();

canvas = () => {
  const canvas = document.querySelector(".page10>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0000.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0199.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0100.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0050.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0150.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0025.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0075.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0125.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0175.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0012.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0038.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0063.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0088.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0113.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0138.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0163.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0188.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0006.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0019.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0032.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0057.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0069.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0044.jpg
http://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0082.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0094.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0107.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0119.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0132.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0144.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0157.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0169.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0182.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0194.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0003.jpg
 `;
    return data.split("\n")[index];
  }

  const frameCount = 35;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `canvas`,
      //   set start end according to preference
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.min(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
  });
};

canvas();

secondCanvas = () => {
  const canvas = document.querySelector(".page20>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
    .//canvasImages/Vision00001.png
    .//canvasImages/Vision00002.png
    .//canvasImages/Vision00003.png
    .//canvasImages/Vision00004.png
    .//canvasImages/Vision00005.png
    .//canvasImages/Vision00006.png
    .//canvasImages/Vision00007.png
    .//canvasImages/Vision00008.png
    .//canvasImages/Vision00009.png
    .//canvasImages/Vision00010.png
    .//canvasImages/Vision00011.png
    .//canvasImages/Vision00012.png
    .//canvasImages/Vision00013.png
    .//canvasImages/Vision00014.png
    .//canvasImages/Vision00015.png
    .//canvasImages/Vision00016.png
    .//canvasImages/Vision00017.png
    .//canvasImages/Vision00018.png
    .//canvasImages/Vision00019.png
    .//canvasImages/Vision00020.png
    .//canvasImages/Vision00021.png
    .//canvasImages/Vision00022.png
    .//canvasImages/Vision00023.png
    .//canvasImages/Vision00024.png
    .//canvasImages/Vision00025.png
 `;
    return data.split("\n")[index];
  }

  const frameCount = 25;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `.page20`,
      //   set start end according to preference
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: ".page20",
    pin: true,
    // markers:true,
    scroller: `#main`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
  });
};

secondCanvas();

sensorsAnimation = () => {
  let tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page23",
      start: "top top",
      scrub: 1,
      scroller: "#main",
      // markers: true,
      pin: true,
    },
  });
  
  tl6.to(".page23>.off", {
    opacity: 0,
  });
  
  let tl7 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page24",
      start: "top top",
      scrub: 1,
      scroller: "#main",
      // markers: true,
      pin: true,
    },
  });
  
  tl7.to(".page24>.snroff", {
    opacity: 0,
  });
  
  gsap.to(".page25>img", {
    scrollTrigger: {
      trigger: ".page25>img",
      start: "top bottom",
      end: "bottom top",
      scrub: 0.5,
      scroller: "#main",
    },
    opacity: 1,
  });
  
}

sensorsAnimation();