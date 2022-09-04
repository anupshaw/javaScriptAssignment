let amnt = document.getElementById("amoun");
let desc = document.getElementById("descriptio");
let cat = document.getElementById("categor");
let ul = document.getElementById("list")


let btn = document.getElementById("submit");
//addItem Event on submit button
btn.addEventListener("click", addItem);


//function addItem
function addItem(e) {
    e.preventDefault();



    
    // create Element
    let liElement = document.createElement("li");
    //li class
    liElement.className = "items";

    let obj={
        itemAmount:amnt.value,
        itemDescription:desc.value,
        itemCategory:cat.value
    }


    // let Text = document.createTextNode(`Expense Amount :<span class='itemValue'> ${amnt.value} </span>Description :<span class='itemValue'>  ${desc.value}</span> Category : <span class='itemValue'> ${cat.value}</span>`);

    let Text = document.createTextNode(`Expense Amount:${amnt.value}:DESCRIPTION:${desc.value}:Category:${cat.value}`);

    // liElement.createTextNode(amnt.value);

    // liElement.createTextNode(desc.value);

    // liElement.createTextNode(cat.value);




    //++++++++DELETE+++++++++++++++++++++++++

    // delete Button
    let dltButton = document.createElement("button");
    //delete Class
    dltButton.className = "delete";
    //delete Text
    let deleteText = document.createTextNode("X");
    //append deleteText to delete button
    dltButton.appendChild(deleteText);

    //++++++++EDIT+++++++++++++++++++++++++

    // Edit Button
    let editButton = document.createElement("button");
    //delete Class
    editButton.className = "edit";
    //delete Text
    let editText = document.createTextNode("EDIT");
    //append deleteText to delete button
    editButton.appendChild(editText);



    //childElement append to list
    liElement.appendChild(Text);
    liElement.appendChild(dltButton);
    liElement.appendChild(editButton);

 
    //li append to ul
    ul.appendChild(liElement);
    // console.log(liElement.firstChild.textContent);


    // let obj={
    //     itemAmount:amnt.value,
    //     itemDescription:desc.value,
    //     itemCategory:cat.value
    // }

    localStorage.setItem(cat.value,JSON.stringify(obj));

   amnt.value="";
   desc.value="";
   cat.value="";

}

ul.addEventListener("click", removeItem)

ul.addEventListener("click", editItem)

//function RemoveItem
function removeItem(e) {
    if (e.target.classList.contains("delete")) {
        if (confirm()) {
            deleteItem(e);
        }
    }
}

// function Edit
function editItem(e){
    // let liobject=JSON.parse(e.target.parentElement.firstChild.textContent);
       if(e.target.classList.contains("edit"))
       {
        console.log(arr[1]);
        amnt.value=arr[1];
        desc.value=arr[3];
        cat.value=arr[5];
         deleteItem(e);
       }
}

//function delete
function deleteItem(e) {
    let parentElement = e.target.parentElement;

    ul.removeChild(parentElement);
}




