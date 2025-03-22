var menuicon=document.getElementById("menuicon")
var sidebar=document.getElementById("sidebar")

menuicon.addEventListener("click",function(){
    sidebar.style.right=0
})
var cancel=document.getElementById("cancel")

cancel.addEventListener("click",function(){
    sidebar.style.right="-50%"
})


var filter = document.getElementById("filter")
var products = document.querySelectorAll(".m-5") 

filter.addEventListener("keyup", function (event) {
    var keypress = event.target.value.toUpperCase()
    
    for ( i = 0; i < products.length; i++) {
        var productName = products[i].querySelector("h5").textContent.toUpperCase()
        
        if (productName.indexOf(keypress) < 0) {
            products[i].style.display = "none"
        } else {
            products[i].style.display = "block"
        }
    }
});
