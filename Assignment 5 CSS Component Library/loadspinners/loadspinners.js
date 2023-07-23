// Js for the second spinner/loader.

const loader2 = document.getElementById("loader-two")

loader2.addEventListener("click", () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    loader2.style.borderColor = `rgb(${red}, ${green}, 
      ${blue}) transparent white transparent`
});