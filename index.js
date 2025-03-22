var menuicon=document.getElementById("menuicon")
var sidebar=document.getElementById("sidebar")

menuicon.addEventListener("click",function(){
    sidebar.style.right=0
})
var cancel=document.getElementById("cancel")

cancel.addEventListener("click",function(){
    sidebar.style.right="-50%"
})