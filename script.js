var button = document.getElementById("Enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var liElements = document.querySelectorAll("li");
var del = document.getElementsByClassName("delete");

function inputValue() {
	if(input.value.length > 0)
		return true;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
    //Adding del button in list element
    var delButton = createDeleteButton();
	li.appendChild(delButton);
	
    ul.appendChild(li);
    input.value = "";
    addEventListnerToNewlyAddedListItem(document.querySelectorAll("li").length);
}

function addEventListnerToNewlyAddedListItem(i) {
	liElements = document.querySelectorAll("li");
    liElements[i-1].addEventListener("click", function(event){
 	toggleDoneClass(event, i-1)});
}

function createDeleteButton() {
  const delButton = document.createElement("button");
  delButton.classList.add("delete");
  delButton.type = 'button';
  delButton.appendChild(document.createTextNode("Delete"));
  return delButton;
}

function deleteListElement(event) {
  const {
    target: btn
  } = event; // get the target property from the even object as a local variable btn
  if (btn.matches('button.delete')) {
    btn.closest('ul').removeChild(btn.parentElement);
  }
}

function onClick() {
	if(inputValue())
		createListElement();
}

function onEnterPress(event) {
	if(inputValue() && event.keyCode == 13)
		createListElement();
}

function toggleDoneClass(event, i) {
 	console.log(liElements[i].classList);
 	if(liElements[i].classList.contains("done")) {
 		liElements[i].classList.remove("done");
 	} else {
 		liElements[i].classList.add("done");
 	}
	//console.log( Array.from(li).indexOf(event.target) );
  }


button.addEventListener("click", onClick);

input.addEventListener("keypress", onEnterPress);

ul.addEventListener('click', deleteListElement);

 for(let i=0; i<liElements.length; i++) {
 liElements[i].addEventListener("click", function(event){
 	toggleDoneClass(event, i);
 });
} 
