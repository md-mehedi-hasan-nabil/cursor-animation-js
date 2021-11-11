function create_bubble(leftPosition, topPosition) {
  const body = document.querySelector("body");
  const div = document.createElement("div");

  div.classList.add("bubble");

  div.style.left = leftPosition + "px";
  div.style.top = topPosition + "px";
  div.animate([{ transform: "scale(1.5)" }, { transform: "scale(0)" }], {
    duration: 1000,
    iterations: Infinity,
  });
  body.appendChild(div);

  setTimeout(() => {
    const bubble = document.querySelectorAll(".bubble");
    if (bubble.length > 0) {
      div.remove();
    }
  }, 1000);
}
window.addEventListener("mousemove", function (e) {
  create_bubble(e.clientX, e.clientY);
});
