const img = document.querySelectorAll(".img-text");

img.forEach((ele) =>{
    ele.addEventListener("click", (event) => {
        event.target.style.background = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        event.target.style.color = "white";
      });
})

