const lightmode = document.getElementById("lightmode");

if (localStorage.getItem("lightmode") === "on"){
    document.body.classList.add("lightmode");
}



lightmode.addEventListener("change", function() {
    if (this.checked) {
        document.body.classList.add("lightmode");
        localStorage.setItem("lightmode", "on")
    } else{
        document.body.classList.remove("lightmode")
        localStorage.setItem("lightmode", "off")

    }

});