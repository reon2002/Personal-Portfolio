function toggleNavbar(){
    var navbarCollapse = document.getElementById("navbar-collapse");
    if (navbarCollapse.classList.contains("show")){
        navbarCollapse.classList.remove("show");
    } 
    else
    {
        navbarCollapse.classList.add("show");
    }
}