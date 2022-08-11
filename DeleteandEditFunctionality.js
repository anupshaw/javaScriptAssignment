var form = document.getElementById('my_form')



var ul = document.getElementById('items')


var search = document.getElementById('filter');

var btn=document.getElementById('submit');

// add Event on submit button for adding item

btn.addEventListener('click', addItem);

// add Event  for filtering item

search.addEventListener('keyup', filterItem)

//add childelement

function addItem(e)            //  why css is not applied to inserted element
{
  e.preventDefault();
  var li = document.createElement('li');
  li.className = 'list-group-item'

  var value = document.getElementById('text').value;



  li.appendChild(document.createTextNode(value));


  // Delete Button
  var btn = document.createElement('button');

  btn.className = 'btn btn-danger btn-sm float-right delete';

  btn.appendChild(document.createTextNode('x'));

  li.appendChild(btn);

  //edit button

  var editButton = document.createElement('button');
  editButton.className = 'edit';
  editButton.appendChild(document.createTextNode('Edit'));
  li.appendChild(editButton);

// console.log(li);

  ul.appendChild(li);


  document.getElementById('text').value="";

}

// trying to add event on edit button

let editUser=document.getElementsByClassName('edit');  // why not working
console.log(editUser);
editUser.addEventListener('click',EditDetails);


function EditDetails(e)
{
  console.log(1);
}

//Edit Details Function

// ul.addEventListener('click',EditDetails)
 
// function EditDetails(e)
// {
//  if(e.target.classList.contains('edit'))
//      {
//        e.preventDefault();
//        var li = e.target.parentElement;
//         document.getElementById('text').value=li.firstChild.textContent;
//         // removeItem(e);
//         deleteItem(li)
//      }
// }


//remove childelement


ul.addEventListener('click', removeItem);               //why remove is not working

function removeItem(e) {

  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      var li = e.target.parentElement;
      //  console.log(li);
      ul.removeChild(li);
    }

  }
}

// Delete details function

  function deleteItem(li)
  {
    let parentNode=document.getElementById('items')
    parentNode.removeChild(li);
    console.log(li);
  }
  // console.log(e.target.classList);

// filter function

function filterItem(e) {
  let text = e.target.value.toLowerCase();

  let item = document.getElementsByClassName('list-group-item');

  // convert into array from iterable object and then iterationg with the help of forEach method

  Array.from(item).forEach(function (items) {

    itemName = items.firstChild.textContent;

    //checking whether searching item is available .if it available then it will display

    if (itemName.toLowerCase().indexOf(text.toLowerCase()) != -1) {
      items.style.display = 'block'
    }
    else {
      items.style.display = 'none'
    }
  })

}






