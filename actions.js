const addToDoButton = document.getElementById('add');
const toDoContainer = document.getElementById('toDocontainer');
const inputField = document.getElementById('inputField');

//=========================Add item function=======================
addToDoButton.addEventListener('click', function () {
  const paragraph = document.createElement('p');
  paragraph.classList.add('paragraph-styling')
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  //clear input
  inputField.value = "";

  //remove item
  var removeTask = document.createElement('input');
  removeTask.setAttribute('type', 'button');
  removeTask.setAttribute("value", "X");
  removeTask.setAttribute("id", "remove");
  //remove event
  //paremNode ---> property returns the parent of the specified node in the DOM tree
  removeTask.addEventListener('click', function() {
    paragraph.parentNode.removeChild(paragraph);
  });
  paragraph.appendChild(removeTask);
})
//===========================END===================================

//=========================Dio meme :)=============================
var a;
function show_hide() {
  if (a === 1){
    document.getElementById('image').style.display = 'inline';
    return a = 0;
  }
  else {
    document.getElementById('image').style.display = 'none';
    return a = 1;
  }
}
//===========================END==================================
