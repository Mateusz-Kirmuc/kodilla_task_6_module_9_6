var list = document.getElementById("list");
var button = document.getElementById("addElem");

function handleButtonClick(event){
  var newElement = document.createElement("li");
  newElement.innerText = "item " + document.getElementsByTagName("li").length;
  list.appendChild(newElement);
}

button.addEventListener("click", handleButtonClick);
