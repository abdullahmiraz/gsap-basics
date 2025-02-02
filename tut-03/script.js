let initialPath = `M 10 100 Q 500 100 990 100`;

let finalPath = `M 10 100 Q 500 100 990 100`;

var string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
  path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
  gsap.to(`svg path`, {
    attr: { d: path },
    duration: 0.2,
    ease: "power3.Out",
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to(`svg path`, {
    attr: { d: finalPath },
    duration: 1.3,
    ease: "elastic.out(1,  0.3)",
  });
});
