let isNavDrawerOpen = false;
const navDrawer = document.getElementById("navDrawer");

document.getElementById("navbar-button").addEventListener("click" , () => {
    isNavDrawerOpen = !isNavDrawerOpen;
    navDrawer.dataset.open = `${isNavDrawerOpen}`;
});