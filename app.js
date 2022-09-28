const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (e)=> {
    const xPosition = e.offsetX;
    const yPosition = e.offsetY;
    let randomNumber = Math.random()*100;
    const spanEl = document.createElement("span");
    spanEl.style.width = `${randomNumber}px`;
    spanEl.style.height = `${randomNumber}px`;
    spanEl.style.left = `${xPosition}px`;
    spanEl.style.top = `${yPosition}px`;
    bodyEl.appendChild(spanEl);
    setTimeout(()=> {
        spanEl.remove();
    }, 2000)
})
