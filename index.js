// Write your code here!
const main = document.getElementById("main");
main.remove("main");
const newHeader = document.createElement("h1");
newHeader.innerHTML = "Patrick is the champion";
newHeader.setAttribute("id", "victory");