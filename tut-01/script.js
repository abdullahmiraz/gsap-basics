let tl = gsap.timeline();

tl.from("h2", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});
tl.from("h4", {
  y: -20,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});

tl.from("h1", {
  y: 20,
  opacity: 0,
  duration: 1,
  scale: 0.2,
});

// const tl = gsap.timeline();

// tl.to("#box1", {
//   x: 1200,
//   duration: 1.5,
//   delay: 1,
//   rotate: 360,
// });

// tl.to("#box2", {
//   x: 1200,
//   duration: 1.5,
//   repeat: 1,
//   yoyo: true,
// });
// tl.to("#box3", {
//   x: 1200,
//   duration: 1.5,
//   repeat: 1,
//   borderRadius: "50%",
//   yoyo: true,
// });

// gsap.to("#box1", {
//   x: 1200,
//   duration: 1.5,
//   delay: 1,
//   rotate: 360,
//   //   repeat: 1,
//   yoyo: true,
// });

// gsap.to("#box2", {
//   x: 1200,
//   backgroundColor: "yellow",
//   duration: 1.5,
//   delay: 2.5,
// });

// gsap.to("#box3", {
//   x: 1200,
//   scale: 0.5,
//   borderRadius: "50%",
//   duration: 1.5,
//   delay: 4,
// });
