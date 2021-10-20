window.onload = () => {
  const form1 = document.querySelector("#addForm");
  
  let items = document.getElementById("items");
  let submit = document.getElementById("submit");

  let editItem = null;

  form1.addEventListener("submit", Add);
  items.addEventListener("click", Delete);
}

//function to add items on clicking Add button

function Add(e)
{
  e.preventDefault();
  if (submit.value != "Add") {
    //console.log("Hello");

    editItem.target.parentNode.childNodes[0].data = document.getElementById("item").value;

    submit.value = "Add";
    document.getElementById("item").value = "";

    /* document.getElementById("lblsuccess").innerHTML = "Text edited successfully";

    document.getElementById("lblsuccess") .style.display = "block";

    setTimeout(function () {
        document.getElementById("lblsuccess")
            .style.display = "none";
    }, 3000); */

    return false;
}
  let newItem = document.getElementById("item").value;
    if (newItem.trim() == "" || newItem.trim() == null)
        return false;
    else
        document.getElementById("item").value = "";

/*     let checkBox = document.createElement("input");
    checkBox.type="checkbox"; */
    //checkBox.className = "form-check-input me-2"


    let li = document.createElement("li");
    li.className = "list-group-item";

    //for Delete button
    let deleteButton = document.createElement("button");
    deleteButton.className = "btn-outline-danger btn btn-sm float-right delete"; 
    deleteButton.appendChild(document.createTextNode("Delete"));

    //for Edit button
    let editButton = document.createElement("button");  
    editButton.className = "btn-outline-success btn btn-sm float-right edit";  
    editButton.appendChild(document.createTextNode("Edit"));

    //appending items
    //li.appendChild(checkBox);
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(deleteButton);
    li.appendChild(editButton);

    /* let listitem = li.appendChild(document.createTextNode(newItem));
    checkbox.addEventListener('change', function() {
      if(checkbox.checked == true){listitem.style.textDecoration = checkbox.checked ? 'line-through' : 'none';} 
    }); */
    items.appendChild(li);

}

//deleting an item
function Delete(e)
{
  e.preventDefault();
  if(e.target.classList.contains("delete"))
  {
    let li = e.target.parentNode;
    items.removeChild(li);
  }

//editing an item
  if (e.target.classList.contains("edit")) {
    document.getElementById("item").value = e.target.parentNode.childNodes[0].data;
    submit.value = "Edit";
    editItem = e;
  }
}

//Clear All button
var clearAll = document.getElementById("clear-list");
clearAll.addEventListener("click",function(e){
  var ToDoitems = items.children;
  while(ToDoitems.length > 0){
    ToDoitems.item(0).remove();
  }
}); 
function toggleButton(ref, btnID) {
  document.getElementById(btnID).disabled = false;
}