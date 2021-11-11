function create_bubble(leftPosition, topPosition) {
  const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomPosition = randomNum(-80, 0);
  const body = document.querySelector("body");
  const parent = document.createElement("parent");
  const div = document.createElement("div");
  div.classList.add("bubble");

  div.style.left = leftPosition + randomPosition + "px";
  div.style.top = topPosition + randomPosition + "px";
  div.style.transform = `translate(${-(leftPosition + randomPosition)}+"px,${-(
    leftPosition + randomPosition
  )}+"px")`;
  div.animate(
    [
      { transform: `translateX(${-randomPosition}px)` },
      { transform: `translateY(${randomPosition}px)` },
    ],
    {
      duration: 5000,
      iterations: Infinity,
    }
  );
  body.appendChild(div);

  const bubble = document.querySelectorAll(".bubble");

  setTimeout(() => {
    if (bubble.length > 0) {
      div.remove();
    }
  }, 500);
}

window.addEventListener("mousemove", function (e) {
  create_bubble(e.clientX, e.clientY);
});
