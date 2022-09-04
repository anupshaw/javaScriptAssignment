let amnt = document.getElementById("amount");
let desc = document.getElementById("description");
let cat = document.getElementById("category");
let ul = document.getElementById("list");
let btn = document.getElementById("submit");

//addItem Event on submit button

btn.addEventListener("click", addItem);


//function addItem
function addItem(e) {
e.preventDefault();
console.log(amnt.value);

    let obj={
        itemAmount:amnt.value,
        itemDescription:desc.value,
        itemCategory:cat.value
    }

    // store in localStorage
    localStorage.setItem(cat.value,JSON.stringify(obj));

    showExpenseDetails();

    //field get blank once someone hit submitButton
    amnt.value="";
    desc.value="";
    cat.value="";
}


function showExpenseDetails()
{
   let parentNode=document.getElementById("list");

    let liElement=`<li id="${cat.value}">Expense Amount : ${amnt.value} Description : ${desc.value} Category : ${cat.value}
    <button class="delete" onclick=deleteItem('${cat.value}')>X</button>
    <button class="edit" onclick=editItem('${amnt.value}','${desc.value}','${cat.value}')>Edit</button>
    </li>`

    parentNode.innerHTML=parentNode.innerHTML+liElement;
}






//Edit  function
function editItem(amountValue,descriptionValue,categoryValue){
    console.log(1);

    amnt.value=amountValue;
    desc.value=descriptionValue;
    cat.value=categoryValue;

    deleteItem(categoryValue);

}

//delete  function 
function deleteItem(categoryValue) {
    let parentElement = document.getElementById("list");

    let childElement=document.getElementById(categoryValue);

    localStorage.removeItem(categoryValue);

    parentElement.removeChild(childElement);
    console.log(childElement);
    console.log(categoryValue);
}




