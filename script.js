document.getElementById("openButton").addEventListener("click", openSideBar)

document.getElementById("closeButton").addEventListener("click", closeSideBar)




function openSideBar() {
  document.querySelector("nav").style.width = "250px"
  document.querySelector("nav").style.paddingLeft = "1.5%"
  document.querySelector("nav").style.paddingRight = "1.5%"
  document.querySelector("#main").style.marginLeft = "0%"
}

function closeSideBar() {
  document.querySelector("nav").style.width = "0"
  document.querySelector("nav").style.paddingLeft = "0"
  document.querySelector("nav").style.paddingRight = "0"
  document.querySelector("#main").style.marginLeft = "0"
}
