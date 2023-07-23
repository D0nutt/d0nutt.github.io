// Js for the normal button.

const normButton = document.getElementById("norm-button");

normButton.addEventListener("click" , () => {
    // Add what you want your button to do Here.
});

// This is for the button animation.

normButton.addEventListener("mousedown", (e) => {
    e.target.dataset.pressed = "true";
});

normButton.addEventListener("mouseup", (e) => {
    e.target.dataset.pressed = "false";
});

normButton.addEventListener("mouseleave", (e) => {
    e.target.dataset.pressed = "false";
});

// Js for the icon button.

const iconButton = document.getElementById("icon-button");

iconButton.addEventListener("click" , () => {
    // Add what you want your button to do Here.
});

// This is for the button animation.

iconButton.addEventListener("mousedown", (e) => {
    e.target.dataset.pressed = "true";
});

iconButton.addEventListener("mouseup", (e) => {
    e.target.dataset.pressed = "false";
});

iconButton.addEventListener("mouseleave", (e) => {
    e.target.dataset.pressed = "false";
});

// Js for the floating icon button.

const fabButton = document.getElementById("fab-button");

fabButton.addEventListener("click" , () => {
    // Add what you want your button to do Here.
});

// This is for the button animation.

fabButton.addEventListener("mousedown", (e) => {
    e.target.dataset.pressed = "true";
});

fabButton.addEventListener("mouseup", (e) => {
    e.target.dataset.pressed = "false";
});

fabButton.addEventListener("mouseleave", (e) => {
    e.target.dataset.pressed = "false";
});