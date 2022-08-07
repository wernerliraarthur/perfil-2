function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("body").style.marginLeft = "250px";
    document.getElementById("body").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("body").style.marginLeft = "0";
    document.getElementById("body").style.backgroundColor = "rgba(0,0,0,0)";
}