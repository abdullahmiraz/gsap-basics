gsap.to("#box1", {
  x: 1200,
  duration: 1.5,
  delay: 1,
  rotate: 360,
  //   repeat: 1,
  yoyo: true,
});

gsap.to("#box2", {
  x: 1200,
  backgroundColor: "yellow",
  duration: 1.5,
  delay: 2.5,
});

gsap.to("#box3", {
  x: 1200,
  scale: 0.5,
  borderRadius: "50%",
  duration: 1.5,
  delay: 4,
});
